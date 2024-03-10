import { FormControlLabel, Checkbox } from "@mui/material";
import { TextField } from "@mui/material";

import React, { FC, useEffect, useState } from "react";
import GiftFirstDisplay from "./GiftFirstDisplay";
import GiftStepsDisplay from "./GiftStepsDisplay";

const PersonalDetails: FC<{ gift: Gift; project: Project }> = ({
  gift,
  project,
}) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    address: null,
    city: null,
    noteToOwner: null,
    phone: null,
    comment: null,
    regulationCheck: false,
    anonymousCheck: false,
  });

  const requiredFields = [
    "name",
    "email",
    "address",
    "city",
    "phone",
    "regulationCheck",
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
    if (name === "regulationCheck" || name === "anonymousCheck") {
      setFormData((prevData) => ({ ...prevData, [name]: checked }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // console.log("Form data:", formData);
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
          // disabled
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
            <span>ruth</span> תגובתך תפורסם בדף הפרוייקט
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
          name="regulationCheck"
          required
          checked={formData.regulationCheck}
          control={<Checkbox />}
          label="אני מאשר.ת את התקנון"
          onChange={handleChange}
        />
        <FormControlLabel
          name="anonymousCheck"
          control={<Checkbox />}
          label="אעדיף להופיע ברשימת התומכים כאונימי"
          onChange={handleChange}
        />
        <button
          disabled={!isFormValid}
          className={isFormValid ? "validFormBtn" : "continueBtn"}
          type="submit"
        >
          להמשך
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
