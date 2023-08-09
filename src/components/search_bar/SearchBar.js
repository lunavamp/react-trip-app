import React from "react";
import "./SearchBar.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar-container">
      <img src="/img/search-icon.svg" alt="search icon" />
      <input
        className="search-bar"
        type="text"
        placeholder="Search your trip"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
