import { cn } from '@/util';
import React from 'react';

interface BradeCurmbProps extends React.HTMLAttributes<HTMLDivElement> {
  list: {
    cump: string | JSX.Element | React.ReactNode;
  }[];
  active?: number;
  className?: string;
  classNameContainer?: string;
}

const BradeCurmb: React.FC<BradeCurmbProps> = ({ list, active, classNameContainer , className }) => {
  return (
    <div className={cn('flex items-center gap-2', classNameContainer)}>
      {list?.map((item, index: number) => (
        <span
          key={index}
          className={cn(`font-semibold text-gray-500 ${active === index && 'text-black'}`,className)}
        >
          {item.cump}
        </span>
      ))}
    </div>
  );
};

export default BradeCurmb;
