import BottomPage from "../../Components/Home/BottomPage";
import BtnStart from "../../components/Home/BtnStart";
import Navbar from "../../Components/Navbar/Navbar";
import ContainerProjects from "../../components/Home/ContainerProjects";
import TopProjects from "../../components/Home/TopProjects";
import "./homePage.scss";
import ConnectWithUs from "../../components/Popups/ConnectWithUs";
const HomePage = () => {
  return (
    <div className="homePageDiv">
      <Navbar />
      <BtnStart />
      <TopProjects />
      <ContainerProjects/>
      <BottomPage />
      <ConnectWithUs/>
    </div>
  );
};

export default HomePage;
