import React from "react";
// Components
import { FooterBio } from "./FooterBio";
import { FooterLinks } from "./FooterLinks";
import { Newsletter } from "./Newsletter";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { Copyright } from "./Copyright";
// Styles
import "../styles/footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <FooterBio />
          <div className="useful-links">
            <Newsletter />
            <div className="footer-links">
              <FooterLinks />
              <SocialMediaLinks />
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};
