import React from "react";

export const SocialMediaLinks = () => {
  const linksList = [
    { link: "#Facebook", name: "/YESHTERY", image: "images/facebook.svg" },
    { link: "#Linked in", name: "/YESHTERY", image: "images/linkedin.svg" },
    { link: "#Instagram", name: "/YESHTERY", image: "images/instagram.svg" },
    { link: "#Twitter", name: "/YESHTERY", image: "images/twitter.svg" },
  ];
  return (
    <div className="social-media">
      {linksList.map((link) => (
        <a href={link.link} key={link.link}>
          <img src={link.image} alt={link.name} />
          {link.name}
        </a>
      ))}
    </div>
  );
};
