import { cn } from "@/util"


interface  RowProps extends React.HTMLAttributes<HTMLTableRowElement>{
    className?: string
}

const Row = ({children , className}:{
    children?:React.ReactNode | React.ReactNode[] | JSX.Element
} & RowProps) => {
  return (
        <tr className={cn('px-4',className)}>{children}</tr>
  )
}

export default Row
