import express from "express";
import { uploadImageController } from "./cloudinaryCtrl";
import multer from "multer";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router
.patch("/uploadImage", upload.single("image"), uploadImageController)
.post("/upload", upload.single("image"), uploadImageController);

export default router;
