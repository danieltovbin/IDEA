import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { router } from "./routes/routes";

function App() {

  return (
    <>
      <ToastContainer></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
