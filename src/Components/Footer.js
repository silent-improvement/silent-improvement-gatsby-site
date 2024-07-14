import React from "react";
import "../styles/main.scss";

const Footer = ({ data }) => {
  return (
    <div className="footer">
      <div className="footer__social-media">
        {data && data.length > 0 ? (
          data.map((fl, index) => (
            <a
              key={index}
              href={fl.url}
              target="_blank"
              rel="noopener noreferrer"
              title={fl.title}
            >
              <i className={`${fl.brandsClass} ${fl.socialClass}`}></i>{" "}
              {/* Combine classes correctly */}
            </a>
          ))
        ) : (
          <li>No menu items found</li>
        )}
      </div>
    </div>
  );
};

export default Footer;
