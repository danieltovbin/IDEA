import Navbar from "../../Components/Navbar/Navbar";
import LoginForm from "../../components/Login/LoginForm";
import "./loginPage.scss";
const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="loginPageDiv">
        <div className="div1"></div>
        <div className="div2">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
