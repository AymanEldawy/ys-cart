import React from "react";

export const CartTotal = ({ total }) => {
  return <div className="cart-total">Total: {+total.toFixed(2)} LE</div>;
};
