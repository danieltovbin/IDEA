import express from "express";
import { allCompletedProjects, allProjects, deleteProject, get4latestProjects, getProjectById, startProject, updateOneOnProject, updateProject } from "./projectCtrl";
import {  checkIsAdminMW } from "../Users/usersCtrl";
const router = express.Router();

router
.get("/get4latestProjects", get4latestProjects)
.get("/allCompletedProjects", allCompletedProjects)
.get("/allProjects", allProjects)
.post("/startProject", startProject)
.post("/getProjectById", getProjectById)
.put("/updateProject", updateProject)
.patch("/updateOne", updateOneOnProject)
.post("/deleteProject",checkIsAdminMW ,deleteProject)

export default router;
