import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import "./App.css";
import { router } from "./routes/routes";

function App() {
  
  disableReactDevTools();
  return (
    <>
      <ToastContainer></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

