import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import Navbar from "./Components/Navbar/Navbar";
import { ProjectContext } from "./Contexts/projectContext";
import { useContext, useState } from "react";

function App() {
  // const [project, setProject] = useState<Project|null>();

  return (
    <>
      {/* <ProjectContext.Provider value={[project, setProject]}> */}
        <RouterProvider router={router}></RouterProvider>
      {/* </ProjectContext.Provider> */}
    </>
  );
}

export default App;
