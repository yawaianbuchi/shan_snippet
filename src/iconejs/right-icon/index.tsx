import React from 'react'

const RightIcon:React.FC<React.SVGProps<SVGSVGElement>> = ({...rest}) => {
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
      d="M6 4L10 8L6 12"
      stroke="#4E4E4E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  
  )
}

export default RightIcon
