import { TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import GiftStepsDisplay from "./GiftStepsDisplay";
import "./sumOfSupport.scss";

interface SumOfSupportProps {
  gift: Gift;
  project: Project;
  next: (index: number) => void;
  handleDonationChange: (donationChanges:any) => void;
}

const SumOfSupport: FC<SumOfSupportProps> = ({ gift, project, next, handleDonationChange }) => {
  const [formData, setFormData] = useState({
    rewardAmount: 1,
    donationSum: gift.price,
  });
  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    if (
      formData.rewardAmount >= 1 &&
      formData.donationSum >= gift.price * formData.rewardAmount
    ) {
      setError("");
    }
  }, [formData]);

  useEffect(() => {
    if (formData.rewardAmount < 1) {
      setError("עליך לבחור מספר תשורות תקני");
    }
    if (formData.donationSum < gift.price * formData.rewardAmount) {
      setError("לא עמדת בסכום המינימלי");
    }
  }, [formData]);

  return (
    <div dir="rtl" className="sumOfSupport">
      <GiftStepsDisplay gift={gift} project={project} />
      <div className="amountOfGiftsAndSupport">
        <TextField
          label="כמות תשורות"
          name="rewardAmount"
          value={formData.rewardAmount}
          type="number"
          inputProps={{ min: 1, defaultValue: 1 }}
          variant="standard"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          label="סכום לתשלום"
          type="number"
          value={formData.donationSum}
          name="donationSum"
          inputProps={{ min: gift.price, defaultValue: gift.price }}
          variant="standard"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <p style={{ color: "red" }}>{error} </p>
      <button onClick={() => {handleDonationChange(formData), next(1)}} disabled={error != ""}>
        המשך
      </button>
    </div>
  );
};

export default SumOfSupport;
