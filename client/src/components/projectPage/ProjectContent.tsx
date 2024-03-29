import { FC } from "react";

const ProjectContent: FC<{ project: Project }> = ({ project }) => {
  return (
    <div>
      {" "}
      <div dangerouslySetInnerHTML={{ __html: project.projectStory }} />
      <img src={project.images[0]} alt="projectImage" />
    </div>
  );
};

export default ProjectContent;
