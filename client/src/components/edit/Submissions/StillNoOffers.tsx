import './scss/stillNoOffers.scss'

const StillNoOffers = () => {
    return (
        <div className="stillNoOffers">
            <div style={{textAlign:"center"}}>
          <svg
            focusable="false"
            viewBox="0 0 72 56"
            aria-hidden="true"
            style={{ width: '69px', height: '47px', fill: 'rgb(72, 173, 2)',marginLeft: "30%" }}
          >
             <path d="M39.88,33.62H6.83a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H39.88a2,2,0,0,0,2-2v-4A2,2,0,0,0,39.88,33.62Zm1,6a1,1,0,0,1-1,1H6.83a1,1,0,0,1-1-1v-4a1,1,0,0,1,1-1H39.88a1,1,0,0,1,1,1Z"></path>
        <path d="M40.18,26.62H13.77c-1,0-1.7.49-1.7,1.14v1.71c0,.65.73,1.15,1.7,1.15H40.18c1,0,1.7-.5,1.7-1.15V27.76c0-.65-.73-1.14-1.7-1.14m0,3H13.77a1.7,1.7,0,0,1-.69-.15h0V27.82a1,1,0,0,1,.71-.2H40.18a1.7,1.7,0,0,1,.7.14v1.65a1,1,0,0,1-.71.21"></path>
        <path d="M40.68,17.12H25.27c-.67,0-1.2.69-1.2,1.57v2.85c0,.89.53,1.58,1.2,1.58H40.68c.67,0,1.2-.69,1.2-1.58V18.69C41.88,17.81,41.35,17.12,40.68,17.12Zm.2,4.42a.74.74,0,0,1-.2.58H25.28a.7.7,0,0,1-.21-.58V18.69a.69.69,0,0,1,.21-.57H40.67a.7.7,0,0,1,.21.58Z"></path>
        <path d="M41.38,45.9h-25a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h25a.51.51,0,0,0,.5-.5.5.5,0,0,0-.5-.5"></path>
        <path d="M41.38,43.4h-25a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h25a.51.51.51.51,0,0,0,.5-.5.5.5,0,0,0-.5-.5"></path>
        <path d="M70.45,12a3.49,3.49,0,0,0-2.26-1.43L31.18,4a3.49,3.49,0,0,0-2.62.58,3.54,3.54,0,0,0-1.44,2.26L26.22,12H4.42a3.5,3.5,0,0,0-3.5,3.5v33A3.5,3.5,0,0,0,4.42,52H42a3.5,3.5,0,0,0,3.5-3.5V47.2L61.24,50a3.23,3.23,0,0,0,.61.06,3.5,3.5,0,0,0,3.44-2.9L71,14.62A3.53,3.53,0,0,0,70.45,12ZM44.5,48.51A2.5,2.5,0,0,1,42,51H4.42a2.5,2.5,0,0,1-2.5-2.5v-33A2.5,2.5,0,0,1,4.42,13H42a2.5,2.5,0,0,1,2.5,2.5ZM70,14.45,64.31,47a2.5,2.5,0,0,1-2.9,2L45.5,46.18V42l16,2.82h.08a.5.5,0,0,0,.09-1L45.5,41V39.46L62,42.36H62a.5.5,0,0,0,.08-1L45.5,38.45V36.64L61,39.36a1.34,1.34,0,0,0,.35,0A2,2,0,0,0,62.45,39a1.94,1.94,0,0,0,.82-1.29L64,33.8a2,2,0,0,0-1.62-2.31l-16.85-3V25.47l17.66,3.11a2.59,2.59,0,0,0,.47.05c.74,0,1.31-.34,1.4-.88l.3-1.68c.12-.65-.52-1.26-1.47-1.42L45.5,21.41V15.5A3.5,3.5,0,0,0,42,12H27.24l.87-4.95A2.51,2.51,0,0,1,31,5l37,6.53a2.5,2.5,0,0,1,2,2.9ZM45.52,35.63v-6.1l16.65,2.94A1,1,0,0,1,63,33.63l-.69,3.94a1,1,0,0,1-.41.64,1,1,0,0,1-.75.17Zm0-13.2,18.15,3.2a1.49,1.49,0,0,1,.67.26l-.28,1.63a1,1,0,0,1-.73.08L45.57,24.47Z"></path>
        <path d="M66,15.38,50.83,12.7a1.11,1.11,0,0,0-1,.37,2,2,0,0,0-.46,1l-.49,2.81a1.41,1.41,0,0,0,.9,1.76L65,21.28l.17,0A1.47,1.47,0,0,0,66.41,20l.5-2.82A1.4,1.4,0,0,0,66,15.38M65.92,17l-.49,2.81a.74.74,0,0,1-.3.53L50,17.63a.67.67,0,0,1-.11-.6l.5-2.82a.7.7,0,0,1,.3-.52l15.16,2.67a.71.71,0,0,1,.1.6"></path>
          </svg>
          </div>
          <p style={{fontSize: "13px",marginTop: "13px",lineHeight: 1.38}}>עדיין אין תשורות בפרויקט</p>
          <p style={{color: "#7d7d7d",fontSize: "13px",marginTop: "1px",lineHeight: 1.38}}>יש להזין לפחות תשורה אחת כדי לשלוח את הפרויקט לאישור הצוות</p>
        </div>
      );
}

export default StillNoOffers