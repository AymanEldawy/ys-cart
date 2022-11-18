import React from "react";

export const Backdrop = ({ isCartOpen, closeCart }) => {
  return (
    <div
      onClick={closeCart}
      className={`backdrop ${isCartOpen ? "show-backdrop" : ""}`}
    ></div>
  );
};
