import React from "react";
import { withRouter } from "react-router-dom";
import * as qs from "query-string";

import "./PaginationItem.scss";

const PaginationItem = ({
  active = false,
  disabled = false,
  value,
  text,
  history,
  location,
}) => {
  let classes = ["PaginationItem"];
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
