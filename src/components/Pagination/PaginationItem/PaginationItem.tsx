import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import * as qs from "query-string";

import "./PaginationItem.scss";

interface IPaginationItemProps extends RouteComponentProps {
  active: boolean;
  disabled: boolean;
  value: string;
  text: string;
}

const PaginationItem: React.FunctionComponent<IPaginationItemProps> = ({
  active = false,
  disabled = false,
  value,
  text,
  history,
  location,
}: IPaginationItemProps) => {
  const classes: string[] = ["PaginationItem"];
  if (active) {
    classes.push("PaginationItem--active");
  } else if (disabled) {
    classes.push("PaginationItem--disabled");
  }

  const handleClick = () => {
    if (active || disabled || text === "...") {
      return;
    }
    const parsedParams = qs.parse(location.search);
    const updatedParams = { ...parsedParams, page: value };
    history.push({ search: qs.stringify(updatedParams) });
  };

  return (
    <button className={classes.join(" ")} onClick={handleClick}>
      {text}
    </button>
  );
};

export default withRouter(PaginationItem);
