import { ELLIPSIS, PREVIOUS, NEXT, FIRST, LAST } from "constants/pagination";

export const generatePaginationArray = ({
  currentPage,
  totalPages,
  siblingRange = 1,
  showPreviousAndNext = true,
  showFirstAndLast = true,
  showEllipsis = true,
}) => {
  const siblingArray = Array(2 * siblingRange + 1)
    .fill()
    .map((_, i) => currentPage - siblingRange + i);
  const showingNumbers = [...new Set([1, ...siblingArray, totalPages])];
  let result = [];
  for (let i = 1; i <= totalPages; i++) {
    if (showingNumbers.includes(i)) {
      result.push(i.toString());
    } else if (showEllipsis) {
      if (result[result.length - 1] === ELLIPSIS) {
        continue;
      } else {
        result.push(ELLIPSIS);
      }
    }
  }
  if (showPreviousAndNext) {
    result = [PREVIOUS, ...result, NEXT];
  }
  if (showFirstAndLast) {
    result = [FIRST, ...result, LAST];
  }
  return result;
};

export const mapTextToPage = ({ text, currentPage, totalPages }) => {
  switch (text) {
    case PREVIOUS:
      return String(Number(currentPage) - 1);
    case NEXT:
      return String(Number(currentPage) + 1);
    case FIRST:
      return String(1);
    case LAST:
      return totalPages;
    default:
      return;
  }
};
