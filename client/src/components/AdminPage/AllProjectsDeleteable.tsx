import { useEffect, useState } from "react";
import { allprojects } from "../../API/Projects/projectClientCtrl";
import { Project } from "../../vite-env";
import Loading from "../Helpers/Loading";
import DeletePopup from "./DeletePopup";
import ProjectCard from "./ProjectCrad";
import "./allProjectStyle.scss";

const AllProjectsDeletable = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);
  const [visibleDeletePopup, setVisibleDeletePopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const allProjects = async () => {
    try {
      const { allProjects } = await allprojects();
      setProjects(allProjects);
      setLoading(false);
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    allProjects();
  }, []);

  const handleDelete = (project: Project) => {
    setVisibleDeletePopup(true);
    setProjectToDelete(project);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="allProjectContainer">
            {projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                  handleDelete={handleDelete}
                />
              ))
            ) : (
              <>There is no projects to present</>
            )}
          </div>
          <DeletePopup
            visible={visibleDeletePopup}
            project={projectToDelete}
            onClose={() => setVisibleDeletePopup(false)}
          />
        </>
      )}
    </>
  );
};

export default AllProjectsDeletable;
