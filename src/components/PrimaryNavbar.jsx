import React from "react";

// Components
import { NavbarList } from "./NavbarList";
import { SearchBar } from "./SearchBar";
// Styles
import "../styles/navbar.scss";

export const PrimaryNavbar = ({ openCart, cartLen }) => {
  return (
    <div className="navbar">
      <div className="container">
        <SearchBar />
        <div className="navbar-brand">
          <img src="images/navbar-brand.svg" alt="Yeshtary brand" />
        </div>
        <NavbarList openCart={openCart} cartLen={cartLen} />
      </div>
    </div>
  );
};
