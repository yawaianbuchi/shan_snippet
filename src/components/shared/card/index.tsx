import React from 'react';
import { Paper as MCard, PaperProps } from '@mui/material';
import { cn } from '@/utils/cn';

interface ICardProps extends PaperProps {
  children: React.ReactNode;
  elevation?: PaperProps['elevation'];
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, ICardProps>(
  ({ children, elevation = 0, className, ...rest }, ref) => {
    return (
      <MCard
        {...rest}
        ref={ref}
        className={cn(
          'rounded-lg border border-gray bg-white p-2',
          !elevation && 'shadow',
          className
        )}
        elevation={elevation}
      >
        {children}
      </MCard>
    );
  }
);

Card.displayName = 'Card';

export default Card;
