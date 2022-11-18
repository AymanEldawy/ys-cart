import React from "react";

export const ProductCallToAction = ({ addItemToCart }) => {
  return (
    <div className="product-actions">
      <button onClick={addItemToCart}>Add To Cart</button>
      <button>Pickup From Store</button>
    </div>
  );
};
