import React from 'react';

const Eye: React.FC<React.SVGAttributes<SVGSVGElement>> = ({ ...rest }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.84424 8.99997C2.79994 5.95716 5.64266 3.75 9.00088 3.75C12.3591 3.75 15.2018 5.95719 16.1575 9.00003C15.2018 12.0428 12.3591 14.25 9.00089 14.25C5.64265 14.25 2.79993 12.0428 1.84424 8.99997ZM9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
        fill="#127C12"
      />
      <path
        d="M11.2501 9C11.2501 10.2426 10.2427 11.25 9.00006 11.25C7.75742 11.25 6.75006 10.2426 6.75006 9C6.75006 7.75736 7.75742 6.75 9.00006 6.75C10.2427 6.75 11.2501 7.75736 11.2501 9Z"
        stroke="#127C12"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.00039 3.75C5.64217 3.75 2.79946 5.95716 1.84375 8.99997C2.79944 12.0428 5.64217 14.25 9.00041 14.25C12.3586 14.25 15.2013 12.0428 16.157 9.00003C15.2014 5.95719 12.3586 3.75 9.00039 3.75Z"
        stroke="#127C12"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Eye;
