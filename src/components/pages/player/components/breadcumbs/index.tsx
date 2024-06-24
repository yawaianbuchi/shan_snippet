import { cn } from '@/util';
import React from 'react';

interface BradeCurmbProps extends React.HTMLAttributes<HTMLDivElement> {
  list?: React.ReactNode[] | string[];
  active?: number;
  className?:string;
}

const BradeCurmb: React.FC<BradeCurmbProps> = ({ list, active }) => {
  return (
    <div className="flex items-center gap-2">
      {list?.map((item, index: number) => (
        <span key={index} className={cn(`font-semibold text-gray-400 ${active === index && "text-black"}`)}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default BradeCurmb;
