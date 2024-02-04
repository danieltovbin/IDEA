import EditLayout from '../../layouts/EditLayout'
import './scss/submissions.scss'
import { Button, Container, SvgIcon } from '@mui/material'

const Submissions = () => {
  return (
    <EditLayout>
      <div className='submissions'>
        <p>על מנת לשלוח את הפרויקט לאישור יש להכניס תשורה אחת לפחות. ניתן להוסיף ולהוריד תשורות לאורך חיי הפרויקט. התשורות זוהי בעצם הדרך למשוך את קהל התומכים, חשבו רחב ומגוון ככל הניתן</p>
      <Container className='newSubmission'>
      <Container>
        <Container>
          <SvgIcon
            className="MuiSvgIcon-root"
            focusable={false}
            viewBox="0 0 24 24"
            aria-hidden="true"
            style={{  height: '24px', fill: 'rgb(72, 173, 2)',justifyContent: "flex-end",
            width: "260px",minWidth: "440px" }}
          >
            <path d="M12,5.24a1.22,1.22,0,1,0,1.21,1.22A1.22,1.22,0,0,0,12,5.24Z"></path>
            <path d="M12,8.48a.91.91,0,0,0-.91.91v5.46a.91.91,0,1,0,1.82,0V9.39A.91.91,0,0,0,12,8.48Z"></path>
            <path d="M12,19a10.61,10.61,0,0,1-3.94-.75a.42.42,0,0,0-.45.09l-3,2.74,1-3.84a.52.52,0,0,0-.16-.54,8,8,0,0,1-3.07-6.2C2.37,5.81,6.69,2,12,2s9.62,3.81,9.62,8.5S17.31,19,12,19ZM12,1C6.19,1,1.46,5.26,1.46,10.5a9.08,9.08,0,0,0,3.18,6.79L3.31,22.36a.52.52,0,0,0,.19.56.46.46,0,0,0,.25.08A.46.46,0,0,0,4,22.89l4-3.6A11.55,11.55,0,0,0,12,20c5.81,0,10.54-4.26,10.54-9.5S17.81,1,12,1Z"></path>
          </SvgIcon>
        </Container>
      </Container>
      <Container>
        <Button
          tabIndex={0}
          type="button"
          style={{justifyContent: "center",marginTop: "8px",height: "40px",backgroundColor: "rgb(72, 173, 2)",color: "rgb(255, 255, 255)",
          fontSize: "13px",
          fontWeight: "bold",width: "260px"}}
        >
          <span style={{display: "flex",alignItems: "center"}}>
            <SvgIcon
              className="MuiSvgIcon-root jss682"
              focusable={false}
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ width: '16px', height: '16px', fill: 'rgb(255, 255, 255)'}}
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </SvgIcon>
            יצירת תשורה חדשה
          </span>
          <span></span>
        </Button>
      </Container>
    </Container>
    </div>
    </EditLayout>
  )
}

export default Submissions