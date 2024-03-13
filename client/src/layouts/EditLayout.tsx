import React, { FC } from "react";
import CreationNav from "../components/CreateProject/CreationNav";
import Navbar from "../components/NavbarFiled/Navbar";
import Navtabs from "../components/navtabs/Navtabs";
import "./scss/edit.scss";
import BottomPage from "../components/Home/BottomPage";


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
