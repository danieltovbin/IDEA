import "./bottomPageStyle.scss";

const BottomPage = () => {
  return (
    <div className="bottomPageDiv " dir="rtl">
      <div className="mainDiv">
        <div className="top">
          <div className="list1">
            <ul>
              <h4>נעים להכיר</h4>
              <li>קצת עלינו</li>
              <li>צור קשר</li>
              <li>אקדמיית IDEA</li>
              <li>הסדרי נגישות</li>
              <li style={{ color: "#ff0d91", fontWeight: "bold" }}>
                הפודקאסט שלנו
              </li>

            </ul>
          </div>
          <div className="list2">
            <ul>
              <h4>יזמים</h4>

              <li>שאלות ותשובות</li>
              <li>שיתופי פעולה</li>
              <li>עזרי שיווק</li>
              <li>איך זה עובד?</li>

              <li>למה להתחיל?</li>
              <li>המדריך ליזמים</li>
              <li>הסדנאות שלנו</li>
            </ul>
          </div>
          <div className="list3">
            <ul>

              <h4>  קבוצת IDEA</h4>
              <li>fundit</li>
              <li>giveback</li>
              <li>beactive</li>
              <li>Idea Group giftcard</li>
            </ul>
          </div>
          <div className="connectUs"></div>
        </div>
        <div className="ourPolicy">
          <div className="logo">
            <img src="../../../public/image/IDEA ICON .png" alt="" />
          </div>
          <div className="policyLinks">
            <a>Private policy</a>
            <a>Projects policy</a>
            <a>Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomPage;
