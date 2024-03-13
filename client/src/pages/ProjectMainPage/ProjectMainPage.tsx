import { useEffect, useState } from "react";
import { getProjectById } from "../../API/Projects/projectClientCtrl";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../components/projectPage/Header";
import MiniNavProject from "../../components/projectPage/MiniNavProject";

const ProjectMainPage = () => {
  const [projectInformation, setProjectInformation] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const fetchProject = async () => {
    try {
      const projectInfo = await getProjectById();

      setProjectInformation(projectInfo);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="loadingDiv">
          <img src="/image/Ellipsis-3.8s-203px.gif" alt="loading..." />
        </div>
      ) : (
        <>
          <Header loading={loading} project={projectInformation}/>
          <MiniNavProject project={projectInformation} />
        </>
      )}
    </>
  );
};

export default ProjectMainPage;
