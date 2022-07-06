import { useState, useEffect } from "react";
import axio from "axios";

function Search({ onChange }) {
  // console.log(`${value} ${typeof value}`);
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search for Anime..."
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
}

export default Search;
