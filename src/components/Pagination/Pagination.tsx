import React from "react";

import { PREVIOUS, NEXT, FIRST, LAST } from "src/constants/pagination";
import { generatePaginationArray, mapTextToPage } from "./utils";
import PaginationItem from "./PaginationItem/PaginationItem";
import "./Pagination.scss";

interface IPaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: IPaginationProps) => {
  if (!totalPages) {
    return null;
  }

  const urlObject: URL = new URL(window.location.href);
  const currentPage: string = urlObject.searchParams.get("page") ?? "1";
  const paginationTextArray: string[] = generatePaginationArray(currentPage, totalPages);

  return (
    <div className="Pagination">
      {paginationTextArray.map((text, id) => {
        const active: boolean = currentPage === text;
        const disabled: boolean =
          (currentPage === "1" && [PREVIOUS, FIRST].includes(text)) ||
          (currentPage === String(totalPages) && [NEXT, LAST].includes(text));
        const value: string = mapTextToPage(text, currentPage, totalPages);
        return (
          <PaginationItem
            key={id}
            active={active}
            disabled={disabled}
            value={value}
            text={text}
          />
        );
      })}
    </div>
  );
};

export default Pagination;
