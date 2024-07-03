import React, { useState } from "react";
import { Link } from "gatsby"
import PropTypes from "prop-types";

const NavMenu = ({ navMenuItems }) => {
  const [navMenu, setNavMenu] = useState(false);

  const handleToggle = () => {
    setNavMenu(!navMenu);
  };

  return (
    <>
      <ul className="header__header-menu">
        <li className="header__menu-items">
          <Link to={`${__PATH_PREFIX__}/about`} >About</Link>
        </li>
        <li className="header__menu-items">
          <Link to={`${__PATH_PREFIX__}/contact`} >Contact</Link>
        </li>
        <li className="header__menu-accordion">
          <button className="header__menu-items" onClick={handleToggle}>
            More
            <svg
              aria-hidden="true"
              className={
                navMenu ? "header__menu-chev-rotate" : "header__menu-chev"
              }
              data-prefix="fas"
              data-icon="chevron-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              id="chevron"
            >
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
          </button>
          <div
            className={
              // conditional logic to switch between open and closing accordion
              navMenu
                ? "header__more-accordion"
                : "header__more-accordion-close"
            }
          >
            <ul className="header__accordion-menu">
              {navMenuItems.map((item) => (
                // made key unique to avoid issues with adding/removing/changing order of items
                <li key={`${item.text}-${item.url}`} className="header__accordion-items">
                  {/* conditional logic for whether the link is internal or external */}
                  {item.url.startsWith("/") ? (
                    <Link to={item.url}>{item.text}</Link>
                  ) : (
                    <a href={item.url}>{item.text}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
};

NavMenu.propTypes = {
  NavMenu: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
    ),
};

export default NavMenu;
