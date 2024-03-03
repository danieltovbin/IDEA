import { Schema, model, Document, Types } from "mongoose";

interface IGift {
  name: string;
  description: string;
  coast: number;
  deliveryOption: string[];
  date: Date;
}

interface IOwnerInfo {
  ownerName: string;
  location: string;
  ownerDescription: string;
  phoneNumber: string;
  linkToFacebook: string;
  profileImageUrl: string;
}

interface IProject extends Document {
  ownerId: string;
  createdAt:Date,
  projectName: string;
  projectCategory: string[];
  shortDescription: string;
  tags: string[];
  images: string[];
  videoLink: string;
  projectStory: string;
  aid: number;
  raised: number;
  location: string;
  limitDate: Date;
  ownerInfo: IOwnerInfo;
  gifts: IGift[];
}

const projectSchema = new Schema<IProject>({
  ownerId: String,
  createdAt: { type: Date, default: Date.now }, 
  projectName: String,
  projectCategory: [String],
  shortDescription: String,
  tags: [String],
  images: [String],
  videoLink: {type: String, default:""},
  projectStory: {type: String, default:""},
  aid: {type:Number, default: 0},
  raised: {type:Number, default: 0},
  location: {type: String, default:""},
  limitDate: Date,
  ownerInfo: {
    ownerName: String,
    location: {type: String, default:""},
    ownerDescription: String,
    phoneNumber: String,
    linkToFacebook: String,
    profileImageUrl: String
  },
  gifts: [
    {
      name: String,
      description: String,
      price: Number,
      deliveryOption: [String],
    },
  ],
});

const ProjectModel = model<IProject>("projects", projectSchema);
export default ProjectModel;
