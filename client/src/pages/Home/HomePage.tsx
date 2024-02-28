import BottomPage from "../../Components/Home/BottomPage";
import BtnStart from "../../Components/Home/BtnStart";
import Navbar from "../../Components/Navbar/Navbar";
import ContainerProjects from "../../components/Home/ContainerProjects";
import TopProjects from "../../components/Home/TopProjects";
import "./homePage.scss";
const HomePage = () => {
  return (
    <div className="homePageDiv">
      <Navbar />
      <BtnStart />
      <TopProjects />
      <ContainerProjects/>
      <BottomPage />
    </div>
  );
};

export default HomePage;
