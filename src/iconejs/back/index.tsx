import React from 'react';

const Back: React.FC<React.SVGAttributes<SVGSVGElement>> = ({ ...rest }) => {
  return (
    <svg
      {...rest}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19M5 12L11 6M5 12L11 18"
        stroke="#4E4E4E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Back;
