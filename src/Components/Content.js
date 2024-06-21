import React from "react";
import CardButton from "./CardButton";

const Content = () => {
  return (
    <>
      <div className="content">
        <header className="content__title">
          Your first step to bettering yourself
        </header>
        <div className="content__text-wrapper">
          <span>To whom this may concern:</span>
          <p className="content__quote">
            "You have made the leap to improve yourself, whether it's financial,
            career-wise, or simply building better habits. This is a landing
            page of collated resources and advice that have aided me in pursuing
            a greater version of myself. I hope it can be of help, for these
            things have helped me to strive for greatness."
          </p>
          <span>- Silent Improvement</span>
        </div>
        <CardButton />
      </div>
    </>
  );
};

export default Content;
