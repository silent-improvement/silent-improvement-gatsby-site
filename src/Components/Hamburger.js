import React, { useState } from "react";
import PropTypes from "prop-types";

const Hamburger = ({ data }) => {
  const [hBurger, setHamburger] = useState(false);
  const [nav, setNav] = useState(false);

  const handleToggle = () => {
    setNav(!nav);
  };

  const handleHToggle = () => {
    setHamburger(!hBurger);
  };

  return (
    <>
      <button
        className="header__hamburger"
        title="Hamburger mobile menu"
        onClick={handleHToggle}
        aria-label="Hamburger menu"
      >
        <svg
          className={
            hBurger
              ? "header__hamburger-icon--clicked"
              : "header__hamburger-icon"
          }
          xmlns="http://www.w3.org/2000/svg"
          width="24.837"
          height="17.558"
          viewBox="0 0 24.837 17.558"
          id="hamburger"
        >
          <g
            id="Icon_feather-menu"
            data-name="Icon feather-menu"
            transform="translate(-3 -7.5)"
          >
            <path
              id="Path_3859"
              data-name="Path 3859"
              d="M4.5,18H26.337"
              transform="translate(0 -1.721)"
              fill="none"
              stroke="#fafafa"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            ></path>
            <path
              id="Path_3860"
              data-name="Path 3860"
              d="M4.5,9H26.337"
              transform="translate(0)"
              fill="none"
              stroke="#fafafa"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            ></path>
            <path
              id="Path_3861"
              data-name="Path 3861"
              d="M4.5,27H26.337"
              transform="translate(0 -3.442)"
              fill="none"
              stroke="#fafafa"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            ></path>
          </g>
        </svg>
        <svg
          className={
            hBurger
              ? "header__x-icon--clicked feather feather-x"
              : "header__x-icon feather feather-x"
          }
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          id="x-icon"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <ul
        className={
          hBurger
            ? "header__header-menu--clicked"
            : "header__header-menu--hidden"
        }
      >
        <li className="header__menu-items">
          <a href={`${__PATH_PREFIX__}/about`}>About</a>
        </li>
        <li className="header__menu-items">
          <a href={`${__PATH_PREFIX__}/contact`}>Contact</a>
        </li>
        <li className="header__menu-dropdown">
          <button
            className="header__menu-items"
            onClick={handleToggle}
            aria-label="Navigation Menu"
          >
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

Hamburger.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default Hamburger;
