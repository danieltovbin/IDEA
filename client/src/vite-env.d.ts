/// <reference types="vite/client" />

interface Gift {
  name: string;
  description: string;
  coast: number;
  deliveryOption: string[];
  date: Date;
}

interface OwnerInfo {
  ownerName: string;
  location: string;
  ownerDescription: string;
  phoneNumber: string;
  linkToFacebook: string;
  profileImageUrl: string;
}

type Project = {
  _id: string;
  ownerId: string;
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
  ownerInfo: OwnerInfo;
  gifts: Gift[];
};

interface Project {
  projectInfo: {
    _id: string;
    ownerId: string;
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
    ownerInfo: OwnerInfo;
    gifts: Gift[];
  };
}
