import { FC, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import "./projectCard.scss";

import ProgressBar from "./ProgressBar";
import LeftDays from "./helpers/LeftDays";
interface ProjectCardProps {
  project: Project;
  handleDelete: (project: Project) => void;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, handleDelete }) => {
  console.log(project.limitDate);

  return (
    <div dir="rtl" className="cardComp" key={project._id}>
      <div className="projectImage">
        <img src={project.images[0]} alt="" />
      </div>
      <div className="projectInfo">
        <h3 className="projectName">{project.projectName}</h3>
        <div className="ownerInfo">
          <img src={project.ownerInfo.profileImageUrl} alt="" />
          <p className="ownerName">
            {project.ownerInfo.ownerName || "Unknown owner"}
          </p>
        </div>
        <div className="description">
          <p>{project.shortDescription}</p>
          <div className="shadow"></div>
        </div>
        <div className="projectProgress">
          <ProgressBar raised={project.raised} aid={project.aid} />
        </div>
      </div>
      <div className="projectData">
        <div className="achievement">
          <h2>{project.raised}</h2>
          <p>מתוך {project.aid}</p>
        </div>
        <div className="leftDays">
          <LeftDays limitDate={project.limitDate} />
          <p>ימים שנותרו</p>
        </div>
        <div className="supports">
          <h2>{Math.round(Math.random() * 200)}</h2>
          <p>תומכים.ות</p>
        </div>
      </div>
      <div
        className="deleteBtn"
        onClick={() => {
          handleDelete(project);
        }}
      >
        <MdDeleteForever />
      </div>
    </div>
  );
};

export default ProjectCard;
