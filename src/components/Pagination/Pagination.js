import React from "react";
import { withRouter } from "react-router-dom";
import * as qs from "query-string";

import { PREVIOUS, NEXT, FIRST, LAST } from "constants/pagination";
import { generatePaginationArray, mapTextToPage } from "./utils";
import PaginationItem from "./PaginationItem/PaginationItem";
import "./Pagination.scss";

const Pagination = ({ totalPages, location }) => {
  if (!totalPages) {
    return null;
  }

  const parsedParams = qs.parse(location.search);
  const currentPage = parsedParams.page;
  const paginationTextArray = generatePaginationArray({
    totalPages: totalPages,
    currentPage: currentPage,
  });

  return (
    <div className="Pagination">
      {paginationTextArray.map((text, id) => {
        let active = currentPage === text;
        let disabled =
          (currentPage === "1" && [PREVIOUS, FIRST].includes(text)) ||
          (currentPage === totalPages && [NEXT, LAST].includes(text));
        let value = text;
        if ([PREVIOUS, NEXT, FIRST, LAST].includes(text)) {
          value = mapTextToPage({
            text: text,
            currentPage: currentPage,
            totalPages: totalPages,
          });
        }
        return (
          <PaginationItem
            key={id}
            active={active}
            disabled={disabled}
            currentPage={currentPage}
            value={value}
            text={text}
          />
        );
      })}
    </div>
  );
};

export default withRouter(Pagination);
