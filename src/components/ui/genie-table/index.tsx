'use client';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { IpaginateType } from '@/hooks/usePaginate';
import SmallLoader from '../small-loader';
import PaginationUi from '../pagination-ui';
import Pagination from '../pagination';
import ArrowDown from '@/iconejs/arrow-down';
import React from 'react';


export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export type PaginateProps = Omit<IpaginateType, 'getPaginatedData' | 'recordPerPage'>;

type NonUndefined<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

type Key = 'column' | 'order';

type KeyClassOrder =
  | 'tdheadClass'
  | 'rowHeadClass'
  | 'tableContainerClass'
  | 'tableSelfClass'
  | 'wrapperTableClass'
  | 'loadingContainerClass'
  | 'loadingClass'
  | 'NotfoundContainerClass'
  | 'headInnerDivClass';

export type OrderType = Record<Key, string>;

type TypeOrderEachClass = Partial<Record<KeyClassOrder, string>>;

type HeaderType = {
  columns: string[] | undefined;
  sorting: OrderType | undefined;
  className: TypeOrderEachClass | undefined;
  sortColumn: boolean;
  sortTable: Dispatch<SetStateAction<OrderType>>;
};

type HeaderProps = HeaderType;

type GenieTableType<H extends string, C extends React.ReactNode[] | ReactNode | JSX.Element> = {
  header: H[];
  children: C;
  paginate: boolean;
  sortColumn: boolean;
  total: number;
  className: TypeOrderEachClass | undefined;
  loading: boolean;
  sorting: OrderType;
  setSorting: Dispatch<SetStateAction<OrderType>>;
  currentPage: PaginateProps['currentPage'];
  goToNextPage: PaginateProps['goToNextPage'];
  goToPreviousPage: PaginateProps['goToPreviousPage'];
  changePage: PaginateProps['changePage'];
  paginationRange: PaginateProps['paginationRange'];
  pageNumbersCount: PaginateProps['pageNumbersCount'];
  setRecordPerPage: PaginateProps['setRecordPerPage'];
  data: Array<any>;
  bodyText: string;
  show: string;
};

type GenieTableProps = GenieTableType<string, React.ReactNode[] | ReactNode | JSX.Element>;

type HeaderCellProps = {
  sorting: OrderType | undefined;
  column: string;
  sortTable: Dispatch<SetStateAction<OrderType>>;
  className: TypeOrderEachClass | undefined;
  sortColumn: boolean;
  indexNumber: number;
  columns: string[];
};

const HeaderCell: React.FC<HeaderCellProps> = ({
  sorting,
  column,
  sortTable,
  className,
  sortColumn,
  indexNumber,
  columns,
}) => {
  const isDescSorting = sorting?.column === column && sorting?.order === 'desc';

  return (
    <td
      className={cn(
        `font-semibold whitespace-nowrap min-w-[90px] px-4 text-[13px]  text-[#127C12]`,
        `${className?.tdheadClass} ${indexNumber === 0 && 'rounded-tl-lg rounded-bl-lg'} ${
          indexNumber === columns.length - 1 && 'rounded-tr-lg rounded-br-lg'
        }`
      )}
      key={column}
      onClick={() => {
        if (isDescSorting) {
          sortTable({ column, order: 'asc' } as OrderType);
        } else {
          sortTable({ column, order: 'desc' } as OrderType);
        }
      }}
    >
      <div className={cn('flex items-center justify-between', className?.headInnerDivClass)}>
        <p> {column}</p>
        {sortColumn && (
          <div className="w-full text-right opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
            <span className="inline-block ">
              <ArrowDown color="#127C12" />
            </span>

            <span
              className={`mr-2 inline-block transition-all ease-in-out duration-300 ${
                isDescSorting ? 'rotate-[180deg] opacity-100' : 'opacity-0'
              }`}
            >
              <ArrowDown color="#127C12" />
            </span>
          </div>
        )}
      </div>
    </td>
  );
};

const Header: React.FC<HeaderProps> = ({ columns, sorting, sortTable, className, sortColumn }) => {
  return (
    <thead className="capitalize">
      <tr
        className={cn(
          'text-center  h-[40px] text-[15px] font-[500] bg-[#E7F2E7] ',
          className?.rowHeadClass
        )}
      >
        {columns?.map((column, index: number) => (
          <HeaderCell
            columns={columns}
            indexNumber={index}
            sortColumn={sortColumn}
            key={index}
            sorting={sorting}
            sortTable={sortTable}
            column={column}
            className={className}
          />
        ))}
      </tr>
    </thead>
  );
};

const GenieTable: React.FC<NonUndefined<GenieTableProps>> = ({
  children,
  sorting,
  setSorting,
  header,
  paginate = false,
  sortColumn = false,
  className,
  show = 'default',
  changePage,
  currentPage,
  goToNextPage,
  goToPreviousPage,
  pageNumbersCount,
  paginationRange,
  setRecordPerPage,
  total = 0,
  bodyText = 'Not Found',
  data = [],
  loading = false,
}) => {
  return (
    <div
      className={cn(
        `w-full min-h-[300px] relative rounded-md  cursor-pointer ${paginate && 'pb-[70px]'}`,
        className?.tableContainerClass
      )}
    >
      <div
        className={cn(
          'w-full h-full overflow-x-scroll scrollbar-hide',
          className?.wrapperTableClass
        )}
      >
        {loading && (
          <div className="absolute bg-[#ffffff50]  top-0 left-0 w-full h-full z-[60] flex justify-center items-center">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[70]">
              <SmallLoader />
            </div>
            <div className="absolute top-0 left-0 w-full bg-[#ffffff50] z-50  blur-[20px] h-full  flex justify-center items-center" />
          </div>
        )}
        {data.length == 0 && !loading && (
          <div className="absolute top-0 left-0 w-full  h-full  flex justify-center items-center">
            <p>{bodyText}</p>
          </div>
        )}

        <table className={cn('w-full h-full ', className?.tableSelfClass)}>
          <Header
            className={className}
            columns={header}
            sortTable={setSorting}
            sorting={sorting}
            sortColumn={sortColumn}
          />
          {children}
        </table>
      </div>
      {paginate && (
        <>
          {show == 'default' && (
            <div className="absolute py-3 bottom-0 left-0 w-full">
              <PaginationUi
                currentPage={currentPage}
                total={total}
                goToNextPage={goToNextPage}
                goToPreviousPage={goToPreviousPage}
                changePage={changePage}
                paginationRange={paginationRange}
                pageNumbersCount={pageNumbersCount}
                setRecordPerPage={setRecordPerPage}
              />
            </div>
          )}
          {show == 'custom' && (
            <div className="absolute bottom-0 left-0 w-full">
              <Pagination
                currentPage={currentPage}
                total={total}
                goToNextPage={goToNextPage}
                goToPreviousPage={goToPreviousPage}
                changePage={changePage}
                paginationRange={paginationRange}
                pageNumbersCount={pageNumbersCount}
                setRecordPerPage={setRecordPerPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GenieTable;
