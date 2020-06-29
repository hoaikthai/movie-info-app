import React, { useState } from "react";
import { useHistory } from "react-router";

import "./Search.scss";

interface ISearchProps {
  defaultValue?: string | null;
}

const Search = ({ defaultValue }: ISearchProps) => {
  const [searchValue, setSearchValue] = useState(defaultValue ?? "");
  const history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push({ pathname: "/search", search: `?query=${searchValue}&page=1` });
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
