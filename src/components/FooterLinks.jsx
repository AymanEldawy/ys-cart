import React from "react";

export const FooterLinks = () => {
  const links = [
    "About Us",
    "Contact Us",
    "Track Order",
    "Terms & Conditions",
    "Privacy Policy",
    "Sell With Us",
    "Shipping And Returns",
    "",
  ];
  return (
    <div className="footer-links-page">
      {links.map((link) => (
        <a href={link} key={link}>
          {link}
        </a>
      ))}
    </div>
  );
};
