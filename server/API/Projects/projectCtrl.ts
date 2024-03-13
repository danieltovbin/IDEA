import jwt from "jwt-simple";
import ProjectModel, { IProject } from "./projectModel";
import UserModel from "../Users/usersModel";
import { uploadImageController } from "../Cloudinary/cloudinaryCtrl";
const { SECRET_KEY } = process.env;

export async function startProject(req, res) {
  try {
    const { projectInfo, userToken } = req.body;
    console.log(projectInfo, userToken);
    const { userId } = jwt.decode(userToken, SECRET_KEY);
    console.log(userId);

    const userDB = await UserModel.findById(userId);
    if (!userDB) throw new Error("User not found login first");

    const newProject = new ProjectModel({
      ownerId: userId,
      projectName: projectInfo.projectName,
      projectCategory: projectInfo.projectCategory,
    });
    const projectDB = await newProject.save();
    console.log(projectDB);

    res.send({ ok: true, projectDB });
  } catch (error) {
    console.error(error);
  }
}

export async function getProjectById(req, res) {
  try {
    const { projectId } = req.body;
    const projectDB = await ProjectModel.findById(projectId);
    if (!projectDB) throw new Error("Project not found");
    res.send({ ok: true, projectDB });
  } catch (error) {
    console.error(error);
  }
}

export async function updateProject(req, res) {
  try {
    const { projectId, projectForm } = req.body;
    const updatedFields = {};
    for (const key in projectForm) {
      if (projectForm[key] !== null && projectForm[key] !== "") {
        updatedFields[key] = projectForm[key];
      }
    }

    if (Object.keys(updatedFields).length > 0) {
     const projectDB = await ProjectModel.findOneAndUpdate({ _id: projectId }, updatedFields, {new: true});
     if( checkIsProjectCompleted(projectDB )){
      projectDB.isProjectCompleted =  true;
      await projectDB.save();
     }
    }
  } catch (error) {
    console.error(error);
  }
}

export async function updateOneOnProject(req, res) {
  try {
    const { projectId, key, value } = req.body;
    const updatedFields = {};

    if (!projectId || !key || !value)
      throw new Error("some details are missing");
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      for (const key in value) {
        if (value[key] !== null && value[key] !== "") {
          updatedFields[key] = value[key];
        }
      }
    }
    // const  = await ProjectModel.updateOne(
    //   { _id: projectId },
    //   { [key]: value }, 
    //   { new: true }
    // );
    const projectDB = await ProjectModel.findOneAndUpdate(
      { _id: projectId },
      { [key]: value },
      { new: true }
    );

   if( checkIsProjectCompleted(projectDB )){
    projectDB.isProjectCompleted =  true;
    await projectDB.save();
   }

    if (!projectDB)
      throw new Error("not found project with this id in database");
    res.send({ ok: true });
  } catch (error) {
    console.error(error);
  }
}

export async function get4latestProjects(req, res) {
  try {
    const latestProjects = await ProjectModel.find({isProjectCompleted: true})
      .sort({ createdAt: -1 })
      .limit(4);
    console.log(latestProjects);
    res.send({ ok: true, latestProjects });
  } catch (error) {
    console.error(error);
  }
}

export async function allProjects(req, res) {
  try {
    const allProjects = await ProjectModel.find({});
    if (allProjects.length === 0) {
      return res.send({ ok: true, allProjects: [] });
    }
    res.send({ ok: true, allProjects });
  } catch (error) {
    console.error(error);
    res.status(500).send({ ok: false, error: "Internal Server Error" });
  }
}

export async function allCompletedProjects(req, res) {
  try {
    const allProjects = await ProjectModel.find({isProjectCompleted: true});
    if (allProjects.length === 0) {
      return res.send({ ok: true, allProjects: [] });
    }
    res.send({ ok: true, allProjects });
  } catch (error) {
    console.error(error);
    res.status(500).send({ ok: false, error: "Internal Server Error" });
  }
}

export async function deleteProject(req, res) {
  try {
    const { projectId, userToken } = req.body;
    console.log(projectId, userToken);

    const deletedProject = await ProjectModel.findOneAndDelete({
      _id: projectId,
    });
    if (!deletedProject) throw new Error("Project not deleted");
    else res.send({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ ok: false, error: "Internal Server Error" });
  }
}

function checkIsProjectCompleted(project: IProject) {
  if (
    project.projectName &&
    project.projectName != "" &&
    project.projectStory &&
    project.projectStory != "" &&
    project.shortDescription &&
    project.shortDescription != "" &&
    project.images &&
    project.images.length > 0 &&
    project.videoLink &&
    project.videoLink != "" &&
    project.aid &&
    project.aid > 0 &&
    project.ownerInfo &&
    project.ownerInfo.ownerName &&
    project.ownerInfo.ownerName != "" &&
    project.ownerInfo.profileImageUrl &&
    project.gifts &&
    project.gifts.length > 0
  ) {
    return true;
  }
  return false;
}
