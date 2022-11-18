import React from "react";

// Images
import subStar from "../images/cart/sub-star.svg";
import star from "../images/cart/star.svg";

export const ProductRate = () => {
  return (
    <div className="product-rate">
      <div className="rate-stars">
        {/* {getRateStars()} */}
        <img src={star} alt="product-rate" />
        <img src={star} alt="product-rate" />
        <img src={star} alt="product-rate" />
        <img src={star} alt="product-rate" />
        <img src={subStar} alt="product-rate" />
      </div>
      <b className="rate-number">3.4 of 5</b>
      <span className="rate-count">22 Rate</span>
    </div>
  );
};
