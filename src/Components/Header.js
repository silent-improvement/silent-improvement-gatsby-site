import React from "react";
import Hamburger from "./Hamburger";
import NavMenu from "./NavMenu";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo-title-wrapper">
          <a href="/index.js">
            <img
              src={logo}
              className="header__logo"
              alt="Silent Improvement Logo"
            ></img>
          </a>
          <a href="/index.js" className="header__title">
            <h3>Silent Improvement</h3>
          </a>
        </div>
        <div className="header__header-menu-wrapper">
          <Hamburger />
          <NavMenu />
        </div>
      </header>
    </>
  );
};

export default Header;
