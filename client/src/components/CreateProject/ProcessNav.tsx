import React from "react";

import "./processNavStyle.scss";

const ProcessNav = () => {
  return (
    <div className="processNavDiv">
      <div className="MuiContainer-root step jss1133 MuiContainer-disableGutters">
        <div className="MuiContainer-root jss1134 MuiContainer-disableGutters">
          <svg
            className="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 45 45"
            aria-hidden="true"
            style={{ width: "45px", height: "45px", fill: "rgb(72, 173, 2)" }}
          >
            <circle cx="20" cy="20" r="20"></circle>
            <path
              d="M18.82,25.94a1,1,0,0,1-.7-.29l-5.27-5.27A1,1,0,0,1,14.26,19l4.56,4.57L28,14.35a1,1,0,0,1,1.42,0,1,1,0,0,1,0,1.41l-9.89,9.89A1,1,0,0,1,18.82,25.94Z"
              fill="#fff"
            ></path>
          </svg>
          <div className="MuiDivider-root dashed jss1132 dashed" role="separator"></div>
        </div>
        <p className="MuiTypography-root jss1135 textBold MuiTypography-body1">
          מילוי תכני הפרויקט ושליחתו לאישור
        </p>
      </div>

      <div className="MuiContainer-root step jss1133 MuiContainer-disableGutters">
        <div className="MuiContainer-root jss1134 MuiContainer-disableGutters">
          <svg
            className="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 45 45"
            aria-hidden="true"
            style={{ width: "45px", height: "45px", fill: "rgb(72, 173, 2)" }}
          >
            <circle cx="20" cy="20" r="20" fill="#f3f3f3"></circle>
            <path
              fill="#d6d6d6"
              d="M20,1A19,19,0,1,1,1,20,19,19,0,0,1,20,1m0-1A20,20,0,1,0,40,20,20,20,0,0,0,20,0Z"
            ></path>
            <path
              fill="#d6d6d6"
              d="M17.69,25.94a1,1,0,0,1-.7-.29l-5.28-5.27A1,1,0,0,1,13.13,19l4.56,4.57,9.18-9.18a1,1,0,0,1,1.42,0,1,1,0,0,1,0,1.41L18.4,25.65A1,1,0,0,1,17.69,25.94Z"
            ></path>
          </svg>
          <div className="MuiDivider-root jss1132  dashed" role="separator"></div>
        </div>
        <p className="MuiTypography-root jss1135 textDisabled MuiTypography-body1">
          חידוד ושיפור התכנים יחד עם צוות ניהול הפרויקט
        </p>
      </div>

      <div className="MuiContainer-root step jss1133 MuiContainer-disableGutters">
        <div className="MuiContainer-root jss1134 MuiContainer-disableGutters">
          <svg
            className="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 45 45"
            aria-hidden="true"
            style={{ width: "45px", height: "45px", fill: "rgb(72, 173, 2)" }}
          >
            <circle cx="20" cy="20" r="20" fill="#f3f3f3"></circle>
            <path
              fill="#d6d6d6"
              d="M20,1A19,19,0,1,1,1,20,19,19,0,0,1,20,1m0-1A20,20,0,1,0,40,20,20,20,0,0,0,20,0Z"
            ></path>
            <path
              fill="#d6d6d6"
              d="M17.69,25.94a1,1,0,0,1-.7-.29l-5.28-5.27A1,1,0,0,1,13.13,19l4.56,4.57,9.18-9.18a1,1,0,0,1,1.42,0,1,1,0,0,1,0,1.41L18.4,25.65A1,1,0,0,1,17.69,25.94Z"
            ></path>
          </svg>
          <div className="MuiDivider-root jss1132 dashed" role="separator"></div>
        </div>
        <p className="MuiTypography-root jss1135 textDisabled MuiTypography-body1">
          הפרויקט מאושר לפרסום! לחיצה אחת והוא באוויר
        </p>
      </div>

      <div className="MuiContainer-root step jss1133 MuiContainer-disableGutters">
        <div className="MuiContainer-root jss1134 MuiContainer-disableGutters">
          <svg
            className="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 45 45"
            aria-hidden="true"
            style={{ width: "45px", height: "45px", fill: "rgb(72, 173, 2)" }}
          >
            <circle cx="20" cy="20" r="20" fill="#f3f3f3"></circle>
            <path
              fill="#d6d6d6"
              d="M20,1A19,19,0,1,1,1,20,19,19,0,0,1,20,1m0-1A20,20,0,1,0,40,20,20,20,0,0,0,20,0Z"
            ></path>
            <path
              fill="#d6d6d6"
              d="M17.69,25.94a1,1,0,0,1-.7-.29l-5.28-5.27A1,1,0,0,1,13.13,19l4.56,4.57,9.18-9.18a1,1,0,0,1,1.42,0,1,1,0,0,1,0,1.41L18.4,25.65A1,1,0,0,1,17.69,25.94Z"
            ></path>
          </svg>
        </div>
        <p className="MuiTypography-root jss1135 textDisabled MuiTypography-body1">
          סיימת את המסע, עד לפעם הבאה :-)
        </p>
      </div>

      <input type="file" />
    </div>
  );
};

export default ProcessNav;
