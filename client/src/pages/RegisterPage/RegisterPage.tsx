import Navbar from "../../Components/Navbar/Navbar";
import RegisterForm from "../../components/Register/RegisterForm";
import "./registerPageStyle.scss";
const RegisterPage = () => {
  return (
    <>
        <Navbar/>
    <div className="registerPageDiv">
      <div className="div1"></div>
      <div className="div2">
        <RegisterForm/>
      </div>
    </div>
    </>
  ); 
};

export default RegisterPage;
