import axios from "axios";

export const register = async (userData: {
  userName: string;
  password: string;
  email: string;
  name: string;
}) => {
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
    if (data.ok == false) {
      return false;
    } else return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const login = async (userData: {
  userName: string;
  password: string;
}) => {
  try {
    const { userName, password } = userData;

    if (!userName || !password) throw new Error("please complete all fields");
    const { data } = await axios.post("/API/users/login", {
      userName,
      password,
    });

    if (data.ok) return { ok: true, userToken: data.userToken };
    if (!data) throw new Error("connection to server is fail");
  } catch (error) {
    console.error(error);
  }
};

export const checkIsAdminInDB = async () => {
  try {
    const userToken = sessionStorage.getItem("userToken");
    const { data } = await axios.post("/API/users/checkIsAdmin", { userToken });
    return {authorized: data.isAdmin };
  } catch (error) {
    console.error(error);
    return { authorized:false}
  }
};

export const handleLogOut =()=>{
  sessionStorage.removeItem("userToken");
}