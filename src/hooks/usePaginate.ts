import { useState, useMemo } from 'react';

const usePaginate = <T extends number | []>(item: T) => {
  //@ts-ignore
  const data: any = Array.isArray(item) ? item : [...Array(item).keys()];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [recordPerPage, setRecordPerPage] = useState<number>(7);
  const [siblingCount] = useState<number>(1);
  const [buttonCount] = useState<number>(3);
  let totalPageCount: number = Math.ceil(data.length / recordPerPage);
  //@ts-ignore
  let pageNumbersCount = [...Array(totalPageCount + 1).keys()].slice(1);

  function goToNextPage(): void {
    if (currentPage !== totalPageCount)
      setCurrentPage((page) => {
        let pageItem = page + 1;
        return pageItem;
      });
  }
  function goToPreviousPage(): void {
    if (currentPage !== 1)
      setCurrentPage((page) => {
        const pageItem = page - 1;
        return pageItem;
      });
  }

  function changePage(event: any): void {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = (): [] => {
    const startIndex = currentPage * recordPerPage - recordPerPage;

    const endIndex = startIndex + recordPerPage;
    console.log(startIndex, endIndex);
    return data.slice(startIndex, endIndex);
  };

  //   const getPaginationGroup = (): number[] => {
  //     let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;

  //     return new Array(pageLimit)
  //       .fill(undefined)
  //       .map((_, idx) => start + idx + 1);
  //   };
  const range = (start: any, end: any) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, index) => index + start);
  };
  const paginationRange = useMemo(() => {
    const totalPageNumbers = buttonCount + 2 + siblingCount;
    if (totalPageNumbers >= totalPageCount) {
      range(1, totalPageCount);
      return pageNumbersCount;
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex <= totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);

      return [firstPageIndex, DOTS, ...rightRange];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalPageCount, siblingCount, currentPage, buttonCount]);

  return {
    currentPage,
    recordPerPage,
    goToNextPage,
    goToPreviousPage,
    changePage,
    getPaginatedData,
    paginationRange,
    pageNumbersCount,
    setRecordPerPage,
  };
};

export const DOTS = '...';
export type IpaginateType = ReturnType<typeof usePaginate>;
export default usePaginate;
