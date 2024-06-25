'use client';
import { useState, useMemo, Dispatch, SetStateAction } from 'react';
import usePaginate from './usePaginate';
import { OrderType, PaginateProps } from '@/components/ui/genie-table';

type Options = {
  data?: any;
  total?: number;
  api?: boolean;
};

export const useGenieTable = <T extends Partial<Options>>({
  total,
  data: factory = [],
  api = false,
}: T) => {
  const [sorting, setSorting] = useState<OrderType>({
    column: 'no',
    order: 'asc',
  });

  const paginate = usePaginate(api ? total : factory);

  function generateFactory() {
    return api ? factory : paginate.getPaginatedData();
  }

  type factoryType = ReturnType<typeof generateFactory>;
  const value = useMemo(() => {
    if (api) {
      if (sorting.order === 'desc') {
        const data = factory.reverse();
        return data;
      } else if (sorting.order == 'asc') {
        const data = factory;
        return data;
      }
    } else {
      if (sorting.order === 'desc') {
        const data = paginate.getPaginatedData().reverse();
        return data;
      } else if (sorting.order == 'asc') {
        const data = paginate.getPaginatedData();
        return data;
      }
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

export default useGenieTable;
