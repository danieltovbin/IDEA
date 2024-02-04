import React from "react";
import RegisterForm from "../../Components/Register/RegisterForm";
import "./registerPageStyle.scss";
import Navbar from "../../Components/Navbar/Navbar";
const RegisterPage = () => {
  return (
    <>
        <Navbar/>
    <div className="registerPageDiv">
      <div className="div1"></div>
      <div className="div2">
        <RegisterForm />
      </div>
    </div>
    </>
  ); 
};

export default RegisterPage;
