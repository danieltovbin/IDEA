import { cookieParser } from "cookie-parser";
import UserModel from "./usersModel";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";
const { SECRET_KEY } = process.env;
const saltRounds = 10;

export const register = async (req, res) => {
  try {
    const { userName, password, email, name } = req.body;
    if (!userName || !password || !email || !name)
      throw new Error("not get all user information");
    const hash = await bcrypt.hash(password, saltRounds);
    const user = new UserModel({ userName, password: hash, email, name });
    const userDB = await user.save();
    res.send(userDB);
  } catch (error) {
    res.status(400).send({ error: "Bad Request", message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    console.log(userName, password);
    if (!userName || !password) throw new Error("not get all user information");
    const userDB = await UserModel.findOne({ userName });
    if (!userDB) throw new Error("user not found");
    const { password: hash } = userDB;
    if (!hash) throw new Error("some of details are incorrect");
    const match: boolean = await bcrypt.compare(password, hash);
    if (!match) throw new Error("password are incorrect");
    const cookie = {
      userId: userDB._id,
    };    
    const token = jwt.encode(cookie, SECRET_KEY);
    res.cookie("user", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 3 });
    res.send({ userDB, ok: true });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: "Bad Request", message: error.message });
  }
};

export const getUserByToken = async (req, res) => {
  try {
    const token = req.cookies.user;
    if (!token) throw new Error("no token");
    const cookie = jwt.decode(token, SECRET_KEY);
    const userDB = await UserModel.findById(cookie);
    if (!userDB) throw new Error("no user");
    res.send({ user: userDB });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: "Bad Request", message: error.message });
  }
};
