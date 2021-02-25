import React from "react";
import Search from "./components/Search/Search";

interface IProps {
  text?: string
}

const Header: React.FunctionComponent<IProps> = ({text}: IProps) => {
  const urlObject = new URL(window.location.href);
  const queryParams = urlObject.searchParams.get("query");
  return (
    <header className="App-header">
      <h2>{text}</h2>
      <Search defaultValue={queryParams} />
    </header>
  );
};

export default Header;
