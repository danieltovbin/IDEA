import { NavLink } from "react-router-dom";

const Navtabs = () => {
  return (
    <div className="navbar">
      <div className="navList">
        <ul>
          <NavLink to={"/descriptionProject"}>תיאור הפרויקט</NavLink>
          <NavLink to={"/contentEdit"}>תוכן הפרויקט</NavLink>
          <NavLink to={"/Submissions"}>תשורות</NavLink>
          <NavLink to={"/DeveloperDetails"}>פרטי היזם</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navtabs;



