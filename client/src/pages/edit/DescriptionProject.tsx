import { Container, SvgIcon, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PicProject from '../../components/edit/DescriptionProject/picProject/PicProject';
import EditLayout from '../../layouts/EditLayout';
import './scss/description.scss';
import ShortDescription from '../../components/edit/DescriptionProject/Inputs/ShortDescription';
import Recruitment from '../../components/edit/DescriptionProject/Inputs/Recruitment';
import ThreeCategories from '../../components/edit/DescriptionProject/Inputs/ThreeCategories';
import ProjectTags from '../../components/edit/DescriptionProject/Inputs/ProjectTags';
import LabelAndNote from '../../components/labelNoteProps/LabelAndNote';
import ProjectVideo from '../../components/edit/DescriptionProject/Inputs/ProjectVideo';
import ProjectName from '../../components/edit/DescriptionProject/Inputs/ProjectName';

const DescriptionProject = () => {
  const navigate = useNavigate();


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
                <Typography style={{ color: "green", cursor: "pointer" }}>
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
    </EditLayout>
  );
};


export default DescriptionProject;

