import { Request, Response } from "express";
import { uploadBase64Image } from "./cloudidaryModel";
import ProjectModel from "../Projects/projectModel";

export const uploadImageController = async (req: Request, res: Response) => {
  try {
    const { projectId, key } = req.body;
    const imageBuffer = req.file?.buffer;
    const base64String = imageBuffer.toString("base64");

    if (!imageBuffer || !key || !projectId) throw new Error("Invalid upload");
    if (!imageBuffer) {
      return res.status(400).json({ error: "No image provided" });
    }
    const imageUrl = await uploadBase64Image(base64String);

    if (imageUrl) {
      const updatedProject = await ProjectModel.findOneAndUpdate(
        { _id: projectId },
        { $set: { [key]: imageUrl } },
        { new: true }
      );

      return res.json({ imageUrl });
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    return res.status(500).json({ error: "Error uploading image" });
  }
};
