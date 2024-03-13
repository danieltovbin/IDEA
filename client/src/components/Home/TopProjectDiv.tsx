import { FC } from "react";
import "./topProjectStyle.scss";
import { useNavigate } from "react-router-dom";
import LeftDays from "../AdminPage/helpers/LeftDays";
// import LinearProgressWithLabel from '@mui/lab/LinearProgressWithLabel';

interface Gift {
  name: string;
  description: string;
  coast: number;
  deliveryOption: string[];
  date: Date;
}

interface OwnerInfo {
  ownerName: string;
  location: string;
  ownerDescription: string;
  phoneNumber: string;
  linkToFacebook: string;
  profileImageUrl: string;
}

interface TopProjectDivProps {
  projectInfo: {
    _id: string;
    ownerId: string;
    projectName: string;
    projectCategory: string[];
    shortDescription: string;
    tags: string[];
    images: string[];
    videoLink: string;
    projectStory: string;
    aid: number;
    raised: number;
    location: string;
    limitDate: string;
    ownerInfo: OwnerInfo;
    gifts: Gift[];
  };
}

const TopProjectDiv: FC<TopProjectDivProps> = ({ projectInfo }) => {
  const navigate = useNavigate();
  let {
    ownerId,
    projectName,
    projectCategory,
    shortDescription,
    tags,
    images,
    videoLink,
    projectStory,
    aid,
    raised,
    location,
    limitDate,
    ownerInfo,
    gifts,
  } = projectInfo;

  const percentRaised = parseInt(
    (((raised == null ? 0 : raised) / aid) * 100).toString()
  );

  const enterProject = () => {
    sessionStorage.setItem("projectId", projectInfo._id);
    navigate("/project");
  };
  return (
    <div className="mySlides fade topProjectInHomePage">
      <div className="topProjectNum1 topProject " dir="rtl">
        <div className="rSide">
          <iframe
            width="640"
            height="360"
            src={
              projectInfo.videoLink.includes("vimeo.com")
                ? `https://player.vimeo.com/video/${projectInfo.videoLink
                    .split("/")
                    .pop()}`
                : `https://www.youtube.com/embed/${
                  projectInfo.videoLink.split("=")[1]
                }`.split("&")[0]
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>

          <div className="rbIcons">
            <div className="location label">
              <div className="LocationIcon icon1">
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{
                    width: "24px",
                    height: "24px",
                    fill: "rgb(72, 173, 2)",
                  }}
                >
                  <path d="M12,20.5h0a.48.48,0,0,1-.4-.2c-.23-.3-5.66-7.53-5.66-10.73a6.07,6.07,0,1,1,12.13,0c0,3.2-5.44,10.43-5.67,10.73A.49.49,0,0,1,12,20.5Zm0-16A5.07,5.07,0,0,0,6.94,9.57c0,2.19,3.34,7.24,5.06,9.59,1.71-2.35,5.07-7.4,5.07-9.59A5.08,5.08,0,0,0,12,4.5Z"></path>
                  <path d="M12,12.85a3.29,3.29,0,1,1,3.28-3.28A3.28,3.28,0,0,1,12,12.85Zm0-5.57a2.29,2.29,0,1,0,2.28,2.29A2.29,2.29,0,0,0,12,7.28Z"></path>
                </svg>
              </div>
              <p>{projectInfo.ownerInfo.location}</p>
            </div>
            <div className="category label">
              <div className="categoryIcon icon1">
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{
                    width: "24px",
                    height: "24px",
                    fill: "rgb(72, 173, 2)",
                  }}
                >
                  <path d="M12,16.67c-1.87,0-5-.39-5-1.89s3.15-1.89,5-1.89,5,.4,5,1.89S13.86,16.67,12,16.67Zm0-2.78c-2.61,0-3.93.65-4,.91.08.23,1.41.87,4,.87s3.89-.62,4-.89C15.89,14.52,14.56,13.89,12,13.89Zm4,.91h0Z"></path>
                  <path d="M16.52,13a.51.51,0,0,1-.47-.32.52.52,0,0,1,.3-.65l2.85-1-7-2.58-.05,0a.5.5,0,0,0-.36,0l-.05,0L4.8,11l2.85,1a.52.52,0,0,1,.3.65A.51.51,0,0,1,7.3,13l-3.23-1.2-.1,0a.8.8,0,0,1-.31-.27l-.06-.09A.84.84,0,0,1,3.5,11a.81.81,0,0,1,.12-.42A.92.92,0,0,1,4,10.2l.14,0,7.37-2.73.08,0a1.39,1.39,0,0,1,.88,0l.08,0,7.41,2.74.12.05a.78.78,0,0,1,.29.26l.06.09a.82.82,0,0,1,0,.82.89.89,0,0,1-.35.33.39.39,0,0,1-.14,0L16.7,13A.57.57,0,0,1,16.52,13Z"></path>
                  <path d="M16.52,15.28a.5.5,0,0,1-.5-.5V12c-.08-.24-1.41-.89-4-.89s-3.94.65-4,.9v2.77a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V12c0-1.49,3.15-1.89,5-1.89s5,.4,5,1.89v2.78A.5.5,0,0,1,16.52,15.28Z"></path>
                  <path d="M18.61,15.28a.5.5,0,0,1-.5-.5V12a.5.5,0,0,1,1,0v2.78A.5.5,0,0,1,18.61,15.28Z"></path>
                  <path d="M17.91,16.67a.44.44,0,0,1-.22-.05.49.49,0,0,1-.22-.67l.69-1.39a.51.51,0,0,1,.45-.28h0a.51.51,0,0,1,.45.28L19.75,16a.5.5,0,0,1-.22.67.5.5,0,0,1-.67-.22l-.25-.5-.25.5A.5.5,0,0,1,17.91,16.67Z"></path>
                </svg>
              </div>
              <p>{projectCategory.map((cat) => `  ${cat} ,`)} </p>
            </div>
          </div>
        </div>
        <div className="lSide">
          <h2>{projectName}</h2>
          <div className="owner">
            <img src={ownerInfo.profileImageUrl} alt="" />
            <div className="ownerName">
              <p>הפרוייקט של:</p>
              <div className="name">
                <p>
                  <strong>{ownerInfo.ownerName}</strong>
                </p>
                <span className="mailIcon">
                  <svg
                    className="MuiSvgIcon-root jss131"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{
                      width: "24px",
                      height: "24px",
                      fill: "rgb(255, 13, 144)",
                    }}
                  >
                    <path d="M18,17.72H6a2.5,2.5,0,0,1-2.5-2.5V8.78A2.5,2.5,0,0,1,6,6.28H18a2.5,2.5,0,0,1,2.5,2.5v6.44A2.5,2.5,0,0,1,18,17.72ZM6,7.28a1.5,1.5,0,0,0-1.5,1.5v6.44A1.5,1.5,0,0,0,6,16.72H18a1.5,1.5,0,0,0,1.5-1.5V8.78A1.5,1.5,0,0,0,18,7.28Z"></path>
                    <path d="M12,12.85a2.13,2.13,0,0,1-1.19-.36l-5.7-3.9a.5.5,0,0,1,.56-.83l5.71,3.9a1.1,1.1,0,0,0,1.24,0l5.71-3.91a.5.5,0,0,1,.56.83l-5.7,3.9A2.13,2.13,0,0,1,12,12.85Z"></path>
                    <path d="M5.39,16.33A.53.53,0,0,1,5,16.15a.51.51,0,0,1,.06-.71L9.25,12A.5.5,0,0,1,10,12a.49.49,0,0,1-.06.7L5.71,16.21A.49.49,0,0,1,5.39,16.33Z"></path>
                    <path d="M18.61,16.33a.49.49,0,0,1-.32-.12l-4.18-3.48a.49.49,0,0,1-.06-.7.5.5,0,0,1,.7-.07l4.18,3.48a.51.51,0,0,1,.06.71A.53.53,0,0,1,18.61,16.33Z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="description">
            <p>{projectInfo.shortDescription}</p>
          </div>
          <div className="progressBar">
            <div
              className={
                percentRaised < 99 ? "progress" : "progress projectCompleted"
              }
              style={{ width: `${percentRaised}%` }}
            ></div>
            <p
              className={
                percentRaised < 99 ? "percentP" : "percentP percentPCompleted"
              }
              style={{
                position: "relative",
                top: "calc(-100% - 20px )",
                right: `calc(${
                  percentRaised > 3 ? percentRaised : 3
                }%  - 20px)`,
              }}
            >
              {percentRaised}%
            </p>
          </div>
          <div className="projectStatus">
            <div className="donatedFromAid">
              <h4> {raised == null ? 0 : raised} ₪</h4>
              <p>מתוך {aid} ₪</p>
            </div>
            <div className="leftDays">
              <LeftDays limitDate={projectInfo.limitDate} />
              <p>ימים שנותרו</p>
            </div>
            <div className="supporter">
              <h4>{10}</h4>
              <p>תומכים.ות</p>
            </div>
          </div>
          <div className="enterToProjectDiv">
            <button onClick={enterProject} className="enterToProjectBtn">
              כניסה לפרוייקט
            </button>
          </div>
          <div className="mediaIcons" style={{ justifyContent: "center" }}>
            <div
              style={{
                backgroundColor: "rgb(59, 89, 152)",
                width: "40px",
                height: "40px",
              }}
            >
              <a
                data-socialnetwork="facebook"
                data-shareprojectid="77000"
                id="share-link"
                href="https://www.facebook.com/"
                target="_blank"
                style={{ width: "40px", height: "40px" }}
              >
                <svg
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{
                    width: "24px",
                    height: "24px",
                    fill: "rgb(255, 255, 255)",
                  }}
                >
                  <path d="M14,6.67h2a.34.34,0,0,0,.33-.34v-2A.33.33,0,0,0,16,4H14a3.67,3.67,0,0,0-3.67,3.67V10H8a.33.33,0,0,0-.33.33v2a.34.34,0,0,0,.33.34h2.33v7a.34.34,0,0,0,.34.33h2a.33.33,0,0,0,.33-.33v-7h2.33a.35.35,0,0,0,.32-.23l.67-2a.36.36,0,0,0-.05-.3A.32.32,0,0,0,16,10H13V7.67A1,1,0,0,1,14,6.67Z"></path>
                </svg>
              </a>
            </div>
            <div
              style={{
                backgroundColor: "rgb(44, 183, 66)",
                width: "40px",
                height: "40px",
              }}
            >
              <a
                data-socialnetwork="whatsapp"
                data-shareprojectid="77000"
                id="share-link"
                href="https://api.whatsapp.com/"
                target="_blank"
                style={{ width: "40px", height: "40px" }}
              >
                <svg
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{
                    width: "24px",
                    height: "24px",
                    fill: "rgb(255, 255, 255)",
                  }}
                >
                  <path d="M12,4A8,8,0,0,0,5.26,16.32L4,19.55a.34.34,0,0,0,.31.45l.12,0,3.33-1.19A8,8,0,1,0,12,4Zm4,10.33A2,2,0,0,1,14,16c-1.05,0-3.06-1.25-3.9-2.1S8,11.05,8,10A2,2,0,0,1,9.67,8h.66a.32.32,0,0,1,.3.19s.4.81.67,1.32-.26,1.26-.58,1.58a4,4,0,0,0,.85,1.34,4,4,0,0,0,1.34.85c.32-.32,1-.87,1.58-.58s1.32.67,1.32.67a.32.32,0,0,1,.19.3Z"></path>
                </svg>
              </a>
            </div>
            <div
              style={{
                backgroundColor: "rgb(0, 172, 237)",
                width: "40px",
                height: "40px",
              }}
            >
              <a
                data-socialnetwork="twitter"
                data-shareprojectid="77000"
                id="share-link"
                href="https://twitter.com/"
                target="_blank"
                style={{ width: "40px", height: "40px" }}
              >
                <svg
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{
                    width: "24px",
                    height: "24px",
                    fill: "rgb(255, 255, 255)",
                  }}
                >
                  <path d="M19.91,7A.34.34,0,0,0,19.49,7a3.77,3.77,0,0,1-.44.16,3.33,3.33,0,0,0,.53-1,.38.38,0,0,0-.14-.38.36.36,0,0,0-.4,0,7.09,7.09,0,0,1-1.67.66A3.5,3.5,0,0,0,13,6a3.43,3.43,0,0,0-1.5,3.19A8.21,8.21,0,0,1,5.71,6.12.38.38,0,0,0,5.41,6a.35.35,0,0,0-.27.17,3.37,3.37,0,0,0-.39,2.62A3.79,3.79,0,0,0,5.36,10,1.69,1.69,0,0,1,5,9.81a.35.35,0,0,0-.57.27,3.58,3.58,0,0,0,1.86,3.09,2.39,2.39,0,0,1-.45-.09.35.35,0,0,0-.36.1.36.36,0,0,0-.06.37,3.81,3.81,0,0,0,2.64,2.16,6.13,6.13,0,0,1-3.67.75.35.35,0,0,0-.21.65,10.35,10.35,0,0,0,5.14,1.46,8.81,8.81,0,0,0,4.88-1.49,9.3,9.3,0,0,0,4.23-8A6.41,6.41,0,0,0,20,7.45.36.36,0,0,0,19.91,7Z"></path>
                </svg>
              </a>
            </div>
            <div
              style={{
                backgroundColor: "rgb(247, 32, 129)",
                width: "40px",
                height: "40px",
              }}
            >
              <a
                data-socialnetwork="email"
                data-shareprojectid="77000"
                id="share-link"
                href="#"
                target="_blank"
                style={{ width: "40px", height: "40px" }}
              >
                <svg
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{
                    width: "24px",
                    height: "24px",
                    fill: "rgb(255, 255, 255)",
                  }}
                >
                  <path d="M20,7.67a1,1,0,0,0-.13-.48L13.5,12l6.36,4.83a1,1,0,0,0,.14-.5Z"></path>
                  <path d="M11.36,11.82a1,1,0,0,0,1.27,0l6.73-5.08A.86.86,0,0,0,19,6.67H5a.86.86,0,0,0-.36.07Z"></path>
                  <path d="M4.13,7.19A1,1,0,0,0,4,7.67v8.66a1,1,0,0,0,.14.5L10.5,12Z"></path>
                  <path d="M12.94,12.41a1.62,1.62,0,0,1-1.88,0l-6.4,4.86a.93.93,0,0,0,.34.06H19a.93.93,0,0,0,.34-.06Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProjectDiv;
