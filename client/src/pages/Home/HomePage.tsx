import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BtnStart from "../../Components/Home/BtnStart";
import "./homePage.scss";
import BottomPage from "../../Components/Home/BottomPage";
import AllProjects from "./AllProjects";
import TopProjects from "../../components/Home/TopProjects";
const HomePage = () => {
  return (
    <div className="homePageDiv">
      <Navbar />
      <BtnStart />
      <TopProjects />
      {/* <AllProjects /> */}
      <BottomPage />
    </div>
  );
};

export default HomePage;
