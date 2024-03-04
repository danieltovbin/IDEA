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

export async function updateOneOnProject(key: string, value: any) {
  try {
    console.log(key, value);
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

    const response = await axios
      .post("API/cloudinary/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Image uploaded successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
    //@ts-ignore
    console.log("Image uploaded successfully:", response.data.imageUrl);
  } catch (error) {
    console.error("Error uploading image:", error);
  }
}

export async function getLast4projects() {
  try {
    const { data } = await axios.get("/API/projects/get4latestProjects");
    console.log(data);
    if (data) return data;
    else return [];
  } catch (error) {
    console.error(error);
  }
}
export async function allprojects() {
  try {
    const { data } = await axios.get("/API/projects/allProjects");
    console.log("data in allprojects", data);
    if (data) return data;
    else return [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function deleteProject(projectId: string, ) {
  try {
    const userToken = sessionStorage.getItem("userToken");
    if(!userToken) throw new Error("User token not found in client session");
    const params = {
      userToken: userToken,
      projectId: projectId,
    };
    if (!projectId) throw new Error("project not found");
    const { data } = await axios.post(`/API/projects/deleteProject`, {userToken, projectId});

    if (!data || data.ok === false) throw new Error("server error");
    return data.ok ? { ok: true } : { ok: false, error: "server error" };
  } catch (error) {
    console.error(error);
    return { ok: false, error: error };
  }
}
