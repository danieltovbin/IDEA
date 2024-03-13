/// <reference types="vite/client" />

interface Gift {
  name: string;
  description: string;
  price: number;
  deliveryOption: string[];
  donations: { donationId: string; sumOfDonations: number }[];
  date?: string;
  _id: string;
}

interface OwnerInfo {
  ownerName: string;
  location: string;
  ownerDescription: string;
  phoneNumber: string;
  linkToFacebook: string;
  profileImageUrl: string;
}

type Donation = {
  _id?: string;
  date?: string;
  giftId: string;
  projectId: string;
  userToken: string;
  name: string;
  email: string;
  address: string;
  city: string;
  rewardAmount: number;
  donationSum: number;
  noteToOwner: string;
  comment: string;
  approvalRegulation: boolean;
  anonymous: boolean;
};

type Project = {
  _id: string;
  ownerId: string;
  projectName: string;
  projectCategory: string[];
  shortDescription: string;
  tags: string[];
  images: string[];
  videoLink: string;
  donations?: Donation[];
  projectStory: string;
  aid: number;
  raised: number;
  location?: string;
  limitDate: string;
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
    donations: Donation[];
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

interface ProjectCardProps {
  categoryFilter?: "endingSoon" | "popular" | "new" | "completed" | "";
  projectsToShow: number;
}
