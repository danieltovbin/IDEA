import { Container } from "@mui/material";
import "primeicons/primeicons.css";
import { Editor } from "primereact/editor";
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateOneOnProject } from "../../API/Projects/projectClientCtrl";
import PrevNextPage from "../../components/edit/util/prevNextPage/PrevNextPage";
import LabelAndNote from "../../components/labelNoteProps/LabelAndNote";
import EditLayout from "../../layouts/EditLayout";
import "./scss/content.scss";

const ContentEdit = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const editorRef = useRef<Editor>(null);

  const handleGetContent = async () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent().innerHTML;
      const content1 = editorRef.current.getQuill();
      console.log(content1);

      await updateOneOnProject("projectStory", text);
    }
  };

  useEffect(() => {
    console.log(text);
  }, [text]);
  return (
    <EditLayout>
      <div className="card" >
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
        <Editor dir="ltr"
          ref={editorRef}
          value={text}
          onTextChange={(e) => {
            setText(e.htmlValue);
          }}
          style={{ height: "320px", marginBottom: "35px", minHeight: "360px" }}
        />
      </div>
      <Container
        sx={{ padding: "0 calc((100% - 818px) / 2) !important", margin: 0 }}
      ></Container>
      <PrevNextPage
        prevPageName={"descriptionProject"}
        nextPageName={"Submissions"}
        showContinuation={true}
        showContinuationIcon={true}
        getContentFunc={handleGetContent}
      />
    </EditLayout>
  );
};

export default ContentEdit;
