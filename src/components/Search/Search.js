import React, { useState } from "react";

import "./Search.scss";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.search(searchValue);
  };

  return (
    <div className="Search">
      <form className="Search__Form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="Search__Field"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button
          className="Search__Button Search__Button--primary Search__Button--inside"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
