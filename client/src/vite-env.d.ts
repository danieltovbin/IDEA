/// <reference types="vite/client" />
type Project = {
  ownerId: string;
  projectName: string;
  projectCategory?: [string];
  shortDescription?: string;
  tags?: [string];
  images?: [string];
  videoLink?: string;
  aid?: number;
  projectStory?: string;
  ownerInfo?: {
      ownerName: String | null,
      location: String | null,
      ownerDescription: String | null,
      phoneNumber: String | null,
      linkToFacebook: String | null,
    
    };
  gifts?: [
    {
      name: string;
      description: string;
      coast?: number;
      deliveryOption: [string];
      date?: Date;
    }
  ];
};
