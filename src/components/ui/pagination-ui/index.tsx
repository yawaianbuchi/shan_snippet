import { DOTS } from '@/hooks/usePaginate';
import { useSizer } from '@/hooks/useSizer';
import LeftIcon from '@/iconejs/left-icon';
import RightIcon from '@/iconejs/right-icon';
import React, { useEffect, useRef, useState } from 'react';
import { MagicTabSelect } from 'react-magic-motion';
const PaginationUi = ({
  currentPage,
  goToNextPage,
  goToPreviousPage,
  changePage,
  paginationRange,
  total,
  setRecordPerPage,
}: any) => {
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
      <div className="flex flex-row justify-between items-center h-[35px]   bg-white">
        <div className="px-4 border h-full overflow-hidden rounded-md">
          <div className="flex  h-full justify-center items-center  space-x-[10px]">
            <div className="" onClick={handlePrevious}>
              {<LeftIcon />}
            </div>
            {paginationRange &&
              paginationRange.length > 0 &&
              paginationRange?.map((item: any, index: React.Key) => {
                if (item === DOTS) {
                  return (
                    <button key={index} className={` mt-[-9px]`}>
                      &#8230;
                    </button>
                  );
                }
                return (
                  <div
                    key={index}
                    className={`cursor-pointer w-[20px]    text-[12px] relative  rounded-md px-4 flex items-center justify-center`}
                    onClick={changePage}
                  >
                    {item == currentPage && (
                      <MagicTabSelect id="pillTabs" transition={{ type: 'spring', bounce: 0.35 }}>
                        <span
                          style={{
                            borderRadius: '6px',
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
                      className={`${
                        item === currentPage ? 'text-white delay-150' : 'text-black'
                      }  inline-flex h-[35px] items-center relative z-[2] transition-all duration-200 ease-in-out`}
                    >
                      {item}
                    </span>
                  </div>
                );
              })}
            <div onClick={handleNext}>{<RightIcon />}</div>
          </div>
        </div>
        <div className="flex items-center  gap-3">
          <span className="text-xs">Show</span>
          <div
            ref={ref}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="text-[12px] border-2 px-2 py-1  relative  rounded-lg w-[55px] "
          >
            <p className="text-center">{page}</p>

            <div
              style={{ width: size?.width }}
              className={`absolute transition-all duration-300 ease-in-out  top-[26px] rounded left-0 shadow-lg z-[30] bg-white
                ${isOpen ? 'opacity-100 translate-y-0 z-10 ' : 'opacity-0 translate-y-6 z-[-10]'}
                `}
            >
              {list.map((item) => (
                <p
                  onClick={() => handleSelect(item)}
                  key={item}
                  className="px-5 py-1 flex items-center transition-all duration-100 ease-linear hover:bg-[#eaeaea] "
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <span className="text-sm">{total || '245,348'}</span>
        </div>
      </div>
    </div>
  );
};

export default PaginationUi;
