import jwt from "jwt-simple";
import ProjectModel from "./projectModel";
import UserModel from "../Users/usersModel";
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
      await ProjectModel.updateOne({ _id: projectId }, updatedFields);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function updateOneOnProject(req, res) {
  try {
    const { projectId, key, value } = req.body;
    if (!projectId || !key || !value)
      throw new Error("some details are missing");
    const projectDB = await ProjectModel.updateOne(
      { _id: projectId },
      { [key]: value }
    );
    if (!projectDB)
      throw new Error("not found project with this id in database");
    res.send({ ok: true });
  } catch (error) {
    console.error(error);
  }
}
