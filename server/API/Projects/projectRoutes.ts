import express from "express";
import { getProjectById, startProject, updateProject } from "./projectCtrl";
const router = express.Router();

router.post("/startProject", startProject)
.post("/getProjectById", getProjectById)
.put("/updateProject", updateProject)

export default router;
