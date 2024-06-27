import React from 'react';

const Table = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return <table className={className}>{children}</table>;
};

export default Table;
