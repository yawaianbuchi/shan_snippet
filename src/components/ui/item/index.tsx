import { cn } from '@/util';
import React from 'react';

interface itemsProps extends React.HTMLAttributes<HTMLTableColElement> {
  className?: string;
}

const Item = ({
  children,
  className,
}: {
  children?: React.ReactNode | React.ReactNode[] | JSX.Element;
} & itemsProps) => {
  return <td className={cn('px-4 text-[13px] capitalize', className)}>{children}</td>;
};

export default Item;
