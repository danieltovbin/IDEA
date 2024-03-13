import { FC, useEffect, useState } from "react";
import "./scss/projectCard.scss";
import { he, fakerHE } from "@faker-js/faker";
import { allCompletedProjects,  } from "../../../API/Projects/projectClientCtrl";
import { calculateRemainingDays } from "./calculateRemainingDays";
import { useNavigate } from "react-router-dom";
import { Project, ProjectCardProps } from "../../../vite-env";

const ProjectCard: FC<ProjectCardProps> = ({
  categoryFilter,
  projectsToShow,
}) => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);

  const allProjects = async () => {
    try {
      const { allProjects } = await allCompletedProjects();
      setProjects(allProjects);
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    allProjects();
  }, []);

  function isValidDate(date: Date): boolean {
    return !isNaN(date.getTime());
  }
  const filteredProjects = projects
    .filter((project) => {
      switch (categoryFilter) {
        case "endingSoon":
          const currentDate = new Date();
          const limitDate = new Date(project.limitDate);

          if (isValidDate(limitDate)) {
            const daysLeft = Math.ceil(
              (limitDate.getTime() - currentDate.getTime()) /
                (1000 * 60 * 60 * 24)
            );
            return daysLeft > 0 && daysLeft <= 17;
          }
          return false;

        case "popular":
          return Math.random() > 0.5;

        case "new":
          const current_Date = new Date();
          const limit_Date = new Date(project.limitDate);

          if (isValidDate(limit_Date)) {
            const daysLeft = Math.ceil(
              (limit_Date.getTime() - current_Date.getTime()) /
                (1000 * 60 * 60 * 24)
            );
            return daysLeft > 45 && daysLeft <= 50;
          }
          return false;

        case "completed":
          return (
            parseInt(((project.raised / project.aid) * 100).toString()) >= 99
          );

        default:
          return true;
      }
    })
    .slice(0, projectsToShow);

  const clickedOnProject = (projectId: string) => {
    sessionStorage.setItem("projectId", projectId);
    navigate("/project");
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {filteredProjects.map((project, index) => (
        <div
          className="main"
          onClick={() => clickedOnProject(project._id)}
          key={project._id}
          style={{
            marginLeft: index < projects.length - 1 ? "12px" : "0",
          }}
        >
          <div style={{ overflow: "hidden", height: "133px" }}>
            <img className="card-image" src={project.images[0]} />
          </div>
          <div>
            <p></p>
          </div>
          <div className="projectName">{project.projectName}</div>
          <div
            style={{
              width: "calc(100% - 16px)",
              padding: "8px 16px 0px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="btn-avatar">
              <button type="button" disabled>
                <span>
                  <img
                    width="24px"
                    height="24px"
                    style={{ borderRadius: "50%" }}
                    src={project.ownerInfo.profileImageUrl}
                  />
                </span>
              </button>
            </div>
            <div>
              <div
                style={{
                  fontWeight: "normal",
                  padding: "0px 5px",
                  fontSize: "13px",
                  lineHeight: "17px",
                }}
              >
                {project.ownerInfo?.ownerName || "Unknown Owner"}
              </div>
            </div>
          </div>
          <div className="containerCardProject">
            {project.shortDescription}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                bottom: "6px",
                position: "absolute",
                height: "17px",
                left: " 0px",
                right: "0px",
              }}
            ></div>
          </div>
          <div style={{ paddingBottom: "16px", paddingTop: "16px" }}>
            <div style={{ padding: "0 16px" }}>
              <div className="progressBar">
                <div
                  className={
                    parseInt(
                      ((project.raised / project.aid) * 100).toString()
                    ) < 99
                      ? "progress"
                      : "progress projectCompleted"
                  }
                  style={{
                    width: `${parseInt(
                      ((project.raised / project.aid) * 100).toString()
                    )}%`,
                  }}
                ></div>
                <p
                  className={
                    parseInt(
                      ((project.raised / project.aid) * 100).toString()
                    ) < 99
                      ? "percentP"
                      : "percentP percentPCompleted"
                  }
                  style={{
                    position: "relative",
                    top: "calc(-100% - 20px )",
                    right: `calc(${parseInt(
                      ((project.raised / project.aid) * 100).toString()
                    )}%  - 0px)`,
                  }}
                >
                  {parseInt(((project.raised / project.aid) * 100).toString())}%
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                padding: "8px 16px 0",
                justifyContent: "space-between",
              }}
            >
              <div className="number">
                <p>
                  <span>₪</span>
                  {project.raised}
                </p>
                <p>
                  מתוך <span>₪</span>
                  {project.aid}
                </p>
              </div>
              <div className="number">
                <p>{calculateRemainingDays(project.limitDate)}</p>
                <p>ימים נותרו</p>
              </div>
              <div className="number">
                <p>32</p>
                <p>תומכים.ות</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
