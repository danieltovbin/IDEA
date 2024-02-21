import express from "express";
import { getProjectById, startProject, updateOneOnProject, updateProject } from "./projectCtrl";
const router = express.Router();

router.post("/startProject", startProject)
.post("/getProjectById", getProjectById)
.put("/updateProject", updateProject)
.patch("/updateOne", updateOneOnProject)

export default router;
