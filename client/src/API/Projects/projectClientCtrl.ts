import axios from "axios";

export let environment = "DEV";
const CLIENT_DEV_URL = "http://localhost:3000";
const CLIENT_PROD_URL = "https://idea-getappyourstartup-server.onrender.com";

environment = environment === "DEV" ? CLIENT_DEV_URL : CLIENT_PROD_URL;

export async function startProject(projectInfo: any) {
  try {
    const userToken = sessionStorage.getItem("userToken");

    const { data } = await axios.post(`${environment}/API/projects/startProject`, {
      projectInfo,
      userToken,
    });

    sessionStorage.setItem("projectId", data.projectDB._id);

    if (data.ok) return { ok: true };
    else throw new Error("Could not create project");
  } catch (error) {
    console.error("Failed to start project in client Side:" + error);
    return { ok: false };
  }
}

export async function getProjectById() {
  try {
    const projectId = sessionStorage.getItem("projectId");
    const { data } = await axios.post(`${environment}/API/projects/getProjectById`, {
      projectId,
    });
    if (data.projectDB) return data.projectDB;
    else return undefined;
  } catch (error) {
    console.error(error);
  }
}

export async function updateProject(projectForm: Project) {
  try {
    const projectId = sessionStorage.getItem("projectId");
    const { data } = await axios.put(`${environment}/API/projects/updateProject`, {
      projectForm,
      projectId,
    });
    if (!data.ok) throw new Error("project update failed on server side");
  } catch (error) {
    console.error(error);
  }
}

export async function updateOneOnProject(key: string, value: any) {
  try {
    const projectId = sessionStorage.getItem("projectId");
    const { data } = await axios.patch(`${environment}/API/projects/updateOne`, {
      value,
      key,
      projectId,
    });
    if (!data.ok) throw new Error("project update failed on server side");
  } catch (error) {
    console.error(error);
  }
}

export async function uploadImage(file: any, key: string) {
  try {
    if (!file || !key)
      throw new Error(
        "uploadImage in client side failed - file or key not provided"
      );
    const formData = new FormData();
    formData.append("image", file);

    const projectId = sessionStorage.getItem("projectId");
    formData.append("projectId", projectId!);
    formData.append("key", key);

    await axios
      .post(`${environment}API/cloudinary/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  } catch (error) {
    console.error("Error uploading image:", error);
  }
}

export async function getLast4projects() {
  try {
    const { data } = await axios.get(`${environment}/API/projects/get4latestProjects`);
    if (data) return data;
    else return [];
  } catch (error) {
    console.error(error);
  }
}
export async function allprojects() {
  try {
    const { data } = await axios.get(`${environment}/API/projects/allProjects`);
    if (data) return data;
    else return [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function allCompletedProjects() {
  try {
    const { data } = await axios.get(`${environment}/API/projects/allCompletedProjects`);
    if (data) return data;
    else return [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function deleteProject(projectId: string) {
  try {
    const userToken = sessionStorage.getItem("userToken");
    if (!userToken) throw new Error("User token not found in client session");
    if (!projectId) throw new Error("project not found");
    const { data } = await axios.post(`${environment}/API/projects/deleteProject`, {
      userToken,
      projectId,
    });

    if (!data || data.ok === false) throw new Error("server error");
    return data.ok ? { ok: true } : { ok: false, error: "server error" };
  } catch (error) {
    console.error(error);
    return { ok: false, error: error };
  }
}
