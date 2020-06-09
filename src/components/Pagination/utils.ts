import {
  ELLIPSIS,
  PREVIOUS,
  NEXT,
  FIRST,
  LAST,
} from "src/constants/pagination";

export const generatePaginationArray = (
  currentPage: string,
  totalPages: number,
  siblingRange: number = 1,
  showPreviousAndNext: boolean = true,
  showFirstAndLast: boolean = true,
  showEllipsis: boolean = true
) => {
  // tslint:disable-next-line: no-magic-numbers
  const siblingArray: number[] = Array(2 * siblingRange + 1)
    .fill(0)
    .map((_, i: number) => Number(currentPage) - siblingRange + i);
  const showingNumbers = [...new Set([1, ...siblingArray, totalPages])];
  let result: string[] = [];
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

export const mapTextToPage = (
  text: string,
  currentPage: string,
  totalPages: number
): string => {
  switch (text) {
    case PREVIOUS:
      return String(Number(currentPage) - 1);
    case NEXT:
      return String(Number(currentPage) + 1);
    case FIRST:
      return String(1);
    case LAST:
      return String(totalPages);
    default:
      return text;
  }
};
