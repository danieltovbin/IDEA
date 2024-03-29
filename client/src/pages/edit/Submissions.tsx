import { Button, SvgIcon } from "@mui/material";
import { useState } from "react";
import { updateOneOnProject } from "../../API/Projects/projectClientCtrl";
import AddGift from "../../components/edit/Submissions/AddGift";
import StillNoOffers from "../../components/edit/Submissions/StillNoOffers";
import PrevNextPage from "../../components/edit/util/prevNextPage/PrevNextPage";
import LabelAndNote from "../../components/labelNoteProps/LabelAndNote";
import { useGiftContext } from "../../context/GiftContext";
import EditLayout from "../../layouts/EditLayout";
import "./scss/submissions.scss";

const Submissions = () => {
  const [showNewSubmission, setShowNewSubmission] = useState(true);
  const { giftAdded } = useGiftContext();

  const handleBtnClick = () => {
    setShowNewSubmission(false);
  };

  const showAddGift = () => {
    setShowNewSubmission(true);
  };

  const handleGifts = async () => {
    try {
      await updateOneOnProject("gifts", giftAdded);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EditLayout>
      <div className="submissions">
        <div style={{ maxWidth: "580px" }}>
          <p>
            על מנת לשלוח את הפרויקט לאישור יש להכניס תשורה אחת לפחות. ניתן
            להוסיף ולהוריד תשורות לאורך חיי הפרויקט. התשורות זוהי בעצם הדרך
            למשוך את קהל התומכים, חשבו רחב ומגוון ככל הניתן
          </p>
          {showNewSubmission && (
            <div className="newSubmission">
              <LabelAndNote
                textLabel={""}
                labelHtmlFor={""}
                includeSpan={false}
                iconToolTip={`אחת הסיבות העיקריות בגללן אנשים יתמכו בפרויקט שלך היא התשורות, ככל שהתשורות יהיו שוות ומגניבות יותר, כך יש פוטנציאל להגדיל את כמות התומכים בפרויקט.
רוב התשורות כנראה הולכות להיות קשורות בתוצר הסופי (ספר, אלבום מוזיקה, מוצר) אך תמיד כדאי לחשוב גם מחוץ לקופסא. יצירתיות ומקוריות בתשורות - שילובים מעניינים, דברים משעשעים וכמובן שמגלמים הטבה כספית, חשוב להבין שאנשים לא תומכים כדי "לעזור" לך ולכן חשוב לתת הטבה כלשהי ולשקף אותה בתאור התשורה - בזכות התומכים הפרויקט יצא לאור ועל זה שהם מאמינים בך ובזכותם זה הולך לקרות מגיעה להם הטבה שווה`}
                showTooltip={true}
              />
              <Button
                onClick={handleBtnClick}
                tabIndex={0}
                type="button"
                style={{
                  justifyContent: "center",
                  marginTop: "8px",
                  height: "40px",
                  backgroundColor: "rgb(72, 173, 2)",
                  color: "rgb(255, 255, 255)",
                  fontSize: "13px",
                  fontWeight: "bold",
                  width: "260px",
                }}
              >
                <span style={{ display: "flex", alignItems: "center" }}>
                  <SvgIcon
                    className="MuiSvgIcon-root jss682"
                    focusable={false}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{
                      width: "16px",
                      height: "16px",
                      fill: "rgb(255, 255, 255)",
                    }}
                  >
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                  </SvgIcon>
                  יצירת תשורה חדשה
                </span>
                <span></span>
              </Button>
            </div>
          )}
        </div>
        {!showNewSubmission && (
          <AddGift showAddGift={showAddGift} showForm={true} />
        )}

        {giftAdded.length > 0 ? (
          <AddGift showAddGift={showAddGift} showForm={false} />
        ) : (
          <StillNoOffers />
        )}
      </div>
      <PrevNextPage
        prevPageName={"contentEdit"}
        nextPageName={"DeveloperDetails"}
        showContinuation={true}
        showContinuationIcon={true}
        getGifts={handleGifts}
      />
      <div style={{ marginBottom: "300px" }}></div>
    </EditLayout>
  );
};

export default Submissions;
