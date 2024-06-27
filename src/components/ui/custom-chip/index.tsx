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
        `${type == 'success' ? 'bg-[#127C12]' : 'bg-[#D70000]'} inline-flex items-center justify-center rounded-full px-3 pb-[1px] pt-[2px] text-[13px] text-white`,
        className
      )}
    >
      {children}
    </span>
  );
};

export default ChipUi;
