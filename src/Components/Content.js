import React from "react";

const Content = ({ title, intro, quote, email, button, url, buttonClass }) => {
  return (
    <div className="content">
      <header className="content__title">{title}</header>
      <div className="content__text-wrapper">
        {intro && <div className="content__about-intro">{intro}</div>}
        {quote && <p className="content__quote">{quote}</p>}
        {email && <span className="content__email">{email}</span>}
      </div>
      {button && url && (
        <a href={url} className="content__expand-button" type="button">
          {button}
          {buttonClass}
        </a>
      )}
    </div>
  );
};

export default Content;
