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
  sortTable?: Dispatch<SetStateAction<OrderType>>;
};

type HeaderProps = HeaderType;

type GenieTableType<H extends string, C extends React.ReactNode[] | ReactNode | JSX.Element> = {
  header: H[];
  children?: C;
  paginate?: boolean;
  sortColumn?: boolean;
  total?: number;
  className?: TypeOrderEachClass | undefined;
  loading?: boolean;
  sorting?: OrderType;
  setSorting?: Dispatch<SetStateAction<OrderType>>;
  currentPage: PaginateProps['currentPage'];
  goToNextPage: PaginateProps['goToNextPage'];
  goToPreviousPage: PaginateProps['goToPreviousPage'];
  changePage: PaginateProps['changePage'];
  paginationRange: PaginateProps['paginationRange'];
  pageNumbersCount: PaginateProps['pageNumbersCount'];
  setRecordPerPage: PaginateProps['setRecordPerPage'];
  data?: Array<unknown>;
  bodyText?: string;
  show?: string;
};

type GenieTableProps = GenieTableType<string, React.ReactNode[] | ReactNode | JSX.Element>;

type HeaderCellProps = {
  sorting: OrderType | undefined;
  column: string;
  sortTable: Dispatch<SetStateAction<OrderType>> | undefined;
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
}: HeaderCellProps) => {
  const isDescSorting = sorting?.column === column && sorting?.order === 'desc';

  return (
    <td
      className={cn(
        `min-w-[90px] whitespace-nowrap px-4 text-[13px] font-semibold text-[#127C12]`,
        `${className?.tdheadClass} ${indexNumber === 0 && 'rounded-bl-lg rounded-tl-lg'} ${
          indexNumber === columns!.length - 1 && 'rounded-br-lg rounded-tr-lg'
        }`
      )}
      key={column}
      onClick={() => {
        if (isDescSorting) {
          sortTable!({ column, order: 'asc' } as OrderType);
        } else {
          sortTable!({ column, order: 'desc' } as OrderType);
        }
      }}
    >
      <div className={cn('flex items-center justify-between', className?.headInnerDivClass)}>
        <p> {column}</p>
        {sortColumn && (
          <div className="w-full text-right opacity-0 transition-all duration-300 ease-in-out hover:opacity-100">
            <span className="inline-block">
              <ArrowDown color="#127C12" />
            </span>

            <span
              className={`mr-2 inline-block transition-all duration-300 ease-in-out ${
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

const Header: React.FC<HeaderProps> = ({
  columns,
  sorting,
  sortTable,
  className,
  sortColumn,
}: HeaderProps) => {
  return (
    <thead className="capitalize">
      <tr
        className={cn(
          'h-[40px] bg-[#E7F2E7] text-center text-[15px] font-[500]',
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

const GenieTable: React.FC<Partial<NonUndefined<GenieTableProps>>> = ({
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
}:any) => {
  return (
    <div
      className={cn(
        `relative min-h-[300px] w-full cursor-pointer rounded-md ${paginate && 'pb-[70px]'}`,
        className?.tableContainerClass
      )}
    >
      <div
        className={cn(
          'h-full w-full overflow-x-scroll scrollbar-hide',
          className?.wrapperTableClass
        )}
      >
        {loading && (
          <div className="absolute left-0 top-0 z-[60] flex h-full w-full items-center justify-center bg-[#ffffff50]">
            <div className="absolute left-[50%] top-[50%] z-[70] translate-x-[-50%] translate-y-[-50%]">
              <SmallLoader />
            </div>
            <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-[#ffffff50] blur-[20px]" />
          </div>
        )}
        {data.length == 0 && !loading && (
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
            <p>{bodyText}</p>
          </div>
        )}

        <table className={cn('h-full w-full', className?.tableSelfClass)}>
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
            <div className="absolute bottom-0 left-0 w-full py-3">
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
