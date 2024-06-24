import React from 'react';

const Block: React.FC<React.SVGAttributes<SVGSVGElement>> = ({ ...rest }) => {
  return (
    <svg
      {...rest}
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.14"
        d="M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9Z"
        fill="#D70000"
      />
      <path
        d="M13.773 13.773C14.9945 12.5515 15.75 10.864 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C7.13604 2.25 5.44854 3.00552 4.22703 4.22703M13.773 13.773C12.5515 14.9945 10.864 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 7.13604 3.00552 5.44854 4.22703 4.22703M13.773 13.773L4.22703 4.22703"
        stroke="#D70000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Block;
