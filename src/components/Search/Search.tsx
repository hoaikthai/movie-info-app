import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router";

import "./Search.scss";
import useDebounce from "src/hooks/useDebounce";

interface ISearchProps {
  defaultValue?: string | null;
}

const Search = ({ defaultValue }: ISearchProps) => {
  const SEARCH_DELAY = 500;
  const history = useHistory();
  const [searchValue, setSearchValue] = useState(defaultValue ?? "");
  const debouncedSearchValue = useDebounce(searchValue, SEARCH_DELAY);

  const updateParams = useCallback(
    (value: string) => {
      if (value) {
        history.push({ pathname: "/search", search: `?query=${value}&page=1` });
      } else {
        history.push({ pathname: "/" });
      }
    },
    [history]
  );

  useEffect(() => {
    updateParams(debouncedSearchValue);
  }, [debouncedSearchValue, updateParams]);

  return (
    <div className="Search">
      <form className="Search__Form">
        <input
          type="text"
          className="Search__Field"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default Search;
