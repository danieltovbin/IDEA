import { Document, Schema, model } from "mongoose";
import { generateUUID } from "./projectCtrl";

interface IGift {
  name: string;
  description: string;
  price: number;
  giftId: string;
  _id: string | any;
  donations: [
    {
      donationId: String;
      sumOfDonations: Number;
    }
  ];
}

interface IOwnerInfo {
  ownerName: string;
  location: string;
  ownerDescription: string;
  phoneNumber: string;
  linkToFacebook: string;
  profileImageUrl: string;
}

export interface IProject extends Document {
  ownerId: string;
  createdAt: Date;
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
  isProjectCompleted: Boolean;
}

const projectSchema = new Schema<IProject>({
  ownerId: String,
  createdAt: { type: Date, default: Date.now },
  projectName: String,
  projectCategory: [String],
  shortDescription: String,
  tags: [String],
  images: [String],
  videoLink: { type: String, default: "" },
  projectStory: { type: String, default: "" },
  aid: { type: Number, default: 0 },
  raised: { type: Number, default: 0 },
  location: { type: String, default: "" },
  isProjectCompleted: { type: Boolean, default: false },
  limitDate: {
    type: Date,
    default: function () {
      const createdAt = this.createdAt || Date.now();
      const limitDate = new Date(createdAt);
      limitDate.setDate(limitDate.getDate() + 50);
      return limitDate;
    },
  },
  ownerInfo: {
    ownerName: String,
    location: { type: String, default: "" },
    ownerDescription: String,
    phoneNumber: String,
    linkToFacebook: String,
    profileImageUrl: String,
  },
  gifts: [
    {
      name: String,
      description: String,
      price: Number,
      giftId: { type: String, default: generateUUID() },
      donations: {
        type: [
          {
            donationId: String,
            sumOfDonations: Number,
          },
        ],
      },
    },
  ],
});

projectSchema.pre("save", function (next) {
  const project = this;

  if (
    project.projectName &&
    project.projectName != "" &&
    project.projectStory &&
    project.projectStory != "" &&
    project.shortDescription &&
    project.shortDescription != "" &&
    project.images &&
    project.images.length > 0 &&
    project.videoLink &&
    project.videoLink != "" &&
    project.aid &&
    project.aid > 0 &&
    project.ownerInfo &&
    project.ownerInfo.ownerName &&
    project.ownerInfo.ownerName != "" &&
    project.ownerInfo.profileImageUrl &&
    project.gifts &&
    project.gifts.length > 0
  ) {
    project.isProjectCompleted = true;
  } else {
    project.isProjectCompleted = false;
  }

  next();
});

const ProjectModel = model<IProject>("projects", projectSchema);
export default ProjectModel;
