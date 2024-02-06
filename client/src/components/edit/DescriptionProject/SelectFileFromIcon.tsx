import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';


const SelectFileFromIcon = () => {
  return (
    <div style={{ width: "50%", margin: " auto" }}>
      <PhotoSizeSelectActualIcon style={{ width: '52px', height: '38px', fill: 'rgb(72, 173, 2)', }} />
      <p style={{ color: "#424242", marginTop: "8px", lineHeight: 1.38, marginBottom: 0 }}>העלאת תמונה כקובץ או גרירה לכאן</p>
      <p style={{ margin: 0, color: "#9a9a9a", lineHeight: 1.38, whiteSpace: "pre-line", fontSize: "0.875rem", fontFamily: "Open Sans Hebrew, sans-serif !important", fontWeight: 400 }}>ניתן לעלות קבצים בפורמטים JPG,PNG,JPEG,
        עדיפות לגודל 840X465px ועד משקל של 2 מ”ב</p>
    </div>
  )
}

export default SelectFileFromIcon

