import { TextField } from "@mui/material";
import React, { FC } from "react";
import { MdLockOutline } from "react-icons/md";

interface PaymentDetailsProps {
  gift: Gift;
}

const PaymentDetails: FC<PaymentDetailsProps> = ({ gift }) => {
  return (
    <div className="paymentDetails">
      <div className="safetyPament">
        <MdLockOutline />
        <p>
          דף תשלום זה הוא נסיוני ו<span className="green">אינו מאובטח</span>
        </p>
      </div>
      <p className="dealDetails">פרטי העסקה</p>
      <h2 className="giftName">{gift.name}</h2>
      <div className="amountGifts">
        <p>כמות תשורות שנבחרו</p>
        <span>1 X {gift.price} ₪</span>
      </div>
      <div className="addSupportAmount">
        <p>סכום תמיכה מעבר לתשורה</p>
        <span>20 ₪</span>
      </div>
      <div className="dashed"></div>
      <div className="sumToPay">
        <p>סכום לתשלום</p>
        <span>{100} ₪</span>
      </div>
      <h3>פרטי כרטיס אשראי</h3>
      <TextField disabled label="מספר כרטיס" variant="standard" type="text" />
      <div className="cardDetails">
        <TextField disabled label="חודש" variant="standard" type="text" />
        <TextField disabled label="שנה" variant="standard" type="text" />
        <TextField disabled label="Cvv" variant="standard" type="text" />
      </div>
    </div>
  );
};

export default PaymentDetails;
