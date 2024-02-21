
import { Container, SvgIcon, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProjectById, updateProject } from "../../API/Projects/projectClientCtrl";
import ConnectWithUs from "../../components/Popups/ConnectWithUs";
import ProjectName from '../../components/edit/DescriptionProject/Inputs/ProjectName';
import ProjectTags from '../../components/edit/DescriptionProject/Inputs/ProjectTags';
import ProjectVideo from '../../components/edit/DescriptionProject/Inputs/ProjectVideo';
import Recruitment from "../../components/edit/DescriptionProject/Inputs/Recruitment";
import ShortDescription from "../../components/edit/DescriptionProject/Inputs/ShortDescription";
import ThreeCategories from '../../components/edit/DescriptionProject/Inputs/ThreeCategories';
import PicProject from "../../components/edit/DescriptionProject/picProject/PicProject";
import LabelAndNote from '../../components/labelNoteProps/LabelAndNote';
import EditLayout from "../../layouts/EditLayout";
import "./scss/description.scss";

const DescriptionProject = () => {
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState<Project>({
    ownerId: "",
    projectName: "",
    projectCategory: [""],
    shortDescription: "",
    tags: [""],
    images: [""],
    videoLink: "",
    projectStory: "",
    gifts: [
      {
        name: "",
        description: "",
        deliveryOption: [""],
      },
    ],
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const getProject = async () => {
    setCurrentProject(await getProjectById());
  };
  useEffect(() => {
    getProject();
  }, []);

  const handleChange = (event: any): void => {
    const { name, value } = event.target;
    setCurrentProject((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    console.log(currentProject);
  };

  const handleSubmit = () => {
    console.log("form complete!");
    console.log(currentProject);
    updateProject(currentProject)
    
  };


const DescriptionProject = () => {
  const navigate = useNavigate();}


  return (
    <EditLayout>
      <div className="description">
        <div className="description-container">
          <p>
            איך מתארים את הפרויקט בצורה הטובה ביותר? המטרה היא לעניין אנשים,
            למשוך אותם פנימה לתוך הפרויקט, אנחנו רוצים ליצור רושם ראשוני מסקרן
            ומעניין
          </p>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "580px",
            }}
          >
            {/* <label htmlFor="">שם הפרויקט</label>
            <input
              type="text"
              value={currentProject?.projectName}
              name="projectName"
              onChange={handleChange}
            />
            <ShortDescription />
            <p className="title">
              קטגוריות נוספות לפרויקט
              <span> (סה''כ ניתן להגדיר עד 3 קטגוריות)</span>
            </p>
            <input  name="projectCategory" onChange={handleChange} value={currentProject.projectCategory} style={{ height: "40px" }} type="text" />
            <label htmlFor="">תגיות הפרויקט(לא חובה)</label>
            <input
              name="tags"
              onChange={handleChange}
              value={currentProject.tags}
              type="text"
            />
            <label htmlFor="">תמונת הפרויקט</label>
            <PicProject />
            <label htmlFor="">סרטון הפרויקט(לא חובה)</label>
            <input
              name="videoLink"
              value={currentProject.videoLink}
              onChange={handleChange}
              type="text"
            />
            <Recruitment handleChange={handleChange} />
            <Container
              disableGutters
              style={{ marginBottom: "70px", marginTop: "35px" }}
              onClick={() => navigate("/contentEdit")}
            >
              <div 
                onClick={handleSubmit}
                style={{ display: "flex", color: "green" }}
              >
                <Typography style={{ color: "green", cursor: "pointer" }}>
                  שמירה והמשך
                </Typography>
                <SvgIcon
                  style={{ width: "2em" }}
                  focusable={false}
                  viewBox="0 0 1 24"
                  aria-hidden="true"
                > --> */}
            <ProjectName />
            <ShortDescription />
            <ThreeCategories />
            <ProjectTags />
            <LabelAndNote textLabel={'תמונת הפרויקט'} labelHtmlFor={'picProject'} includeSpan={false} iconToolTip={'תמונת הפרויקט היא כרטיס הביקור של הפרויקט שלך באתר, ולכן היא חשובה מאוד. כדאי להעלות תמונה טובה ומעניינת שמייצגת היטב את הפרויקט.'} showTooltip={true} />
            <PicProject />
            <ProjectVideo />
            <Recruitment />
            <Container disableGutters style={{ marginBottom: "70px", marginTop: "35px" }} onClick={() => navigate("/contentEdit")}>
              <div style={{ display: "flex", color: "green" }}>
                <Typography style={{ color: "green", cursor: "pointer",fontSize:"15px", fontWeight:"bold" }}>
                  שמירה והמשך
                </Typography>
                <SvgIcon style={{ width: "2em" }} focusable={false} viewBox="0 0 1 24" aria-hidden="true">
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                </SvgIcon>
              </div>
            </Container>
          </form>
        </div>
      </div>
      <ConnectWithUs />
    </EditLayout>
  );
};

export default DescriptionProject;
