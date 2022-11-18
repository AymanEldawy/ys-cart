import React from "react";

// components
import { AppBar } from "../components/AppBar";
import { Backdrop } from "../components/Backdrop";
import { CategoriesList } from "../components/CategoriesList";
import { Footer } from "../components/Footer";
import { PrimaryNavbar } from "../components/PrimaryNavbar";
import Cart from "./Cart";

const Layout = ({
  children,
  isCartOpen,
  openCart,
  closeCart,
  cart,
  removeFromCart,
}) => {
  return (
    <>
      <Backdrop isCartOpen={isCartOpen} closeCart={closeCart} />
      <AppBar />
      <PrimaryNavbar openCart={openCart} cartLen={cart.length} />
      <CategoriesList />
      {children}
      <Cart
        cart={cart}
        closeCart={closeCart}
        isCartOpen={isCartOpen}
        removeFromCart={removeFromCart}
      />
      <Footer />
    </>
  );
};

export default Layout;
