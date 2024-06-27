import { cn } from '@/utils/cn';
import React from 'react'

interface TextProps extends React.HTMLAttributes<HTMLDivElement>{
     className?:string;
     children?: React.ReactNode | JSX.Element
}

const Text:React.FC<TextProps> = ({children,className}) => {
  return (
    <p className={ cn('text-sm',`${className}`)}>
        {children}
    </p>
  )
}

export default Text
