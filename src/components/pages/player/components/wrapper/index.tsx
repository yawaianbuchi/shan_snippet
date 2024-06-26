import React from "react"

const Wraper = ({children,value}:{
  children : React.ReactNode[] ,
  value: number
}) => {
  return (
    <div>
       {children[value]}
    </div>
  )
}

export default Wraper
