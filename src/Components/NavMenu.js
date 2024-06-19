import React, { useState } from "react";

const NavMenu = () => {
  const [navMenu, setNavMenu] = useState(false);

  const handleToggle = () => {
    setNavMenu(!navMenu);
  };

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
      <ul className="header__header-menu">
        <li className="header__menu-items">
          <a href="pages/about.html">About</a>
        </li>
        <li className="header__menu-items">
          <a href="pages/contact.html">Contact</a>
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
              navMenu
                ? "header__more-accordion"
                : "header__more-accordion-close"
            }
          >
            <ul className="header__accordion-menu">
              {menuItems.map((m) => (
                <li className="header__accordion-items">
                  <a href={m.url}>{m.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
};

export default NavMenu;
