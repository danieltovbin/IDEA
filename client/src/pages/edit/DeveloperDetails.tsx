import { useEffect, useState } from "react";
import EntrepreneurName from "../../components/edit/DeveloperDetails/Inputs/EntrepreneurName";
import LinkToFacebook from "../../components/edit/DeveloperDetails/Inputs/LinkToFacebook";
import Phone from "../../components/edit/DeveloperDetails/Inputs/Phone";
import Residence from "../../components/edit/DeveloperDetails/Inputs/Residence";
import WordsAboutYou from "../../components/edit/DeveloperDetails/Inputs/WordsAboutYou";
import PicProfile from "../../components/edit/DeveloperDetails/picProfile/PicProfile";
import PrevNextPage from "../../components/edit/util/prevNextPage/PrevNextPage";
import EditLayout from "../../layouts/EditLayout";
import "./scss/description.scss";
import {
  getProjectById,
  updateOneOnProject,
  updateProject,
  uploadImage,
} from "../../API/Projects/projectClientCtrl";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DeveloperDetails = () => {
  const navigate = useNavigate();
  const [ownerInfo, setOwnerInfo] = useState({
    ownerName: null,
    location: null,
    ownerDescription: null,
    phoneNumber: null,
    linkToFacebook: null,
  });

  const [profileImg, setProfileImg] = useState();

  const handleChangeInput = (event: any): void => {
    const { name, value } = event.target;
    console.log(name, value);

    setOwnerInfo((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleProfileImage = async (event: any) => {
    setProfileImg(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const getProject = async () => {
    const currentProject = await getProjectById();
    setOwnerInfo(currentProject.ownerInfo);
    console.log("get project from DB", currentProject);
  };

  useEffect(() => {
    getProject();
  }, []);

  const handleSubmit = () => {
    console.log("form complete!");
    console.log(ownerInfo);
    updateOneOnProject("ownerInfo", ownerInfo);
    uploadImage(profileImg, "ownerInfo.profileImageUrl")
    navigate("/project");
  };

  return (
    <EditLayout>
      <div className="description" style={{ marginBottom: "40px" }}>
        <div className="description-container">
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "580px",
            }}
          >
            <p>
              גם כאן כמו בכל מקום, אנשים מתחברים לאנשים. לכן, ההיכרות איתך חשובה
              - מי האדם מאחורי הפרויקט, מה הביא אותך לכאן וכל פרט שיחבר למקום
              האישי ולהיכרות אמיתית איתך.
            </p>
            <div
              className="container-top"
              style={{ display: "flex", alignItems: "center" }}
            >
              <PicProfile
                handleChangeToForm={handleProfileImage}
                imageFromDB={""}
              />
              <div style={{ width: "72%" }}>
                <EntrepreneurName
                  value={
                    ownerInfo && ownerInfo.ownerName ? ownerInfo.ownerName : ""
                  }
                  addChangeToProject={handleChangeInput}
                />
                <Residence
                  value={
                    ownerInfo && ownerInfo.location ? ownerInfo.location : ""
                  }
                  addChangeToProject={handleChangeInput}
                />
              </div>
            </div>
            <WordsAboutYou
              value={
                ownerInfo && ownerInfo.ownerDescription
                  ? ownerInfo.ownerDescription
                  : ""
              }
              addChangeToProject={handleChangeInput}
            />
            <Phone
              value={
                ownerInfo && ownerInfo.phoneNumber ? ownerInfo.phoneNumber : ""
              }
              addChangeToProject={handleChangeInput}
            />
            <LinkToFacebook
              value={
                ownerInfo && ownerInfo.linkToFacebook
                  ? ownerInfo.linkToFacebook
                  : ""
              }
              addChangeToProject={handleChangeInput}
            />
          </form>
        </div>
      </div>
      <PrevNextPage
        getContentFunc={handleSubmit}
        prevPageName={"Submissions"}
        nextPageName={"project"}
      />
    </EditLayout>
  );
};

export default DeveloperDetails;
