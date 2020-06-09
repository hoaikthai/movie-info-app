import React from "react";

interface IProps {
  text?: string
}

const Header: React.FunctionComponent<IProps> = ({text}: IProps) => {
  return (
    <header className="App-header">
      <h2>{text}</h2>
    </header>
  );
};

export default Header;
