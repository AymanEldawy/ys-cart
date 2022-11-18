import React from "react";

export const NavbarList = ({ openCart, cartLen }) => {
  const listOfLinks = [
    { name: "Cart", icon: "images/cart-box.svg" },
    { name: "Wish List", icon: "images/wishlist.svg" },
    { name: "Login", icon: "images/login.svg" },
  ];
  return (
    <ul className="navbar-menu">
      {listOfLinks.map((item) => {
        return (
          <>
            {item.name === "Cart" ? (
              <li className="navbar-menu-item" key="cart" onClick={openCart}>
                <img src={item.icon} alt={item.name} />
                {item.name}
                <span className="cart-count">{cartLen}</span>
              </li>
            ) : (
              <li className="navbar-menu-item" key={item.name}>
                <img src={item.icon} alt={item.name} /> {item.name}
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
};
