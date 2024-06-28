import { DOTS } from '@/hooks/usePaginate';
import { useSizer } from '@/hooks/useSizer';
import LeftIcon from '@/iconejs/left-icon';
import RightIcon from '@/iconejs/right-icon';
import React, { useEffect, useRef, useState } from 'react';
import { MagicTabSelect } from 'react-magic-motion';
import { PaginateProps } from '../genie-table';

const PaginationUi = ({
  currentPage,
  goToNextPage,
  goToPreviousPage,
  changePage,
  paginationRange,
  total,
  setRecordPerPage,
}: PaginateProps & {
  total: number | string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(7);
  const ref = useRef(null!);

  const size = useSizer({
    ref: ref,
    box: 'border-box',
  });
  const itemsRef = useRef<HTMLSpanElement>(null!);

  useEffect(() => {
    if (!itemsRef.current) return;
    const cleanUp = setTimeout(() => {
      itemsRef.current!.style.color = 'white';
      itemsRef.current!.style.transition = 'all 0.3s ease';
    }, 140);
    return () => clearTimeout(cleanUp);
  }, [currentPage]);

  const handleSelect = (item: number) => {
    setRecordPerPage(item);
    setPage(item);
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const handlePrevious = () => {
    goToPreviousPage();
  };

  const handleNext = () => {
    goToNextPage();
  };

  const list = [5, 7, 10, 20];
  return (
    <div className="">
      <div className="flex h-[35px] flex-row items-center justify-between bg-white">
        <div className="h-full overflow-hidden rounded-md border px-4">
          <div className="flex h-full items-center justify-center space-x-[10px]">
            <div className="" onClick={handlePrevious}>
              {<LeftIcon />}
            </div>
            {paginationRange &&
              paginationRange.length > 0 &&
              paginationRange?.map((item: any, index: React.Key) => {
                if (item === DOTS) {
                  return (
                    <button key={index} className={`mt-[-9px]`}>
                      &#8230;
                    </button>
                  );
                }
                return (
                  <div
                    key={index}
                    className={`relative flex w-[20px] cursor-pointer items-center justify-center rounded-md px-4 text-[12px]`}
                  >
                    {item == currentPage && (
                      <MagicTabSelect id="pillTabs" transition={{ type: 'spring', bounce: 0.35 }}>
                        <span
                          style={{
                            borderRadius: '8px',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 1,
                            backgroundColor: '#127C12',
                          }}
                        />
                      </MagicTabSelect>
                    )}
                    <span
                      onClick={changePage}
                      className={`${
                        item === currentPage ? 'text-white delay-150' : 'text-black'
                      } relative z-[2] inline-flex h-[40px] items-center justify-center px-4 transition-all duration-200 ease-in-out`}
                    >
                      {item}
                    </span>
                  </div>
                );
              })}
            <div onClick={handleNext}>{<RightIcon />}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs">Show</span>
          <div className="relative">
            <div
              ref={ref}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className="w-[55px] rounded-lg border-2 px-2 py-1 text-[12px]"
            >
              <p className="text-center">{page}</p>
            </div>
            <div
              style={{ width: size?.width }}
              className={`absolute left-0 top-[26px] z-[30] rounded bg-white text-[12px] shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'z-10 translate-y-0 opacity-100' : 'z-[-10] translate-y-6 opacity-0'} `}
            >
              {list.map((item) => (
                <p
                  onClick={() => handleSelect(item)}
                  key={item}
                  className="flex items-center px-5 py-1 transition-all duration-100 ease-linear hover:bg-[#eaeaea]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <span className="text-sm">of {total || '245,348'}</span>
        </div>
      </div>
    </div>
  );
};

export default PaginationUi;
