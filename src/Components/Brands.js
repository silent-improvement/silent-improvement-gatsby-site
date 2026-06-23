import React from "react";
import PropTypes from "prop-types";
import brand1 from "../images/logoipsum-362.svg";
import brand2 from "../images/logoipsum-325.svg";
import brand3 from "../images/logoipsum-217.svg";
import brand4 from "../images/logoipsum-311.svg";
import brand5 from "../images/logoipsum-218.svg";

const brand_logos = {
  "logoipsum-362.svg": brand1,
  "logoipsum-325.svg": brand2,
  "logoipsum-217.svg": brand3,
  "logoipsum-311.svg": brand4,
  "logoipsum-218.svg": brand5
}

const Brands = ({ data = [] }) => {
  return (
    <>
      <div className="brands">
        <ul className="brands__brand-container">
          {data && data.length > 0 ? (
            data.map((lb, index) => (
              <li
                key={index}
                className="brands__brand"
                >
                  <img src={brand_logos[lb.logoSource]} className={lb.logoClass} alt="The various brands that I am sponsored by"></img>
              </li>
            ))
          ) : (
            <li>No menu items found</li>
          )}
        </ul>
      </div>
    </>
  )
}

Brands.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      logoClass: PropTypes.string.isRequired,
      logoSource: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Brands;
