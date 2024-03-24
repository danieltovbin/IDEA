import jwt from "jwt-simple";
import UserModel from "../Users/usersModel";
import ProjectModel, { IProject } from "./projectModel";
import { fakerHE } from "@faker-js/faker";
const { SECRET_KEY } = process.env;

export async function startProject(req, res) {
  try {
    const { projectInfo, userToken } = req.body;
    const { userId } = jwt.decode(userToken, SECRET_KEY);

    const userDB = await UserModel.findById(userId);
    if (!userDB) throw new Error("User not found login first");

    const newProject = new ProjectModel({
      ownerId: userId,
      projectName: projectInfo.projectName,
      projectCategory: projectInfo.projectCategory,
    });
    const projectDB = await newProject.save();

    res.send({ ok: true, projectDB });
  } catch (error) {
    console.error(error);
  }
}

export async function getProjectById(req, res) {
  try {
    const { projectId } = req.body;
    console.log("projectId:", projectId);
    await startProject(req, res);
    
    const projectDB = await ProjectModel.findById(projectId);
    console.log("projectDB:", projectDB); 
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



async function addRandomProject() {
  try {
    const newProject = new ProjectModel({
      ownerId: "65c22d8fd830152457ab74e8",
      projectName: fakerHE.music.songName(),
      projectCategory: ["ציור"],
      ownerName: fakerHE.person.fullName(),
      images: [
        fakerHE.image.url(),
        fakerHE.image.url(),
        fakerHE.image.url(),
        fakerHE.image.url(),
      ],
      videoLink:
        "https://www.youtube.com/watch?v=RFGWDSCNclg&ab_channel=%D7%9B%D7%90%D7%9F%7C%D7%97%D7%93%D7%A9%D7%95%D7%AA-%D7%AA%D7%90%D7%92%D7%99%D7%93%D7%94%D7%A9%D7%99%D7%93%D7%95%D7%A8%D7%94%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99",
      aid: Math.round(Math.random() * 900000),
      projectStory: createProjectStory(),
      shortDescription: fakerHE.lorem.paragraph(),
      raised: Math.round(Math.random() * 600000),
      ownerInfo: {
        ownerName: fakerHE.person.fullName(),
        location: fakerHE.location.city(),
        ownerDescription: fakerHE.lorem.paragraph(),
        phoneNumber: fakerHE.phone.number(),
        profileImageUrl: fakerHE.image.avatar(),
      },
      gifts: [
        {
          name: fakerHE.commerce.productName(),
          description: fakerHE.commerce.productDescription(),
          price: Math.floor(Math.floor(Math.random() * 1001) / 50) * 50,
        },
        {
          name: fakerHE.commerce.productName(),
          description: fakerHE.commerce.productDescription(),
          price: Math.floor(Math.floor(Math.random() * 1001) / 50) * 50,
        },
        {
          name: fakerHE.commerce.productName(),
          description: fakerHE.commerce.productDescription(),
          price: Math.floor(Math.floor(Math.random() * 1001) / 50) * 50,
        },
        {
          name: fakerHE.commerce.productName(),
          description: fakerHE.commerce.productDescription(),
          price: Math.floor(Math.floor(Math.random() * 1001) / 50) * 50,
        },
        {
          name: fakerHE.commerce.productName(),
          description: fakerHE.commerce.productDescription(),
          price: Math.floor(Math.floor(Math.random() * 1001) / 50) * 50,
        },
      ],
    });
    const projectDB = await newProject.save();
  } catch (error) {
    console.error(error);
  }
}
// async function addMultipleProjects(numProjects) {
//   for (let i = 0; i < numProjects; i++) {
//     await addRandomProject();
//   }
// }

// // Call the function to add 10 projects
// addMultipleProjects(10);

export function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function createProjectStory() {
  return `      <div>
  <h1>${fakerHE.commerce.productName()}</h1>
  <h3 style="color: gray; font-size: 18px;">${fakerHE.commerce.productName()}</h3>
  <p>${fakerHE.lorem.paragraphs()}</p>
  <p style={color:"red"}>${fakerHE.company.catchPhraseDescriptor()}</p>
  <img src=${fakerHE.image.url()}/>
  <h3 style="color: gray; font-size: 18px;">${fakerHE.commerce.productName()}</h3>
  <p>${fakerHE.lorem.paragraphs()}</p>
  <p style={color:"red"}>${fakerHE.company.catchPhraseDescriptor()}</p>
  <img src=${fakerHE.image.url()}/>
  <h3 style="color: gray; font-size: 18px;">${fakerHE.commerce.productName()}</h3>
  <p>${fakerHE.lorem.paragraphs()}</p>
  <p>${fakerHE.lorem.paragraphs()}</p>
  <p>${fakerHE.lorem.paragraphs()}</p>
  <p style={color:"red"}>${fakerHE.company.catchPhraseDescriptor()}</p>
  <img src=${fakerHE.image.url()}/>
  <h2>${fakerHE.commerce.productName()}</h2>
  <p>הנה כמה לינקים חשובים שיעזרו לכם להכיר אותנו: <a href="#">${fakerHE.commerce.productName()}</a>, <a href="#">${fakerHE.commerce.productName()}</a>, <a href="#">${fakerHE.commerce.productName()}</a></p>
    </div>`;
}

