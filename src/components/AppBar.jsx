import React from "react";
// components
import { UpperBarMenu } from "./UpperBarMenu";
// style
import "../styles/upperbar.scss";

export const AppBar = () => {
  return (
    <div className="upperbar">
      <div className="container">
        <div className="upperbar-brand">
          <button className="upperbar-menu-icon">
            <img src="images/bars.svg" alt="" />
          </button>
          <img src="images/brand.svg" alt="yeshtary logo" />
        </div>
        <div className="upperbar-offer">
          <img src="images/arrow-left.svg" alt="arrow-left" />
          Valentine’s Day Offers! Buy Two Get One Free{" "}
          <span className="dummy-link">Shop Now</span>{" "}
          <img src="images/arrow-right.svg" alt="arrow-right" />
        </div>
        <UpperBarMenu />
      </div>
    </div>
  );
};
