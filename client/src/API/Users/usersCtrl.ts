import axios from "axios";

export const register = async (userData: {userName:string, password:string, email:string, name:string}) => {
  try {
    const { userName, password, email, name } = userData;
    if (!userName || !password || !email || !name)
      throw new Error("please complete all fields");
    const { data } = await axios.post("/API/users/register", {
      userName,
      password,
      email,
      name,
    });
    if (!data) throw new Error("connection to server is fail");
  } catch (error) {
    console.error(error);
  }
};

export const login =async (userData:{userName:string, password:string})=>{
  try {
    const { userName, password } = userData;
    console.log(userName, password)
    
    if (!userName || !password)
      throw new Error("please complete all fields");
    const { data } = await axios.post("/API/users/login", {
      userName,
      password,
    });
    if (!data) throw new Error("connection to server is fail");
  } catch (error) {
    console.error(error);
  }
}
