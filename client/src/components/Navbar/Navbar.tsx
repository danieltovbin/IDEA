import React from "react";
import "./navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="logo">
        <img src="../../../public/image/IDEA ICON .png" alt="" />
      </div>
      <div className="navList">
        <ul>
          <NavLink to={"/login"}>התחברות</NavLink>
          <NavLink to={"/register"}>הרשמה</NavLink>
          <NavLink to={"/homePage"}>בית</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
