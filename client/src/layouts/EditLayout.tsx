import React, { FC } from "react";
import Navbar from "../Components/Navbar/Navbar";
import AppBarProps from "../components/appbar/AppBar";
import Navtabs from "../components/navtabs/Navtabs";
import "./scss/edit.scss";
import CreationNav from "../Components/CreateProject/CreationNav";

interface LayoutProps {
  children: React.ReactNode;
}

const EditLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="edit">
      <Navbar/>
      {/* <AppBarProps /> */}
      <CreationNav />
      <div>
        <Navtabs />
      </div>
      {children}
    </div>
  );
};

export default EditLayout;
