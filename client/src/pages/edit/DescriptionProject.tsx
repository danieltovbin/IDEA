import { Container, SvgIcon, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProjectById,
  updateProject,
  uploadImage,
} from "../../API/Projects/projectClientCtrl";
import ConnectWithUs from "../../components/Popups/ConnectWithUs";
import ProjectName from "../../components/edit/DescriptionProject/Inputs/ProjectName";
import ProjectTags from "../../components/edit/DescriptionProject/Inputs/ProjectTags";
import ProjectVideo from "../../components/edit/DescriptionProject/Inputs/ProjectVideo";
import Recruitment from "../../components/edit/DescriptionProject/Inputs/Recruitment";
import ShortDescription from "../../components/edit/DescriptionProject/Inputs/ShortDescription";
import ThreeCategories from "../../components/edit/DescriptionProject/Inputs/ThreeCategories";
import PicProject from "../../components/edit/DescriptionProject/picProject/PicProject";
import LabelAndNote from "../../components/labelNoteProps/LabelAndNote";
import EditLayout from "../../layouts/EditLayout";
import "./scss/description.scss";

const DescriptionProject = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState();
  const [currentProject, setCurrentProject] = useState<any>({
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


  const getProject = async () => {
    setCurrentProject(await getProjectById());
  };

  useEffect(() => {
    getProject();
  }, []);

  const handleChangeInput = (event: any): void => {
    const { name, value } = event.target;
    setCurrentProject((prevFormData: Project) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectedImages = (event: any) => {
    setImages(event.target.files[0]);
  };

  const handleChangeTags = (selectedTags: [string]): void => {
    setCurrentProject((prevFormData: Project) => {
      return {
        ...prevFormData,
        tags: selectedTags,
      };
    });
  };

  const handleChangeCategories = (selectedCategories: [string]): void => {
    setCurrentProject((prevFormData: Project) => {
      return {
        ...prevFormData,
        projectCategory: selectedCategories,
      };
    });
  };

  const handleSubmit = () => {
    updateProject(currentProject);
    uploadImage(images, "images");
    navigate("/contentEdit");
  };

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
            <ProjectName
              value={currentProject.projectName}
              addChangeToProject={handleChangeInput}
            />
            <ShortDescription
              value={currentProject.shortDescription || ""}
              addChangeToProject={handleChangeInput}
            />
            <ThreeCategories
              value={currentProject.projectCategory || ""}
              addChangeToProject={handleChangeCategories}
            />
            <ProjectTags
              value={currentProject.tags || ""}
              addChangeToProject={handleChangeTags}
            />
            <LabelAndNote
              textLabel={"תמונת הפרויקט"}
              labelHtmlFor={"picProject"}
              includeSpan={false}
              iconToolTip={
                "תמונת הפרויקט היא כרטיס הביקור של הפרויקט שלך באתר, ולכן היא חשובה מאוד. כדאי להעלות תמונה טובה ומעניינת שמייצגת היטב את הפרויקט."
              }
              showTooltip={true}
            />
            <PicProject
              imageFromDB={
                currentProject.images ? currentProject.images[0] : null
              }
              handleChangeToForm={handleSelectedImages}
            />
            <ProjectVideo
              value={currentProject.videoLink || ""}
              addChangeToProject={handleChangeInput}
            />
            <Recruitment
              value={currentProject.aid || ""}
              addChangeToProject={handleChangeInput}
            />
            <Container
              disableGutters
              style={{ marginBottom: "70px", marginTop: "35px" }}
              onClick={handleSubmit}
            >
              <div style={{ display: "flex", color: "green" }}>
                <Typography
                  style={{
                    color: "green",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  שמירה והמשך
                </Typography>
                <SvgIcon
                  style={{ width: "2em" }}
                  focusable={false}
                  viewBox="0 0 1 24"
                  aria-hidden="true"
                >
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                </SvgIcon>
              </div>
            </Container>
          </form>
        </div>
      </div>
      <ConnectWithUs />
      <div style={{ marginBottom: "70px" }}></div>
    </EditLayout>
  );
};

export default DescriptionProject;
