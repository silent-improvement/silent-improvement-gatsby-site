import React from "react";
import Hamburger from "./Hamburger";
import NavMenu from "./NavMenu";
import logo from "../images/logo.png";

const Header = ({ data }) => {
  return (
    <header className="header">
      <div className="header__logo-title-wrapper">
        <a href={`${__PATH_PREFIX__}/`}>
          <img
            src={logo}
            className="header__logo"
            alt="Silent Improvement Logo"
          />
        </a>
        <a href={`${__PATH_PREFIX__}/`} className="header__title">
          Silent Improvement
        </a>
      </div>
      <div className="header__header-menu-wrapper">
        <Hamburger data={data.navMenu} />
        <NavMenu data={data.navMenu} />
      </div>
    </header>
  );
};

export default Header;
