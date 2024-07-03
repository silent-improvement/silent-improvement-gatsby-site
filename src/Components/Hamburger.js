import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Hamburger = ({ hamburger }) => {
  const [hBurger, setHamburger] = useState(false);
  const [navMenu, setNavMenu] = useState(false);

  const handleToggle = () => {
    setNavMenu(!navMenu);
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
          <Link to={`${__PATH_PREFIX__}/about`}>About</Link>
        </li>
        <li className="header__menu-items">
          <Link to={`${__PATH_PREFIX__}/contact`}>Contact</Link>
        </li>
        <li className="header__menu-accordion">
          <button className="header__menu-items" onClick={handleToggle} aria-label="Navigation Menu">
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
              navMenu
                ? "header__more-accordion"
                : "header__more-accordion-close"
            }
          >
            <ul className="header__accordion-menu">
              {hamburger.map((m) => (
                // made key unique to avoid issues with adding/removing/changing order of items
                <li
                  key={`${m.text}-${m.url}`}
                  className="header__accordion-items"
                >
                  {/* conditional logic for whether the link is internal or external */}
                  {m.url.startsWith("/") ? (
                    <Link to={m.url}>{m.text}</Link>
                  ) : (
                    <a href={m.url}>{m.text}</a>
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

Hamburger.propTypes = {
  hamburger: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default Hamburger;
