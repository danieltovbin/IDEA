import React, { FC } from "react";
import CreationNav from "../Components/CreateProject/CreationNav";
import Navbar from "../components/NavbarFiled/Navbar";
import Navtabs from "../components/navtabs/Navtabs";
import "./scss/edit.scss";
import BottomPage from "../Components/Home/BottomPage";

interface LayoutProps {
  children: React.ReactNode;
}

const EditLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="edit">
      <Navbar />
      <CreationNav />
      <div>
        <Navtabs />
      </div>
      {children}
      <BottomPage />
    </div>
  );
};

export default EditLayout;
