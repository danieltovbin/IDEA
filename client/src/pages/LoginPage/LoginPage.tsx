import LoginForm from "../../Components/Login/LoginForm";
import Navbar from "../../Components/Navbar/Navbar";
import "./loginPage.scss"
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
