import React, { FC } from "react";
import CreationNav from "../Components/CreateProject/CreationNav";
import BottomPage from "../Components/Home/BottomPage";
import Navbar from "../Components/Navbar/Navbar";
import Navtabs from "../components/navtabs/Navtabs";
import "./scss/edit.scss";

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
      <BottomPage />
    </div>
  );
};

export default EditLayout;
