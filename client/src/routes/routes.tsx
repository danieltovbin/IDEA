import { createBrowserRouter } from "react-router-dom";
import Format from "../pages/format/Format";
import Dashboard from "../pages/dashboard/Dashboard";
import DescriptionProject from "../pages/edit/DescriptionProject";
import ContentEdit from "../pages/edit/ContentEdit";
import Submissions from "../pages/edit/Submissions";
import DeveloperDetails from "../pages/edit/DeveloperDetails";
import CreateProject from "../pages/CreateProjectPage/CreateProjectPage";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ProjectMainPage from "../pages/ProjectMainPage/ProjectMainPage";
import MoreProjects from "../components/Home/util/MoreProjects";
import AdminPage from "../pages/AdminPage/AdminPage";
import UnAuthorizedPage from "../components/AdminPage/UnAuthorizedPage";


export const router = createBrowserRouter([
  { path: "/format", element: <Format /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/descriptionProject", element: <DescriptionProject /> },
  { path: "/contentEdit", element: <ContentEdit /> },
  { path: "/Submissions", element: <Submissions /> },
  { path: "/DeveloperDetails", element: <DeveloperDetails /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/homePage", element: <HomePage /> },
  { path: "/createProject", element: <CreateProject /> },
  { path: "/project", element: <ProjectMainPage /> },
  { path: "/more/:categoryName", element: <MoreProjects /> },
  { path: "/adminPage", element: <AdminPage /> },
  { path: "/", element: <HomePage /> },
  { path: "*", element: <UnAuthorizedPage /> },
]);
