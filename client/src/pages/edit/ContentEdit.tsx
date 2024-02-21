import "primeicons/primeicons.css";
import { Editor } from "primereact/editor";
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import { useRef, useState } from "react";
import EditLayout from "../../layouts/EditLayout";
import "./scss/content.scss";
import { Container, Divider, SvgIcon, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LabelAndNote from "../../components/labelNoteProps/LabelAndNote";
import {
  getProjectById,
  updateOneOnProject,
} from "../../API/Projects/projectClientCtrl";
import PrevNextPage from "../../components/edit/util/prevNextPage/PrevNextPage";

const ContentEdit = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const editorRef = useRef<Editor>(null);

  const handleGetContent = async () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent().innerHTML;
      await updateOneOnProject("projectStory", content);
    }
  };

  return (
    <EditLayout>
      <div className="card">
        <p>
          זהו המקום לספר את הסיפור של הפרויקט. בצורה עניינית מצד אחד ומלאה
          ומפורטת מהצד השני. כדאי להוסיף כותרות, תמונות, סרטונים וכל תוכן נוסף
          אשר יעזור להעביר את הסיפור של הפרוייקט בצורה הטובה ביותר
        </p>
        <LabelAndNote
          textLabel={""}
          labelHtmlFor={""}
          includeSpan={false}
          iconToolTip={`מה כותבים כאן?
מי היזם? קצת עליך, מה הביא אותך להוציא את הפרויקט לפועל, מי עומד מאחוריו ומה הרקע שלך בהקשר הזה.
מה מהות גיוס הכסף?
הצגת מטרה ברורה ומדידה - התומכים רוצים לדעת מה קורה בזכותם. לדוגמה, בזכותם הספר יראה אור ולא שבזכותם יהיה לך כסף לקנות מחשב לכתוב עליו את הספר או לשלם לאיש מקצוע כזה או אחר.
מה עשית עד עכשיו?
חשוב להציג מה עשית עד עכשיו כדי להגביר אמינות, להראות רצינות וגם כדי לגרום לתומכים להבין שחלוקת התשורות לא תהיה בעוד כמה שנים, אלא כבר עברת חלק מהדרך בעצמך.
מה חסר?
מה השלב בו "נעצרת" ולשמו נועד גיוס הכסף. מה המטרה אליה התומכים יתחברו ויתמכו כדי שהיא תקרה.
את העמוד כדאי לעצב בצורה נעימה לקריאה, בשילוב תמונות, סרטונים ומצגים.`}
          showTooltip={true}
        />
        <Editor
          ref={editorRef}
          value={text}
          onTextChange={(e) => {
            setText(e.htmlValue);
          }}
          style={{ height: "320px", marginBottom: "35px", minHeight: "360px" }}
        />
      </div>
      {/* <Container
        sx={{ padding: "0 calc((100% - 818px) / 2) !important", margin: 0 }}
      >
        <div style={{ display: "flex", maxWidth: "580px" }}>
          <SvgIcon
            focusable={false}
            viewBox="0 0 24 24"
            aria-hidden="true"
            style={{ width: "24px", height: "24px", fill: "rgb(66, 66, 66)" }}
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41"></path>
          </SvgIcon>
          <Typography
            onClick={() => navigate("/descriptionProject")}
            style={{
              color: "#424242",
              cursor: "pointer",
              fontSize: " 13px",
              lineHeight: 1.62,
              fontFamily: "Open Sans Hebrew, sans-serif !important",
              fontWeight: 400,
            }}
          >
            חזרה
          </Typography>
          <Divider
            style={{
              marginRight: "16px",
              marginLeft: "16px",
              width: "1px",
              backgroundColor: " rgba(0, 0, 0, 0.12)",
            }}
          />
          <Typography
            onClick={() => {
              navigate("/Submissions");
              handleGetContent();
            }}
            style={{
              whiteSpace: "nowrap",
              color: "#388602",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            שמירה והמשך
          </Typography>
          <SvgIcon
            focusable={false}
            aria-hidden="true"
            style={{ width: "24px", height: "24px", fill: "rgb(56, 134, 2)" }}
          >
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41"></path>
          </SvgIcon>
        </div>
      </Container> */}
      <PrevNextPage
        prevPageName={"descriptionProject"}
        nextPageName={"Submissions"}
        showContinuation={true}
        showContinuationIcon={true}
      />
    </EditLayout>
  );
};

export default ContentEdit;
