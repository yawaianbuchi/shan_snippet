
import GenieTable, { useGenieTable } from '@/components/ui/genie-table'
import TCard from '@/components/ui/tcard'
import RightIcon from '@/iconejs/right-icon'
import React from 'react'
import BradeCurmb from '../../breadcumbs'

const list = ["Player",<RightIcon/>,"All Players"]

const data = new Array(20).fill({
    
})

const AllPlayerList = () => {
    const header = [
        "NO",
        "PLAYER",
        "CREATED ON",
        "STATUS",
        "CREATED ON",
        "LAST UPDATED ON",
        "ACTION"
    ]
    const {value=[],} = useGenieTable({
            total: data.length,
            api:false,
            data
    })
  return (
    <TCard>
        <BradeCurmb active={2} list={list}/>
        <GenieTable header={header}/>
    </TCard>
  )
}

export default AllPlayerList
