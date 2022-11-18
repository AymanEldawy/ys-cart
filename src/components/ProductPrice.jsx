import React from "react";

export const ProductPrice = ({ price, discount }) => {
  let priceDiscount = discount ? (price * (100 - discount)) / 100 : price; // calculate price after discount
  return (
    <div className="product-price">
      <b className="product-price-sub">{priceDiscount} LE</b>
      {discount ? (
        <>
          <sup className="product-price-full">{price}LE</sup>
          <span className="product-price-discount">{discount}% Off</span>
        </>
      ) : null}
    </div>
  );
};
