import React from "react";
import CardButton from "./CardButton";

const PageContent = ({ title, intro, quote, email, cardButtons}) => {
    return (
        <div className="content">
            <header className="content__title">{title}</header>
            <div className="content__text-wrapper">
                {intro && <div className="content__about-intro">{intro}</div>}
                {quote && <p className="content__quote">{quote}</p>}
                {email && <span className="content__email">{email}</span>}
            </div>
            {cardButtons && <CardButton cardButtons={cardButtons} />}
        </div>
    );
};  

export default PageContent;