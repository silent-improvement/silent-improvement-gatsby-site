import React from "react";

const Breadcrumb = ({ data = [] }) => {
  return (
    <>
      <ul className="breadcrumb">
        {data.map((item, index) => (
          <li key={`${item.text}-${item.url}`} className="breadcrumb__item">
            {index !== data.length - 1 ? (<a
              href={`${__PATH_PREFIX__}${item.url}`}
              className="breadcrumb__item-link"
            >
              {item.text}
            </a>) : (<span
              className="breadcrumb__item-span"
            >
              {item.text}
            </span>)}
            {index !== data.length - 1 && (<svg
              className="breadcrumb__slash-svg"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 517 1013.75"
              x="0px"
              y="0px"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <defs>
                <style type="text/css"></style>
              </defs>
              <g>
                <path d="M411 28c37,-64 135,-7 98,57l-403 698c-37,64 -135,7 -98,-57l403 -698z" />
              </g>
            </svg>)}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Breadcrumb;
