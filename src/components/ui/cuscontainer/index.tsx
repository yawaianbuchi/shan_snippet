import React, { PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

interface CusContainerI {
  children: React.ReactNode;
  className?: string;
}

function CusContainer({ children, className }: CusContainerI) {
  return <div className={cn('rounded-lg bg-white p-4', className)}>{children}</div>;
}

export default CusContainer;
