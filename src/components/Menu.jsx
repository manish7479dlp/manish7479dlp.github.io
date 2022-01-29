import React from "react";
import { NavLink } from "react-router-dom";
import ToggleIcon from "images/toggle.png";

const Menu = () => {
  return (
    <>
      <div className="label">
        <label htmlFor="toggle">
          <img src={ToggleIcon} alt="toggleImage" />
        </label>
      </div>
      <input type="checkbox" id="toggle" />
      <nav>
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        <NavLink className="navLink" to="/skills">
          Skills
        </NavLink>
        <NavLink className="navLink" to="/project">
          Projects
        </NavLink>
        <NavLink className="navLink" to="/contact">
          Contacts
        </NavLink>
      </nav>
    </>
  );
};

export default Menu;
