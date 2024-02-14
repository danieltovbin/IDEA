/// <reference types="vite/client" />
type Project = {
    ownerId:string,
    projectName: string,
    projectCategory?: [string],
    shortDescription?: string,
    tags?: [string],
    images?: [string],
    videoLink?: string,
    aid?: number,
    projectStory?: string,
    gifts?: [
      {
        name: string,
        description: string,
        coast?: number,
        deliveryOption: [string],
        date?: Date,
      },
    ],
  }