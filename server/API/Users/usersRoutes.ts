import express from "express";
import { checkIsAdmin, getUserByToken, login, register } from "./usersCtrl";
const router = express.Router();

router
  .post("/register", register)
  .post("/login", login)
  .post("/checkIsAdmin", checkIsAdmin)
  .get("/getUser", getUserByToken);

export default router;
