'use client';
import { cn } from '@/utils/cn';
import { Stack, StackProps } from '@mui/material';
import React from 'react';

interface PopupProps extends StackProps {
  children: React.ReactNode;
  className?: string;
  status: boolean;
}

const PopUp = ({ children, className, status, ...rest }: PopupProps) => {
  return (
    <Stack
      rowGap={1}
      className={cn(
        'absolute left-0 top-12 w-full rounded bg-white py-2 drop-shadow-md duration-100 ease-in',
        status ? 'visible opacity-100' : 'collapse opacity-0',
        className
      )}
      {...rest}
    >
      {children}
    </Stack>
  );
};

export default PopUp;
