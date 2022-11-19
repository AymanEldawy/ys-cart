import React from "react";

// Styles
import "../styles/cart.scss";
// Images
import imgClose from "../images/cart/close.svg";
import { CartTotal } from "../components/CartTotal";
import { CartItem } from "../components/CartItem";

const Cart = ({ isCartOpen, cart, removeFromCart, total, closeCart }) => {
  return (
    <div className={`cart ${isCartOpen ? "show-cart" : ""}`}>
      <button className="cart-close" onClick={closeCart}>
        <img src={imgClose} alt="hide cart" />
      </button>
      <h2>My Cart</h2>
      <div className="cart-content">
        <h3>Cart Summary</h3>
        <div className="cart-products">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <CartTotal total={total} />
        <div className="cart-actions">
          <button>Review Cart</button>
          <button>Complete Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
