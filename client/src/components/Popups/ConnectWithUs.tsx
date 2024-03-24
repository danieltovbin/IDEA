import {
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./connectBtnStyle.scss";
import { connectWithUsThroughEmail } from "../../API/Users/usersClientCtrl";

const ConnectWithUs = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "נושא אחר",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { fullName, email, phone, subject, message } = formData;
      const data = await connectWithUsThroughEmail(fullName, email, phone, subject, message);
      if (data && data.ok) {
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email", error);
    } finally {
      setVisible(false);
    }
  }
  return (
    <div dir="rtl" className="connectWithUsDiv">
      <div
        className="btn"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <svg
          className="MuiSvgIcon-root"
          focusable="false"
          viewBox="0 0 33 33"
          aria-hidden="true"
          style={{ width: "33px", height: "33px", fill: "rgb(255, 255, 255)" }}
        >
          <path d="M16,8a4.82,4.82,0,0,1,5,4.61,4.73,4.73,0,0,1-4,4.52v2.94a1,1,0,0,1-2,0V16.29a1,1,0,0,1,1-.92,2.89,2.89,0,0,0,3-2.76,2.89,2.89,0,0,0-3-2.76,2.89,2.89,0,0,0-3,2.76,1,1,0,0,1-2,0A4.82,4.82,0,0,1,16,8Zm0,14a1,1,0,1,1-1,1A1,1,0,0,1,16,22Zm.37-20.1a14.32,14.32,0,0,0-10.26,4A13.44,13.44,0,0,0,2,15.87,14,14,0,0,0,16.16,29.4a14.47,14.47,0,0,0,6.6-1.59,1,1,0,0,1,.46-.11,1.12,1.12,0,0,1,.31.05l7,2.33a.4.4,0,0,0,.41-.09.37.37,0,0,0,.09-.4l-2.4-6.77a.9.9,0,0,1,.06-.75,13.51,13.51,0,0,0,1.64-6.4A14,14,0,0,0,16.37,1.9ZM15.92,0h.48A16.29,16.29,0,0,1,27.64,4.69a15.28,15.28,0,0,1,3,17.9L32.87,29a2.22,2.22,0,0,1-.56,2.35,2.38,2.38,0,0,1-2.43.54l-6.59-2.19a16.79,16.79,0,0,1-7.13,1.62h0a16.28,16.28,0,0,1-11.3-4.5A15.25,15.25,0,0,1,1.22,9.67,15.58,15.58,0,0,1,4.73,4.58,16.16,16.16,0,0,1,10,1.18,16.72,16.72,0,0,1,16.4,0Z"></path>
        </svg>
      </div>
      {visible ? (
        <div className="blackBackgroundScreen">
          <div dir="rtl" className="coneectWithusPopup">
            <IoMdClose
              className="closeIcon"
              onClick={() => setVisible(!visible)}
            />
            <h3>צור קשר</h3>
            <form onSubmit={handleSubmit}>
              <FormControl className="formControl">
                <TextField
                  id="standard-basic"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  label="שם מלא"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="אימייל"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="טלפון"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  variant="standard"
                />
                <div className="selcetInputDiv">
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    נושא הפניה
                  </InputLabel>
                  <NativeSelect
                    defaultValue={"נושא"}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    inputProps={{
                      name: "request subject",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={0}>נושא אחר</option>
                    <option value={'שאלות לגבי גיוס לעסקים'}>שאלות לגבי גיוס לעסקים</option>
                    <option value={'תמיכה טכנית'}>תמיכה טכנית</option>
                    <option value={'פנייה בנושא חיוב אשראי'}>פניה בנושא חיובי אשראי</option>
                    <option value={'פנייה בנושא אי קבלת תשורה'}>פניה בנושא אי קבלת תשורה</option>
                    <option value={'שאלות לפני פתיחת גיוס'}>שאלות לפני פתיחת גיוס</option>
                    <option value={'פניה בנושא גיפטקארד'}>פניה בנושא גיפטקארד</option>
                  </NativeSelect>
                </div>
                <TextField
                  id="standard-basic"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  label="תוכן הודעה"
                  variant="standard"
                />
                <button type="submit">שלח</button>
              </FormControl>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ConnectWithUs;
