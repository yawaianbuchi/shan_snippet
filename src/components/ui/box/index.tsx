import React from 'react';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode | JSX.Element;
  onClick?: () => void;
}

const Box: React.FC<BoxProps> = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};

export default Box;
