import { TextField } from "@mui/material";
import React, { FC, useState } from "react";
import { MdLockOutline } from "react-icons/md";
import { Donation, Gift, Project } from "../../../vite-env";
import "./styles/paymentDetailsStyle.scss";

interface PaymentDetailsProps {
  gift: Gift;
  donation: Donation;
  next: (index: number) => void;
  handleDonationChange: () => void;
}

const PaymentDetails: FC<PaymentDetailsProps> = ({
  gift,
  donation,
  next,
  handleDonationChange,
}) => {
  const [confetti, setConfetti] = useState(false);

  return (
    <div className="paymentDetails" dir="rtl">
      {confetti && (
        <img className="confetti" src="/image/Animation - 1710236956744.gif" />
      )}
      <div className="safetyPayment">
        <MdLockOutline />
        <p>
          דף תשלום זה הוא נסיוני ו<span className="green">אינו מאובטח</span>
        </p>
      </div>
      <p className="dealDetails">פרטי העסקה</p>
      <h2 className="giftName">{gift.name}</h2>
      <div className="amountGifts">
        <p>כמות תשורות שנבחרו</p>
        <span>
          {donation.rewardAmount}X {gift.price} ₪
        </span>
      </div>
      <div className="addSupportAmount">
        <p>סכום תמיכה מעבר לתשורה</p>
        <span>
          {donation.donationSum - donation.rewardAmount * gift.price} ₪
        </span>
      </div>
      <div className="dashed"></div>
      <div className="sumToPay">
        <p>סכום לתשלום</p>
        <span>{donation.donationSum} ₪</span>
      </div>
      <p className="creditCardDetail">פרטי כרטיס אשראי</p>
      <TextField disabled label="מספר כרטיס" variant="standard" type="text" />
      <div className="cardDetails">
        <TextField disabled label="חודש" variant="standard" type="text" />
        <TextField disabled label="שנה" variant="standard" type="text" />
        <TextField disabled label="Cvv" variant="standard" type="text" />
      </div>
      <button
        onClick={() => {
          setConfetti(true);
          setTimeout(() => {
            handleDonationChange();
          }, 1800);
        }}
      >
        שמור
      </button>
    </div>
  );
};

export default PaymentDetails;
