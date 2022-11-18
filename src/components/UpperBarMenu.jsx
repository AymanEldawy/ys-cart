import React from "react";

export const UpperBarMenu = () => {
  const listOfLinks = [
    { name: "Contact Us", link: "#", icon: "images/phone.svg" },
    { name: "Track Order", link: "#", icon: "images/cart.svg" },
    { name: "Find A Store", link: "#", icon: "images/location.svg" },
  ];
  return (
    <ul className="upperbar-menu">
      {listOfLinks.map((item) => (
        <li className="upperbar-menu-item" key={item.name}>
          <img src={item.icon} alt={item.name} />
          <a href="#" className="upperbar-menu-link">{item.name}</a>
        </li>
      ))}
    </ul>
  );
};
