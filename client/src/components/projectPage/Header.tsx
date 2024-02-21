import React, { useEffect, useState } from "react";
import { getProjectById } from "../../API/Projects/projectClientCtrl";
import TopProjectDiv from "../Home/TopProjectDiv";
import TopProjects from "../Home/TopProjects";
import { project1, project2, project3, project4 } from "../Home/projects";
import ProjectHeader from "./projectHeader";

const Header = () => {
  const [projectInformation, setProjectInformation] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectInfo = await getProjectById();
        setProjectInformation(projectInfo);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchProject();
  }, []);
  return (
    <div>
      <ProjectHeader projectInfo={project1} />
    </div>
  );
};

export default Header;
