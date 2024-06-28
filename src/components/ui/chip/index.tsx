'use client';
import React from 'react';
import { Chip as MChip, ChipProps as MChipProps, styled } from '@mui/material';
import { cn } from '@/utils/cn';

type Props = MChipProps;

interface ChipProps extends Props {
  className?: string;
  type: 'error' | 'success';
}

const getVariantStyles = (type: ChipProps['type']) => {
  switch (type) {
    case 'success':
      return {
        backgroundColor: '#127C12',
        color: '#FFFFFF',
      };
    case 'error':
      return {
        backgroundColor: '#D70000',
        color: '#FFFFFF',
      };
    default:
      return {
        backgroundColor: '#EFF8FF',
        color: '#197CC0',
      };
  }
};

const ChipStyled = styled(MChip)<ChipProps>(({ type }) => ({
  ...getVariantStyles(type),
}));

const Chip = ({ className, ...props }: ChipProps) => {
  return (
    <ChipStyled
      {...props}
      className={cn('h-6 w-[50px] min-w-fit font-medium capitalize text-white', className)}
    />
  );
};

export default Chip;
