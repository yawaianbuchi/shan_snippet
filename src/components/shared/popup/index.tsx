'use client';
import { cn } from '@/util';
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
        'absolute w-full py-2 rounded bg-white drop-shadow-md top-12 left-0 duration-100 ease-in',
        status ? 'opacity-100 visible' : 'opacity-0 collapse',
        className
      )}
      {...rest}
    >
      {children}
    </Stack>
  );
};

export default PopUp;
