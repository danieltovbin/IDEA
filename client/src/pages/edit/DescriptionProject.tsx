import { useRef } from 'react';
import EditLayout from '../../layouts/EditLayout'
import './scss/description.scss'
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import { Container, SvgIcon, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DescriptionProject = () => {
  const navigate = useNavigate()
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  return (
    <EditLayout>
      <div className="description">
        <div className='description-container'>
          <p>איך מתארים את הפרויקט בצורה הטובה ביותר? המטרה היא לעניין אנשים, למשוך אותם פנימה לתוך הפרויקט, אנחנו רוצים ליצור רושם ראשוני מסקרן ומעניין</p>
          <form style={{ display: 'flex', flexDirection: "column", maxWidth: "580px" }}>
            <label htmlFor="">שם הפרויקט</label>
            <input type="text" />
            <label htmlFor="">תיאור קצר של הפרויקט</label>
            <input style={{ height: "68px", padding: "11px" }} type="text" />
            <p className='title'>קטגוריות נוספות לפרויקט<span> (סה''כ ניתן להגדיר עד 3 קטגוריות)</span></p>
            <input style={{ height: "40px" }} type="text" />
            <label htmlFor="">תגיות הפרויקט(לא חובה)</label>
            <input type="text" />
            <label htmlFor="">תמונת הפרויקט</label>
            <div onClick={handleIconClick} style={{ height: "160px", cursor: "pointer", border: '1px solid rgb(118, 118, 118)', borderRadius: '5px', padding: '5px', display: 'inline-block', textAlign: 'center' }}>
              <div style={{ width: "50%", margin: " auto" }}>
                <PhotoSizeSelectActualIcon style={{ width: '52px', height: '38px', fill: 'rgb(72, 173, 2)', }} />
                <p style={{ color: "#424242", marginTop: "8px", lineHeight: 1.38, marginBottom: 0 }}>העלאת תמונה כקובץ או גרירה לכאן</p>
                <p style={{ margin: 0, color: "#9a9a9a", lineHeight: 1.38, whiteSpace: "pre-line", fontSize: "0.875rem", fontFamily: "Open Sans Hebrew, sans-serif !important", fontWeight: 400 }}>ניתן לעלות קבצים בפורמטים JPG,PNG,JPEG,
                  עדיפות לגודל 840X465px ועד משקל של 2 מ”ב</p>
                <input type="file" accept={".jpg, .png, .jpeg"} autoComplete="off" style={{ display: "none" }} ref={fileInputRef} />
              </div>
            </div>
            <label htmlFor="">סרטון הפרויקט(לא חובה)</label>
            <input type="text" />
            <label htmlFor="">סכום הגיוס</label>
            <input type="text" />
              <Container disableGutters style={{marginBottom: "70px", marginTop:"35px"}} onClick={()=> navigate("/contentEdit")}>
                <div style={{ display: "flex", color: "green" }}>
                  <Typography style={{color: "green", cursor:"pointer"}}>
                    שמירה והמשך
                  </Typography>
                  <SvgIcon className={`MuiSvgIcon-root jss230`} focusable={false} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                  </SvgIcon>
                </div>
              </Container>
          </form>
        </div>
      </div>
    </EditLayout>
  )
}

export default DescriptionProject



