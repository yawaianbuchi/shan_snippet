import {
    Dispatch,
    ReactNode,
    SetStateAction,
    useMemo,
    useRef,
    useState,
  } from "react";

  import { ClassValue, clsx } from 'clsx'
  import { twMerge } from 'tailwind-merge'
  
  import usePaginate from "@/hooks/usePaginate";
  import { IpaginateType } from "@/hooks/usePaginate";
  import SmallLoader from "../ui/small-loader";
  import { useSizer } from "@/hooks/useSizer";
  import PaginationUi from "../ui/pagination-ui";
  import Pagination from "../ui/pagination";
import ArrowDown from "@/iconejs/arrow-down";
  
  export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
  }

  type PaginateProps = Omit<IpaginateType, "getPaginatedData" | "recordPerPage">;
  
  type NonUndefined<T> = {
    [P in keyof T]: NonNullable<T[P]>;
  };
  
  type Key = "column" | "order";
  
  type KeyClassOrder =
    | "tdheadClass"
    | "rowHeadClass"
    | "tableContainerClass"
    | "tableSelfClass"
    | "wrapperTableClass"
    | "loadingContainerClass"
    | "loadingClass"
    | "NotfoundContainerClass"
    | "headInnerDivClass";
  
  type OrderType = Record<Key, string>;
  
  type TypeOrderEachClass = Partial<Record<KeyClassOrder, string>>;
  
  type HeaderType = {
    columns: string[] | undefined;
    sorting: OrderType;
    className: TypeOrderEachClass | undefined;
    sortColumn: boolean;
    sortTable: Dispatch<SetStateAction<OrderType>>;
  };
  
  type HeaderProps = HeaderType;
  
  type GenieTableType<
    H extends string,
    C extends React.ReactNode[] | ReactNode | JSX.Element
  > = {
    header: H[];
    children: C;
    paginate: boolean;
    sortColumn: boolean;
    total: number;
    className: TypeOrderEachClass | undefined;
    loading: boolean;
    sorting: OrderType;
    setSorting: Dispatch<SetStateAction<OrderType>>;
    currentPage: PaginateProps["currentPage"];
    goToNextPage: PaginateProps["goToNextPage"];
    goToPreviousPage: PaginateProps["goToPreviousPage"];
    changePage: PaginateProps["changePage"];
    paginationRange: PaginateProps["paginationRange"];
    pageNumbersCount: PaginateProps["pageNumbersCount"];
    setRecordPerPage: PaginateProps["setRecordPerPage"];
    data: Array<any>;
    bodyText: string
    show: string
  };
  
  type GenieTableProps = GenieTableType<
    string,
    React.ReactNode[] | ReactNode | JSX.Element
  >;
  
  type HeaderCellProps = {
    sorting: OrderType;
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
    const isDescSorting = sorting?.column === column && sorting?.order === "desc";
  
    return (
      <td
        className={cn(
          `font-[500] min-w-[90px] px-4  text-[#127C12]`,
          `${className?.tdheadClass} ${indexNumber === 0 && "rounded-tl-lg rounded-bl-lg"
          } ${indexNumber === columns.length - 1 && "rounded-tr-lg rounded-br-lg"
          }`
        )}
        key={column}
        onClick={() => {
          if (isDescSorting) {
            sortTable({ column, order: "asc" });
          } else {
            sortTable({ column, order: "desc" });
          }
        }}
      >
        <div
          className={cn(
            "flex items-center justify-between",
            className?.headInnerDivClass
          )}
        >
          <p> {column}</p>
          {sortColumn && (
            <div className="w-full text-right opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
              <span className="inline-block "><ArrowDown color="#127C12" /></span>
  
              <span
                className={`mr-2 inline-block transition-all ease-in-out duration-300 ${isDescSorting ? "rotate-[180deg] opacity-100" : "opacity-0"
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
  }) => {
    return (
      <thead className="capitalize">
        <tr
          className={cn(
            "text-center  h-[40px] text-[15px] font-[500] bg-[#E7F2E7] ",
            className?.rowHeadClass
          )}
        >
          {columns?.map((column, index: number) => (
            <HeaderCell
              columns={columns}
              indexNumber={index}
              sortColumn={sortColumn}
              key={column}
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
    show = "default",
    changePage,
    currentPage,
    goToNextPage,
    goToPreviousPage,
    pageNumbersCount,
    paginationRange,
    setRecordPerPage,
    total = 0,
    bodyText = "Not Found",
    data = [],
    loading = false,
  }) => {
    const itemsRef = useRef<HTMLDivElement>(null!);
  
    const size = useSizer({
      ref: itemsRef,
      box: "border-box",
    });
  
    return (
      <div
        ref={itemsRef}
        className={cn(
          `w-full min-h-[300px] relative rounded-md  cursor-pointer ${paginate && "pb-[41px]"}`,
          className?.tableContainerClass
        )}
      >
        <div
          className={cn(
            "w-full h-full overflow-x-scroll no-scrollbar",
            className?.wrapperTableClass
          )}
        >
          {loading && (
            <div
              style={size}
              className="absolute bg-[#ffffff50]  top-0 left-0 w-full h-full z-[60] flex justify-center items-center"
            >
              <SmallLoader />
              <div className="absolute top-0 left-0 w-full bg-[#ffffff50] z-50  blur-[20px] h-full  flex justify-center items-center" />
            </div>
          )}
          {data.length == 0 && !loading && (
            <div
              style={size}
              className="absolute top-0 left-0 w-full  h-full  flex justify-center items-center"
            >
              <p>{bodyText}</p>
            </div>
          )}
  
          <table className={cn("w-full h-full", className?.tableSelfClass)}>
            <Header
              className={className}
              columns={header}
              //@ts-ignore
              sortTable={setSorting}
              //@ts-ignore
              sorting={sorting}
              sortColumn={sortColumn}
            />
            {children}
          </table>
  
        </div>
        {
          paginate && (
            <>
              {
                show == "default" &&
                <div className="absolute bottom-0 left-0 w-full">
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
  
  
              }
              {
                show == 'custom' && (
  
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
  
  
                )
              }
            </>
          )
        }
  
      </div>
    );
  };
  
  type Options = {
    data?: any;
    total?: number;
    api?: boolean;
  };
  
  export const useGeniTable = <T extends Partial<Options>>({
    total,
    data: factory = [],
    api = false,
  }: T) => {
    const [sorting, setSorting] = useState<OrderType>({
      column: "no",
      order: "asc",
    });
  
    const paginate = usePaginate(api ? total : factory);
  
    function generateFactory() {
      return api ? factory : paginate.getPaginatedData();
    }
  
    type factoryType = ReturnType<typeof generateFactory>;
    const value = api
      ? useMemo(() => {
        if (sorting.order === "desc") {
          const data = factory.reverse();
          return data;
        } else if (sorting.order == "asc") {
          const data = factory;
          return data;
        }
      }, [sorting.order, paginate.changePage, paginate.recordPerPage])
      : useMemo(() => {
        if (sorting.order === "desc") {
          const data = paginate.getPaginatedData().reverse();
          return data;
        } else if (sorting.order == "asc") {
          const data = paginate.getPaginatedData();
          return data;
        }
      }, [sorting.order, paginate.changePage, paginate.recordPerPage]);
    const controls = {
      changePage: paginate.changePage,
      currentPage: paginate.currentPage,
      goToNextPage: paginate.goToNextPage,
      goToPreviousPage: paginate.goToPreviousPage,
      pageNumbersCount: paginate.pageNumbersCount,
      paginationRange: paginate.paginationRange,
      setRecordPerPage: paginate.setRecordPerPage,
      sorting,
      setSorting,
    } as PaginateProps & {
      sorting: OrderType;
      setSorting: Dispatch<SetStateAction<OrderType>>;
      currentPage: number;
    };
    return {
      value,
      total,
      currentPage: paginate.currentPage,
      recordPerPage: paginate.recordPerPage,
      controls,
    } as {
      value: factoryType;
      total: number;
      controls: PaginateProps;
      currentPage: number;
      recordPerPage: number;
    };
  };
  
  export default GenieTable;
  