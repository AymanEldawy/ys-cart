import React from "react";

export const ProductDelivery = ({ days }) => {
  return (
    <div className="product-delivery">
      {days ? (
        <>
          <div className="product-delivery-info">
            <span>From:</span>
            <b>UK</b>
          </div>
          <div className="product-delivery-info">
            <span>To:</span>
            <b>Egypt</b>
          </div>
          <div className="product-delivery-info">
            <span>in:</span>
            <b>{days}</b>
          </div>
        </>
      ) : (
        <div className="product-delivery-info">
          <span>Pickup From:</span>
          <b>Pickup From:</b>
        </div>
      )}
    </div>
  );
};
