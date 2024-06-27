import { cn } from '@/utils/cn';
import React from 'react';

interface TCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const TCard = ({
  children,
  className,
}: { children: React.ReactNode | React.ReactNode[] | JSX.Element } & TCardProps) => {
  return (
    <div
      style={{ boxShadow: '0 0 6px -1px rgba(0,0,0,0.12)' }}
      className={cn('w-full rounded-lg bg-white px-4 pb-2 pt-5', className)}
    >
      {children}
    </div>
  );
};

export default TCard;
