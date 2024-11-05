import React, { useState } from "react";
import PropTypes from "prop-types";

const NavMenu = ({ data }) => {
  const [nav, setNav] = useState(false);

  const handleToggle = () => {
    setNav(!nav);
  };

  return (
    <>
      <ul className="header__header-menu">
        <li className="header__menu-items">
          <a href={`${__PATH_PREFIX__}/about`}>About</a>
        </li>
        <li className="header__menu-items">
          <a href={`${__PATH_PREFIX__}/contact`}>Contact</a>
        </li>
        <li className="header__menu-dropdown">
          <button className="header__menu-items" onClick={handleToggle}>
            More
            <svg
              aria-hidden="true"
              className={
                nav ? "header__menu-chev-rotate" : "header__menu-chev"
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
              // conditional logic to switch between open and closing dropdown
              nav ? "header__more-dropdown" : "header__more-dropdown-close"
            }
          >
            <ul className="header__dropdown-menu">
              {data && data.length > 0 ? (
                data.map((item) => (
                  <li
                    key={`${item.text}-${item.url}`}
                    className="header__dropdown-items"
                  >
                    <a href={`${__PATH_PREFIX__}${item.url}`}>{item.text}</a>
                  </li>
                ))
              ) : (
                <li>No menu items found</li>
              )}
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
};

NavMenu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default NavMenu;
