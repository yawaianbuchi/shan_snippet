import React from 'react'

const Locked:React.FC<React.SVGAttributes<SVGSVGElement>> = ({...rest}) => {
  return (
  <svg
    width={18}
    {...rest}
    height={18}
    viewBox="0 0 18 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.584 4.5C12.8124 2.7341 11.0503 1.5 9 1.5C6.23858 1.5 4 3.73858 4 6.5V8.52878M9 13V15M4 8.52878C4.47142 8.5 5.05259 8.5 5.8 8.5H12.2C13.8802 8.5 14.7202 8.5 15.362 8.82698C15.9265 9.1146 16.3854 9.57354 16.673 10.138C17 10.7798 17 11.6198 17 13.3V14.7C17 16.3802 17 17.2202 16.673 17.862C16.3854 18.4265 15.9265 18.8854 15.362 19.173C14.7202 19.5 13.8802 19.5 12.2 19.5H5.8C4.11984 19.5 3.27976 19.5 2.63803 19.173C2.07354 18.8854 1.6146 18.4265 1.32698 17.862C1 17.2202 1 16.3802 1 14.7V13.3C1 11.6198 1 10.7798 1.32698 10.138C1.6146 9.57354 2.07354 9.1146 2.63803 8.82698C2.99429 8.64546 3.41168 8.56471 4 8.52878Z"
      stroke="#127C12"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  
  )
}

export default Locked