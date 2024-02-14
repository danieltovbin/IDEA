
const SelectFileFromProfile = () => {
    return (
      <div style={{ width: "100%", height: "60px", minWidth: "140px" }} tabIndex={0}>
                <svg
                  focusable="false"
                  viewBox="0 0 40 40"
                  aria-hidden="true"
                  style={{marginTop: "15px", width: '40px', height: '40px', fill: 'rgb(72, 173, 2)', textAlign: "center" }}
                >
                  <path d="M37.81,40a1.18,1.18,0,0,1-1.19-1.16,16.62,16.62,0,0,0-33.24,0A1.18,1.18,0,0,1,2.19,40,1.17,1.17,0,0,1,1,38.84a19,19,0,0,1,38,0A1.17,1.17,0,0,1,37.81,40Z"></path>
                  <path d="M19.71,2.52a7.12,7.12,0,1,0,6.91,7.12,7,7,0,0,0-6.91-7.12Zm0,16.48A9.5,9.5,0,1,1,29,9.5,9.37,9.37,0,0,1,19.71,19Z"></path>
                </svg>
                <div style={{
                  color: "#424242",
                }}>
                  <p>תמונה שלך העלאה / גרירה לכאן</p>
                  <p>עד משקל של 2 מ”ב</p>
                </div>
              </div>
    )
  }
  
  export default SelectFileFromProfile