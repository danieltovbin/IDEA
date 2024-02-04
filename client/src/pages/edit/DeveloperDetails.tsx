import React from 'react'
import EditLayout from '../../layouts/EditLayout'
import './scss/description.scss'
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import { Container, SvgIcon, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DeveloperDetails = () => {

  return (
    <EditLayout>
      <div className="description">
        <div className='description-container'>
        <div style={{width: "140px", height: "140px", minWidth: "140px",borderRadius: "50%",border: "1px solid #e10c0c"}} tabIndex={0}>
      <svg
        focusable="false"
        viewBox="0 0 40 40"
        aria-hidden="true"
        style={{ width: '40px', height: '40px', fill: 'rgb(72, 173, 2)',textAlign: "center" }}
      >
        <path d="M37.81,40a1.18,1.18,0,0,1-1.19-1.16,16.62,16.62,0,0,0-33.24,0A1.18,1.18,0,0,1,2.19,40,1.17,1.17,0,0,1,1,38.84a19,19,0,0,1,38,0A1.17,1.17,0,0,1,37.81,40Z"></path>
        <path d="M19.71,2.52a7.12,7.12,0,1,0,6.91,7.12,7,7,0,0,0-6.91-7.12Zm0,16.48A9.5,9.5,0,1,1,29,9.5,9.37,9.37,0,0,1,19.71,19Z"></path>
      </svg>
      <div style={{color: "#424242",
    fontSize: "13px",
    marginTop: "8px",
    lineHeight: 1.38,
    whiteSpace: "pre-line"}}>
        <p>תמונה שלך העלאה / גרירה לכאן</p>
        <p>עד משקל של 2 מ”ב</p>
      </div>
      <input accept=".jpg,.png,.jpeg" type="file" autoComplete="off" tabIndex={-1} style={{ display: 'none' }} />
      <p>שדה זה מוגדר כשדה חובה</p>
    </div>
          <p>גם כאן כמו בכל מקום, אנשים מתחברים לאנשים. לכן, ההיכרות איתך חשובה - מי האדם מאחורי הפרויקט, מה הביא אותך לכאן וכל פרט שיחבר למקום האישי ולהיכרות אמיתית איתך.</p>
          <form style={{ display: 'flex', flexDirection: "column", maxWidth: "580px" }}>
            <label htmlFor="">שם היזם/ת</label>
            <input type="text" />
            <label htmlFor="">מקום מגורים</label>
            <input style={{ height: "68px", padding: "11px" }} type="text" />
            <label htmlFor="">כמה מילים עליך</label>
            <input style={{ height: "68px", padding: "11px" }} type="text" />
            <label htmlFor="">טלפון <span> (לשימוש פנימי בלבד)</span> </label>
            <input style={{ height: "68px", padding: "11px" }} type="text" />
            <label htmlFor="">קישור לעמוד הפייסבוק שלך<span> (לא חובה)</span></label>
            <input style={{ height: "68px", padding: "11px" }} type="text" />
          </form>
        </div>
      </div>
    </EditLayout>
  )
}

export default DeveloperDetails


