import React, { FC } from "react";
import { GoLightBulb } from "react-icons/go";
import "./giftCompStyle.scss";
interface GiftCompProps {
  gift: Gift;
  project: Project;
}
const GiftComp: FC<GiftCompProps> = ({ gift, project }) => {
  return (
    <div className="giftComp">
      <div className="minPrice">
        <p>מינימום</p>
        <h2 className="green"> ₪{gift.price} </h2>
      </div>
      <h2 className="giftName">{gift.name}</h2>
      <p className="giftDescription">{gift.description}</p>
      <p className="dateToDelivery">
        תאריך מסירה משוער: <span className="green">אוקטובר 2025 </span>
      </p>
      <div className="supportersDiv">
        <GoLightBulb />
        <p className="supporters">
          <span className="green">{10} </span>
          תומכים.ות מתוך
          <span className="green">
            {" "}
            {project.donations ? project.donations.length : 100}
          </span>
        </p>
      </div>
      <div className="labelToSupport">לחצו לתמיכה</div>
    </div>
  );
};

export default GiftComp;
