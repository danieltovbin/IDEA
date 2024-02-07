import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
