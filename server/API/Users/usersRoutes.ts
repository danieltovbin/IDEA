import express from "express";
import { getUserByToken, login, register } from "./usersCtrl";
const router = express.Router();

router
  .post("/register", register)
  .post("/login", login)
  .get("/getUser", getUserByToken);

export default router;
