import React, { FC } from "react";
import GiftComp from "./GiftComp";
import { fakerHE } from "@faker-js/faker";
import { Project } from "../../../vite-env";

interface AllGiftsProps {
    project: Project;
}
const AllGifts: FC<AllGiftsProps> = ({ project }) => {
    const gifts = project.gifts
  return (
    <div  className="allGiftsDiv" id="allGifts">
      {gifts.map((gift) => (
        <GiftComp key={gift._id} gift={gift} project={project} />
      ))}
    </div>
  );
};

export default AllGifts;
