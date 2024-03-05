import { Schema, model, Document, Types } from "mongoose";
import { he, fakerHE } from "@faker-js/faker";

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
  limitDate: Date,
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
      deliveryOption: [String],
    },
  ],
});

const ProjectModel = model<IProject>("projects", projectSchema);
export default ProjectModel;




/////////-----------------------------------------------------------
// -----------------------------------------------------------------
async function addRandomProject() {
  try {
    const newProject = new ProjectModel({
      ownerId: "65c22d8fd830152457ab74e8",
      projectName: fakerHE.music.songName(),
      projectCategory: ["ציור"],
      ownerName: fakerHE.person.fullName(),
      images: [
        fakerHE.image.url(),
        fakerHE.image.url(),
        fakerHE.image.url(),
        fakerHE.image.url(),
      ],
      videoLink:
        "https://www.youtube.com/watch?v=RFGWDSCNclg&ab_channel=%D7%9B%D7%90%D7%9F%7C%D7%97%D7%93%D7%A9%D7%95%D7%AA-%D7%AA%D7%90%D7%92%D7%99%D7%93%D7%94%D7%A9%D7%99%D7%93%D7%95%D7%A8%D7%94%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99",
      aid: Math.round(Math.random() * 900000),
      projectStory: fakerHE.lorem.text(),
      shortDescription: fakerHE.lorem.paragraph(),
      raised: Math.round(Math.random() * 600000),
      ownerInfo: {
        ownerName: fakerHE.person.fullName(),
        location: fakerHE.location.city(),
        ownerDescription: fakerHE.lorem.paragraph(),
        phoneNumber: fakerHE.phone.number(),
        profileImageUrl: fakerHE.image.avatar(),
      },
      gifts: [
        {
          name: fakerHE.commerce.productName(),
          description: fakerHE.lorem.lines,
          price: Math.floor(Math.floor(Math.random() * 1001) / 50) * 50,
        },
      ],
    });
    const projectDB = await newProject.save();
    console.log(projectDB);
  } catch (error) {
    console.error(error);
  }
}