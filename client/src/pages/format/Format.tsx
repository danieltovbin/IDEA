import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConnectWithUs from "../../components/Popups/ConnectWithUs";
import { TitleImgP } from "../../components/titleImgP/TitleImgP";
import "./scss/format.scss";
import Inputs from "./util/Inputs";
import Navbar from "../../components/NavbarFiled/Navbar";

const Format = () => {
  const isLogin = sessionStorage.getItem("userToken") ? true : false;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="format">
      <Navbar />
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "80px 0 0",
        }}
      >
        <div className="right" style={{ maxWidth: "515px" }}>
          <h2 style={{ color: "#ff0d90", marginBottom: "3px" }}>
            הדרך להגשמת החלום שלך מתחילה ממש כאן
          </h2>
          <p style={{ margin: "0" }}>
            כיף שבאת! אנחנו מתרגשים לצאת יחד למסע שלך.. הצוות שלנו כאן לאורך כל
            הדרך לעזור, לעודד ולהביא את הפרויקט שלך איתך עד ליעד. נתחיל?
          </p>
          <Inputs />
        </div>
        <div
          style={{
            margin: "175px 5px 0 65px",
            alignSelf: "stretch",
            maxHeight: "404px",
          }}
        ></div>
        <div className="left" style={{ maxWidth: "360px" }}>
          <h4>איך הופכים רעיון למציאות בארבעה צעדים</h4>
          <TitleImgP
            title={"פתיחת ועריכת פרויקט"}
            img={<NoteAltOutlinedIcon />}
            paragraph={
              "כאן הכל מתחיל... זה המקום להכניס את כל תכני הפרויקט שלך (לא לדאוג, בכל שלב בהמשך ניתן לחזור ולשנות התוכן)"
            }
          />
          <TitleImgP
            title={"שליחת הפרויקט לצוות שלנו"}
            img={<SendOutlinedIcon sx={{ color: "#ff0d90" }} />}
            paragraph={
              "מרגע שהפרויקט יישלח לאישור, הצוות שלנו ייכנס לתמונה ויחזור אליך עם טיפים ורעיונות כדי להגיע יחד לתוצאה המיטבית"
            }
          />
          <TitleImgP
            title={"פרסום הפרויקט באתר"}
            img={<RocketLaunchOutlinedIcon sx={{ color: "#ff0d90" }} />}
            paragraph={
              "אחרי שחידדנו והגענו יחד לתוצאה ממנה כולם מרוצים, הפרויקט עולה לאוויר ואפשר להתחיל לתמוך בו (מרגש!)"
            }
          />
          <TitleImgP
            title={"ניהול הפרויקט"}
            img={<GroupsOutlinedIcon sx={{ color: "#ff0d90" }} />}
            paragraph={
              "במהלך התקופה שהפרויקט באוויר יש צורך לקדם אותו, יחד עם הצוות שלנו שמלווה אותך כל הדרך עד להגעה ליעד"
            }
          />
        </div>
      </div>
      <ConnectWithUs />
    </div>
  );
};

export default Format;
