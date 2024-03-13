import { MdDoubleArrow } from "react-icons/md";
import "./btnStart.scss";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BtnStart = () => {
  const navigate = useNavigate();
  function startProject() {
    if (sessionStorage.getItem("userToken")) navigate("/format");
    else {
      toast.error("על מנת ליצור פרוייקט עליך להיות מחובר");
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    }
  }
  return (
    <div className="btnStartDiv">
      <div>
        <h4 dir="rtl">
          יש לכם רעיון , סטארטאפ, יוזמה או פרוייקט חדש? <br />
      אנחנו כאן לצידכם בפרוייקט גיוס ההמונים <br/> להגשמת החלומות שלכם!
        </h4>
        <button onClick={startProject}>
          <h3>התחלו כאן</h3>
          <MdDoubleArrow className="icon" />
        </button>
      </div>
    </div>
  );
};

export default BtnStart;
