import React from "react";

export const SearchBar = () => {
  return (
    <form className="navbar-form">
      <img src="images/search.svg" alt="search" />
      <input type="text" placeholder="Search" />
    </form>
  );
};
