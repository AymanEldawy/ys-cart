import React from "react";

export const Newsletter = () => {
  return (
    <form className="news-letter">
      <input type="email" placeholder="Enter your email" />
      <button>
        Subscribe
        <img src="images/sent.svg" alt="subscribe button" />
      </button>
    </form>
  );
};
