import { Schema, model } from "mongoose";
import UserModel from "../Users/usersModel";

interface Gifts {
  name: string;
  description: string;
  coast: number;
  deliveryOption: [String];
  date: Date;
}

export const ProjectSchema = new Schema({
  ownerId: String,
  projectName: String,
  projectCategory: [String],
  shortDescription: String,
  tags: [String],
  images: [String],
  videoLink: String,
  projectStory: String,
  aid: Number,
  location: String,
  limitDate: Date,
  gifts: [
    {
      name: String,
      description: String,
      coast: Number,
      deliveryOption: [String],
      date: Date,
    },
  ],
});

const ProjectModel = model("projects", ProjectSchema);
export default ProjectModel;
