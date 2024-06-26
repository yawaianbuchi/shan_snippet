
import Box from "@/components/ui/box"
import TCard from "@/components/ui/tcard"
import Text from "@/components/ui/text"
import { MagicTabSelect } from "react-magic-motion"

const Heading = ({
    list,
    isActive,
    handleActive,
}:{
    list?:string[]
    isActive?:number
    handleActive: (index:number)=>void
}) => {
  return (
    <Box>
        <TCard className="shadow-md p-1 py-1 rounded-[10px] cursor-pointer">
            <Box className="flex items-center  whitespace-nowrap overflow-x-scroll scrollbar-hide">
            {
              list?.map((item:string,index:number)=>(
                <Box 
                 key={item}
                 className={`relative px-3 py-3`} 
                 onClick={()=>handleActive(index)} >
                      {
                         isActive == index && (
                            <MagicTabSelect id="pillTabs" transition={{ type: 'spring', bounce: 0.35 }}>
                            <span
                              style={{
                                borderRadius: '10px',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 1,
                                backgroundColor: '#127C12',
                              }}
                            />
                          </MagicTabSelect>
                         )
                      }
                     <Text 
                         className={`text-sm relative z-[10] transition-all duration-150 ease-in-out
                         ${isActive == index ? "text-white delay-100": "text-black"}`}
                         >
                        {item}
                    </Text>
                </Box>
              ))   
            }
            </Box>
        </TCard>
    </Box>
  )
}

export default Heading
