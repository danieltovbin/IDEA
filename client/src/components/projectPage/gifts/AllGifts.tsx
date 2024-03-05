import React, { FC } from "react";
import GiftComp from "./giftComp";

interface AllGiftsProps {
    project: Project;
}
const AllGifts: FC<AllGiftsProps> = ({ project }) => {
    const gifts = project.gifts
  return (
    <>
      {gifts.map((gift) => (
        <GiftComp key={gift._id} gift={gift} project={project} />
      ))}
    </>
  );
};

export default AllGifts;
