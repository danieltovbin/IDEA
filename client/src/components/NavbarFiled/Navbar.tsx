import { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { handleLogOut } from "../../API/Users/usersClientCtrl";
import "./navbarStyle.scss"

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(
    sessionStorage.getItem("userToken") ? true : false
  );
  return (
    <div className="navbar">
      {isLogin ? (
        <CiLogout
          onClick={() => {
            handleLogOut();
            setIsLogin(false);
          }}
          className="logoutIcon"
        />
      ) : null}
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
