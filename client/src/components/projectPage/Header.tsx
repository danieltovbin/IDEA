import { useEffect, useState } from "react";
import { getProjectById } from "../../API/Projects/projectClientCtrl";
import { project1 } from "../Home/projects";
import MiniNavProject from "./MiniNavProject";
import ProjectHeader from "./ProjectHeader";

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
