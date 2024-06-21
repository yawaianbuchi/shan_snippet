'use client';
import React from 'react';
import { Chip as MChip, ChipProps as MChipProps, styled, Theme } from '@mui/material';
import { cn } from '@/util';

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

const ChipStyled = styled(MChip)<ChipProps>(({ theme, type }) => ({
  ...getVariantStyles(type),
}));

const Chip = ({ className, ...props }: ChipProps) => {
  return (
    <ChipStyled
      {...props}
      className={cn('capitalize text-white font-medium h-6 w-[50px]', className)}
    />
  );
};

export default Chip;
