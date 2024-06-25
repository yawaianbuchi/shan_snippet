import { cn } from '@/utils/cn';
import React from 'react';

const ChipUi = ({
  children,
  type,
  className,
}: {
  children?: JSX.Element | React.ReactNode;
  type?: 'success' | 'error';
  className?: string;
}) => {
  return (
    <span
      className={cn(
        `${type == 'success' ? 'bg-[#127C12]' : 'bg-[#D70000]'}
         text-white inline-flex px-3 pt-[2px] pb-[1px] text-[13px] rounded-full items-center justify-center `,
        className
      )}
    >
      {children}
    </span>
  );
};

export default ChipUi;
