import axios from "axios";

export async function startProject(projectInfo: any) {
  try {
    const { projectName, projectCategory } = projectInfo;
    const userToken = sessionStorage.getItem("userToken");

    console.log(projectName, projectCategory);
    const { data } = await axios.post("/API/projects/startProject", {
      projectInfo,
      userToken,
    });

    sessionStorage.setItem("projectId", data.projectDB._id);

    if (data.ok) return { ok: true };
    else throw new Error("Could not create project");
  } catch (error) {
    console.log("Failed to start project in client Side:");
    console.error(error);
    return { ok: false };
  }
}

export async function getProjectById() {
  try {
    const projectId = sessionStorage.getItem("projectId");
    const { data } = await axios.post("/API/projects/getProjectById", {
      projectId,
    });
    console.log(data);
    if (data.projectDB) return data.projectDB;
    else return undefined;
  } catch (error) {
    console.error(error);
  }
}

export async function updateProject(projectForm: Project) {
  try {
    console.log(projectForm);
    const projectId = sessionStorage.getItem("projectId");
    const { data } = await axios.put("/API/projects/updateProject", {
      projectForm,
      projectId,
    });
    if (!data.ok) throw new Error("project update failed on server side");
  } catch (error) {
    console.error(error);
  }
}

export async function updateOneOnProject(key: string, value:any) {
  try {
    console.log(key , value);
    const projectId = sessionStorage.getItem("projectId");
    const { data } = await axios.patch("/API/projects/updateOne", {
      value,
      key,
      projectId,
    });
    if (!data.ok) throw new Error("project update failed on server side");
  } catch (error) {
    console.error(error);
  }
}
