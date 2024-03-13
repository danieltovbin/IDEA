import { Checkbox, FormControlLabel, TextField } from "@mui/material";

import { FC, useEffect, useState } from "react";
import { Gift, Project } from "../../../vite-env";
import GiftStepsDisplay from "./GiftStepsDisplay";

const PersonalDetails: FC<{
  gift: Gift;
  project: Project;
  next: (index: number) => void;
  handleDonationChange: (donationChanges: any) => void;
}> = ({ gift, project, next, handleDonationChange }) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    address: null,
    city: null,
    noteToOwner: null,
    phone: null,
    comment: null,
    approvalRegulation: false,
    anonymous: false,
  });

  const requiredFields = [
    "name",
    "email",
    "address",
    "city",
    "phone",
    "approvalRegulation",
  ];
  function areRequiredFieldsFilled(requiredFields: string[], formData: any) {
    for (const field of requiredFields) {
      if (
        !formData[field] ||
        formData[field] == "" ||
        formData[field] === undefined
      ) {
        setIsFormValid(false);
        return false;
      }
    }

    setIsFormValid(true);
    return true;
  }

  const handleChange = (event: any) => {
    const { name, value, checked } = event.target;
    if (name === "approvalRegulation" || name === "anonymous") {
      setFormData((prevData) => ({ ...prevData, [name]: checked }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleDonationChange(formData)
  };

  useEffect(() => {
    areRequiredFieldsFilled(requiredFields, formData);
  }, [formData]);

  return (
    <div className="personalDetails" dir="rtl">
      <GiftStepsDisplay gift={gift} project={project} />
      <form onSubmit={handleSubmit} action="" dir="rtl">
        <p>פרטים דרושים לתשורה זו</p>
        <TextField
          label="כתבו את שמכם המלא"
          name="name"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          label="מה כתובת המייל שלכם?"
          name="email"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          label="כתובת מלאה( רחוב, מספר בית)"
          name="address"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          label="עיר"
          variant="standard"
          name="city"
          onChange={handleChange}
        />
        <TextField
          label="הערות נוספות ליזם.ת"
          name="noteToOwner"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          label="מספר טלפון"
          name="phone"
          onChange={handleChange}
          variant="standard"
          type="text"
          inputProps={{ pattern: "[0-9]*" }}
        />
        <p className="addCommentToProj">להוספת תגובה לפרוייקט</p>
        <div className="commentWriterName">
          <img
            src="https://headstart.co.il/static/anonymousUserAvatars/headstart/anonymous1Support.webp"
            alt="avatar"
          />
          <p>
            <span>{formData.name}</span> תגובתך תפורסם בדף הפרוייקט
          </p>
        </div>
        <TextField
          name="comment"
          id="outlined-multiline-flexible"
          placeholder="יש לך תגובה לפרוייקט?"
          multiline
          maxRows={4}
          onChange={handleChange}
        />
        <FormControlLabel
          name="approvalRegulation"
          required
          checked={formData.approvalRegulation}
          control={<Checkbox />}
          label="אני מאשר.ת את התקנון"
          onChange={handleChange}
        />
        <FormControlLabel
          name="anonymous"
          control={<Checkbox />}
          label="אעדיף להופיע ברשימת התומכים כאונימי"
          onChange={handleChange}
        />
        <button
          disabled={!isFormValid}
          className={isFormValid ? "validFormBtn" : "continueBtn"}
          onClick={(e) => {
            handleSubmit(e)
            next(2);
          }}
          type="submit"
        >
          להמשך
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
