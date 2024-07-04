import React from "react";
import Hamburger from "./Hamburger";
import NavMenu from "./NavMenu";
import logo from "../../logo.png";

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
          <a href={`${__PATH_PREFIX__}/`}>
            <img
              src={logo}
              className="header__logo"
              alt="Silent Improvement Logo"
            ></img>
          </a>
          <a href={`${__PATH_PREFIX__}/`} className="header__title">
            <h3>Silent Improvement</h3>
          </a>
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
