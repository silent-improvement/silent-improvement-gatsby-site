import React from "react";
import { Link } from "gatsby";
import Hamburger from "./Hamburger";
import NavMenu from "./NavMenu";
import logo from "../images/logo.png";

const Header = () => {
  const menuItems = [
    {
      text: "Resources",
      url: "/pages/resources.html",
    },
    {
      text: "Study Tips",
      url: "#study-methodology",
    },
    {
      text: "Website Updates",
      url: "#updates",
    },
    {
      text: "Web Development",
      url: "#language-acquisition",
    },
  ];
  return (
    <>
      <header className="header">
        <div className="header__logo-title-wrapper">
          <Link to="/">
            <img
              src={logo}
              className="header__logo"
              alt="Silent Improvement Logo"
            ></img>
          </Link>
          <Link to="/" className="header__title">
            <h3>Silent Improvement</h3>
          </Link>
        </div>
        <div className="header__header-menu-wrapper">
          <Hamburger hamburger={menuItems}/>
          <NavMenu navMenuItems={menuItems}/>
        </div>
      </header>
    </>
  );
};

export default Header;
