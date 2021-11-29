import React from "react";
import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img className="navbar-logo" src={logo} alt="ironhack logo"></img>
      </div>
      <div>
        <img className="menu-top" src={menu} alt="top menu"></img>
      </div>
    </nav>
  );
};

export default Navbar;
