import { cn } from '@/utils/cn';
import React from 'react';

const PhillButton = ({
  children,
  type = 'success',
  className,
  onClick,
}: {
  className?: string;
  type?: 'success' | 'error';
  children?: JSX.Element | React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const generateClass = () => {
    switch (type) {
      case 'success':
        return 'bg-[#E7F2E7] text-[#127C12]';
      case 'error':
        return 'bg-[#FBE6E6] text-[#D70000]';
    }
  };

  return (
    <button onClick={onClick} className={cn(`${generateClass()} px-3 py-1 rounded-lg`, className)}>
      {children}
    </button>
  );
};

export default PhillButton;
