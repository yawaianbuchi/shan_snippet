import React from 'react';
import { cn } from '@/utils/cn';

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  className?: string;
  key: React.Key;
}

const Row = ({
  children,
  className,
  key,
}: {
  children?: React.ReactNode | React.ReactNode[] | JSX.Element;
} & RowProps) => {
  return (
    <tr key={key} className={cn('px-4 h-[66px] ', className)}>
      {children}
    </tr>
  );
};

export default Row;
