import { useState } from "react";

import "./creationNav.scss";
import ProcessNav from "./ProcessNav";
const CreationNav = () => {
  const [processPresent, setProcessPresent] = useState(true);

  return (
    <div>
      <div className="MuiContainer-root nav jss98  MuiContainer-maxWidthXl">
        <div className="MuiContainer-root rNav jss99 jss110 MuiContainer-disableGutters">
          <button
            onClick={() => setProcessPresent((prev) => !prev)}
            className="MuiButtonBase-root MuiButton-root MuiButton-text jss116 jss120 jss117 jss121 withPadding withHeaderMargin"
            tabIndex={0}
            type="button"
            id="70adf0a8-400c-a0f6-fe45-d7801aa9b1c4"
          >
            <span className="MuiButton-label">
              <svg
                className="MuiSvgIcon-root jss118 jss122"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{
                  width: "24px",
                  height: "24px",
                  fill: "rgb(255, 13, 144)",
                }}
              >
                <path d="M14.16,4.67a.54.54,0,0,1,0,1.08H3.54a.54.54,0,0,1,0-1.08Zm0,1.8a.54.54,0,0,1,0,1.08H8.94a.54.54,0,0,1,0-1.08ZM20,3.77l1,1.1L18.71,7.38l-1,1.09-1-1.1-1-1.06,1-1.09,1,1.06ZM14.16,11a.54.54,0,0,1,0,1.08H3.54a.54.54,0,0,1,0-1.08Zm0,1.8a.54.54,0,0,1,0,1.08H8.94a.54.54,0,0,1,0-1.08Zm4.59-1.95a1.57,1.57,0,1,1-1.5,1.57A1.54,1.54,0,0,1,18.75,10.82Zm-4.59,6.45a.54.54,0,0,1,0,1.08H3.54a.54.54,0,1,1,0-1.08Zm0,1.8a.54.54,0,0,1,0,1.08H8.94a.54.54,0,1,1,0-1.08Zm4.59-2a1.57,1.57,0,1,1-1.5,1.57A1.54,1.54,0,0,1,18.75,17.09Z"></path>
              </svg>
              התקדמות בניית הפרויקט
            </span>
            <span className="MuiTouchRipple-root"></span>
          </button>
          <a href="/dashboard/77607">
            <button
              className="MuiButtonBase-root MuiButton-root MuiButton-text jss116 jss123 jss117 jss124 withPadding withHeaderMargin"
              tabIndex={0}
              type="button"
              id="17bd9750-6a30-0316-6dab-ee4758571bbd"
            >
              <span className="MuiButton-label">
                <svg
                  className="MuiSvgIcon-root jss118 jss125"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{
                    width: "24px",
                    height: "24px",
                    fill: "rgb(255, 13, 144)",
                  }}
                >
                  <rect x="3" y="3" width="7.8" height="7.71"></rect>
                  <rect x="13.2" y="3" width="7.8" height="7.71"></rect>
                  <rect x="3" y="13.29" width="7.8" height="7.71"></rect>
                  <rect x="13.2" y="13.29" width="7.8" height="7.71"></rect>
                </svg>
                לדשבורד הפרויקט
              </span>
              <span className="MuiTouchRipple-root"></span>
            </button>
          </a>
          <button
            className="MuiButtonBase-root MuiButton-root MuiButton-text jss116 jss147 jss117 jss148 withPadding withHeaderMargin"
            tabIndex={0}
            type="button"
            id="4996c8e7-c703-c2bd-3067-c723d4349809"
          >
            <span className="MuiButton-label">
              <svg
                className="MuiSvgIcon-root jss118 jss149"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{
                  width: "24px",
                  height: "24px",
                  fill: "rgb(255, 13, 144)",
                }}
              >
                <path d="M12,18.26c-5.14,0-9.7-5.45-9.89-5.68a.51.51,0,0,1,0-.64c.19-.23,4.75-5.68,9.89-5.68,6,0,9.75,5.49,9.91,5.72a.51.51,0,0,1,0,.6C21.65,12.81,17.09,18.26,12,18.26Zm-8.84-6c1,1.15,4.85,5,8.84,5s7.85-3.91,8.85-5c-.87-1.13-4.19-5-8.85-5C8,7.26,4.17,11.11,3.12,12.26Z"></path>
                <path d="M12,15.72a3.46,3.46,0,1,1,3.39-3.46A3.44,3.44,0,0,1,12,15.72ZM12,9.8a2.46,2.46,0,1,0,2.39,2.46A2.43,2.43,0,0,0,12,9.8Z"></path>
              </svg>
              לעמוד הפרויקט
            </span>
            <span className="MuiTouchRipple-root"></span>
          </button>
          <button
            className="MuiButtonBase-root MuiButton-root MuiButton-text jss116 jss129 jss117 jss130 withPadding withHeaderMargin"
            tabIndex={0}
            type="button"
            id="60229952-5653-c1a4-8af1-2fb54b9d7b78"
          >
            <span className="MuiButton-label">
              <svg
                className="MuiSvgIcon-root jss118 jss131"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{
                  width: "24px",
                  height: "24px",
                  fill: "rgb(255, 13, 144)",
                }}
              >
                <path d="M13.88,6.38h-.63V7.62h.63Zm.31-.63a.31.31,0,0,1,.31.31V7.94a.31.31,0,0,1-.31.31H12.94a.31.31,0,0,1-.32-.31V6.06a.31.31,0,0,1,.32-.31Zm.93-.63H8.88V8.56a.31.31,0,0,0,.31.32h5.62a.31.31,0,0,0,.31-.32Zm.32,7.5a.32.32,0,0,1,0,.63H8.56a.32.32,0,0,1,0-.63Zm0,1.88a.31.31,0,0,1,.31.31a.31.31,0,0,1-.31.31H8.56a.31.31,0,0,1-.31-.31a.31.31,0,0,1,.31-.31Zm0,1.88a.31.31,0,0,1,.31.31a.31.31,0,0,1-.31.31H8.56a.31.31,0,0,1-.31-.31a.31.31,0,0,1,.31-.31Zm.62-5.63H7.94a.94.94,0,0,0-.94.94v7.19H17V11.69A.94.94,0,0,0,16.06,10.75ZM8.25,5.12H5.44a.32.32,0,0,0-.32.32V18.56a.32.32,0,0,0,.32.32h.94V11.69a1.57,1.57,0,0,1,1.56-1.57h8.12a1.57,1.57,0,0,1,1.56,1.57v7.19h.94a.32.32,0,0,0,.32-.32V7.44L16.56,5.12h-.81V8.56a.94.94,0,0,1-.94.94H9.19a.94.94,0,0,1-.94-.94Z"></path>
              </svg>
              שמירה
            </span>
            <span className="MuiTouchRipple-root"></span>
          </button>
        </div>
        <div className="MuiContainer-root lNav jss100 MuiContainer-disableGutters">
          <button
            className="MuiButtonBase-root MuiButton-root jss101 MuiButton-text jss157 jss162 jss158 jss163 false Mui-disabled Mui-disabled"
            tabIndex={-1}
            type="button"
            disabled
            id="cd46c507-02f3-d129-6c40-2b0005fc2202"
            style={{
              backgroundColor: "rgb(255, 13, 144)",
              color: "rgb(255, 225, 225)",
            }}
          >
            <span className="MuiButton-label jss102">
              <svg
                className="MuiSvgIcon-root jss103"
                // focusable="false"
                viewBox="0 0 24 24"
                // aria-hidden="true"
                style={{
                  width: "24px",
                  height: "24px",
                  fill: "rgb(255, 225, 225)",
                }}
              >
                <path d="M19.8,12.7L6.5,5.1C6.4,5,6.2,5,6,5.1C5.9,5.2,5.8,5.3,5.8,5.5c0,0,0,0.1,0,0.1l2.1,11.8c0,0.2,0.1,0.3,0.3,0.4 c0.1,0.1,0.3,0.1,0.4,0l3.1-1.3l1.9,2.5c0,0,0,0,0,0c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1 c0,0,0,0,0,0c0,0,0,0,0,0h0c0.1-0.1,0.1-0.1,0.2-0.2l1.3-3.9l3.9-1.3c0.2-0.1,0.3-0.2,0.3-0.4C20,13,19.9,12.8,19.8,12.7z M8.8,16.6 l-1.6-9l5.3,7.4L8.8,16.6z M12.6,16.1l0.3-0.1l0.1,0.7L12.6,16.1z M13.4,14.6l-3.2-4.5l4.2,4.2L13.4,14.6z M14.1,16.8l-0.2-1.2 l0.7-0.2L14.1,16.8z M15.5,14L9.3,7.8l9,5.2L15.5,14z"></path>
              </svg>
              שלחו לי משוב
            </span>
          </button>
        </div>
      </div>
      {processPresent ? (
        <div className="processPresent">
          <ProcessNav/>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CreationNav;
