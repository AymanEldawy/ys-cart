import React from "react";
// Images
import plus from "../images/cart/plus.svg";
import minus from "../images/cart/minus.svg";

export const ProductQuantity = ({ quantity, increment, decrement }) => {
  return (
    <div className="product-quantity">
      <h3>Quantity</h3>
      <div className="quantity-counter">
        <button onClick={decrement}>
          <img src={minus} alt="minus" />
        </button>
        {quantity}
        <button onClick={increment}>
          <img src={plus} alt="plus" />
        </button>
      </div>
    </div>
  );
};
