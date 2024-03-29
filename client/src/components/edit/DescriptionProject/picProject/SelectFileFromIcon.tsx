
const SelectFileFromIcon = () => {
  return (
    <div style={{ width: "50%", margin: " auto",display:'flex', height: "100%", flexDirection: "column",alignItems: "center",justifyContent: "center" }}>
      <svg style={{ width: '52px', height: '38px', fill: 'rgb(72, 173, 2)', }}>
      <path d="M51.133 38H.867C.347 38 0 37.655 0 37.136V12.955c0-.173.173-.519.347-.691L14.213.173C14.387 0 14.56 0 14.733 0h36.4c.52 0 .867.345.867.864v36.272c0 .519-.347.864-.867.864zm-49.4-1.727h48.534V1.727H15.08L1.733 13.3v22.973z"></path>
      <path d="M14.733 13.818H.867c-.52 0-.867-.345-.867-.863 0-.519.347-.864.867-.864h13V.864c0-.519.346-.864.866-.864s.867.345.867.864v12.09c0 .519-.347.864-.867.864z"></path>
      <g><path d="M46.14 33H6.58c-.516 0-.86-.35-.86-.875v-19.25c0-.525.344-.875.86-.875s.86.35.86.875V31.25h37.84V6.75h-30.1c-.516 0-.86-.35-.86-.875S14.664 5 15.18 5h30.96c.516 0 .86.35.86.875v26.25c0 .525-.344.875-.86.875z"></path><path d="M46.14 29.5c-.172 0-.516 0-.688-.175L37.368 21.1 29.284 26c-.344.175-.86.175-1.204-.175L20.168 14.45 7.096 29.325a.822.822 0 0 1-1.204 0 .856.856 0 0 1 0-1.225l13.76-15.75c.172-.175.516-.35.688-.35.344 0 .516.175.688.35l8.084 11.55 7.912-4.9c.344-.175.688-.175 1.032.175l8.6 8.75a.856.856 0 0 1 0 1.225c0 .35-.344.35-.516.35zM36.68 15.5c-1.892 0-3.44-1.575-3.44-3.5s1.548-3.5 3.44-3.5 3.44 1.575 3.44 3.5-1.548 3.5-3.44 3.5zm0-5.25c-1.032 0-1.72.7-1.72 1.75s.688 1.75 1.72 1.75 1.72-.7 1.72-1.75-.688-1.75-1.72-1.75z"></path></g>
      </svg>
      <p style={{ color: "#424242", marginTop: "8px", lineHeight: 1.38, marginBottom: 0 }}>העלאת תמונה כקובץ או גרירה לכאן</p>
      <p style={{ margin: 0, color: "#9a9a9a", lineHeight: 1.38, whiteSpace: "pre-line", fontSize: "0.875rem", fontFamily: "Open Sans Hebrew, sans-serif !important", fontWeight: 400 }}>ניתן לעלות קבצים בפורמטים JPG,PNG,JPEG,
        עדיפות לגודל 840X465px ועד משקל של 2 מ”ב</p>
    </div>
  )
}

export default SelectFileFromIcon

