import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import Navbar from "./Components/Navbar/Navbar";
import { ProjectContext } from "./Contexts/projectContext";
import { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  // const [project, setProject] = useState<Project|null>();

  return (
    <>
      {/* <ProjectContext.Provider value={[project, setProject]}> */}
      <ToastContainer></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
      {/* </ProjectContext.Provider> */}
    </>
  );
}

export default App;
