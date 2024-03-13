import BottomPage from "../../Components/Home/BottomPage";
import Navbar from "../../Components/Navbar/Navbar";
import BtnStart from "../../components/Home/BtnStart";
import ContainerProjects from "../../components/Home/ContainerProjects";
import TopProjects from "../../components/Home/TopProjects";
import ConnectWithUs from "../../components/Popups/ConnectWithUs";
import "./homePage.scss";
const HomePage = () => {
  return (
    <div className="homePageDiv">
      <Navbar />
      <BtnStart />
      <TopProjects />
      <ContainerProjects />
      <BottomPage />
      <ConnectWithUs />
    </div>
  );
};

export default HomePage;
