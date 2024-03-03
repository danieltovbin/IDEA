import express from "express";
import { allProjects, get4latestProjects, getProjectById, startProject, updateOneOnProject, updateProject } from "./projectCtrl";
const router = express.Router();

router
.get("/get4latestProjects", get4latestProjects)
.get("/allProjects", allProjects)
.post("/startProject", startProject)
.post("/getProjectById", getProjectById)
.put("/updateProject", updateProject)
.patch("/updateOne", updateOneOnProject)

export default router;
