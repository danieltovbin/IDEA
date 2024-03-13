import { FC } from "react";
import ProjectHeader from "./ProjectHeader";

interface HeaderProps {
  project: Project;
  loading?: boolean;
}
const Header: FC<HeaderProps> = ({ project, loading }) => {
  return (
    <div>
      {loading ? (
        <div className="loadingDiv">
          <img src="/image/Ellipsis-3.8s-203px.gif" alt="loading..." />
        </div>
      ) : (
        <ProjectHeader projectInfo={project} />
      )}
    </div>
  );
};

export default Header;
