import React, { FC } from "react";
import { GoLightBulb } from "react-icons/go";

interface GiftCompProps {
  gift: Gift;
  project: Project;
}
const GiftComp: FC<GiftCompProps> = ({ gift, project }) => {
  return (
    <div className="giftComp">
      <div className="minPrice">
        <p>מינימים</p>
        <h2>{gift.price}₪</h2>
      </div>
      <h2 className="giftName">{gift.name}</h2>
      <p className="giftDescription">{gift.description}</p>
      <p className="dateToDelivery">תאריך מסירה : אוקטובר 2025</p>
      <div className="supportersDiv">
        <GoLightBulb />
        <p className="supporters">
          <span>{10}</span>
          תומכים.ות מתוך
          <span>{project.donations ? project.donations.length : 100}</span>
        </p>
      </div>
    </div>
  );
};

export default GiftComp;
