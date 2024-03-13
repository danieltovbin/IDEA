import { FC } from "react";
import { GoLightBulb } from "react-icons/go";

interface GiftFirstDisplayProps{
    gift:Gift;
    project:Project;
    onClick?: () => void;
}

const GiftFirstDisplay:FC<GiftFirstDisplayProps> = ({gift, project, onClick}) => {
  const donorsOfThisGift = gift.donations.length;
  const donors = (()=>{
    let donorsNum = 0 
    project.gifts.forEach(gift=>{
      donorsNum += gift.donations.length
    })
    return donorsNum
  }) ()
  return (
    <div className="firstDisplay" onClick={onClick}>
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
          <span className="green">{donorsOfThisGift} </span>
          תומכים.ות מתוך
          <span className="green">
            {" "}
            {donors ? donors : 100}
          </span>
        </p>
      </div>
      <div className="labelToSupport">לחצו לתמיכה</div>
    </div>
  );
};

export default GiftFirstDisplay;
