import React from "react";
import "./SearchBar.scss";
import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <CiSearch className="search-icon"/>
      <input type="text" placeholder="Search something" />
    </div>
  );
};

export default SearchBar;
