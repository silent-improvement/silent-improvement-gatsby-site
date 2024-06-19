import React, { useState } from "react";


const Hamburger = () => {
  const [hBurger, setHamburger] = useState(false);

  const handleToggle = () => {
    setHamburger(!hBurger);
  };

  return (
    <>
      <button
        className="header__hamburger"
        title="Hamburger mobile menu"
        onClick={handleToggle}
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            ></path>
            <path
              id="Path_3860"
              data-name="Path 3860"
              d="M4.5,9H26.337"
              transform="translate(0)"
              fill="none"
              stroke="#fafafa"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            ></path>
            <path
              id="Path_3861"
              data-name="Path 3861"
              d="M4.5,27H26.337"
              transform="translate(0 -3.442)"
              fill="none"
              stroke="#fafafa"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
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
          stroke-width="2"
          id="x-icon"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </>
  );
};
export default Hamburger;
