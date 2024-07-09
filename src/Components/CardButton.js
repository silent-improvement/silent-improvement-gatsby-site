import React from "react";
import PropTypes from "prop-types";
import youtube from "../images/youtube-icon.png";

const CardButton = ({ cardButtons }) => {
  return (
    <div className="card-button-container">
      {cardButtons.map((card) => (
        // made key unique to avoid issues with adding/removing/changing order of items
        <div key={`${card.text}-${card.url}`} className="card-button">
          <a href={card.url} className="card-button__items">
            <div className="card-button__item-content">
              <img
                src={youtube}
                className="card-button__image"
                alt="YouTube Banner"
              ></img>
              <div className="card-button__card-wrapper">
                <span className="card-button__card-info">{card.text}</span>
                <svg
                  className="card-button__image-button-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.039"
                  height="18.974"
                  viewBox="0 0 19.039 18.974"
                >
                  <path
                    id="arrow-right"
                    d="M8.095,38.921l.943-.965a1,1,0,0,1,1.441,0L18.739,46.4a1.055,1.055,0,0,1,0,1.473l-8.261,8.446a1,1,0,0,1-1.441,0l-.943-.965a1.06,1.06,0,0,1,.017-1.49l5.12-4.988H1.02A1.029,1.029,0,0,1,0,47.832v-1.39A1.029,1.029,0,0,1,1.02,45.4H13.232l-5.12-4.988A1.053,1.053,0,0,1,8.095,38.921Z"
                    transform="translate(0 -37.65)"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

CardButton.propTypes = {
  CardButtons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default CardButton;
