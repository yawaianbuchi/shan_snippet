'use client'
import ComponentCopy from "@/components/shared/ComponentCopy"
import Table from "./table"
import {val} from './config'

const Page = () => {
  return (
    <ComponentCopy
    component={<Table/>}
    value={
      val
    }
  />
  )
}

export default Page
