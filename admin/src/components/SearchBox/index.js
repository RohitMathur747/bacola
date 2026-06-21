import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  return (
    <>
      <div className="header-search" role="search">
        <span className="header-search-icon" aria-hidden="true">
          <FiSearch size={18} />
        </span>
        <input
          className="header-search-input"
          placeholder="Quick finding..."
          aria-label="Quick finding"
        />
      </div>
    </>
  );
};

export default SearchBox;
