import React from 'react'

const LeftIcon:React.FC<React.SVGProps<SVGSVGElement>> = ({...rest}) => {
  return (
    <svg
    {...rest}
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 4L6 8L10 12"
      stroke="#4E4E4E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  
  
  )
}

export default LeftIcon
