import Box from '@/components/ui/box';
import PhillButton from '@/components/ui/phill-button';
import User from '@/components/ui/user';
import { useSafeState } from '@/hooks/useSafeState';
import Block from '@/iconejs/block';
import Level from '@/iconejs/level';
import React from 'react';
import { MagicTabSelect } from 'react-magic-motion';
import PersonalDetails from '../personal-details';
import Text from '@/components/ui/typo';

const list = ['Personal Detail', 'Wallet', 'Receiving Accounts (7)'];

const Infohead = ({
    handleActive,
    isActive,
}: {
    handleActive: (index: number) => void;
    isActive: number;
}) => {
    return (
        <Box className="border-b mb-5">
            <Box className="flex items-center gap-3 ">
                {list.map((item, index: number) => (
                    <Box
                        onClick={() => handleActive(index)}
                        key={item}
                        className={`${isActive === index ? "" : ""} h-full cursor-pointer  text-sm relative`}
                    >

                        <Text
                            className={` transition-all py-3 duration-75 ease-in-out relative ${index == isActive ? 'text-[#127C12] ' : 'text-gray-400'}`}
                        >
                            {
                                index === isActive && <MagicTabSelect id={'phiil'}>
                                    <span className='absolute top-0 left-0 right-0 bottom-[-1px] border-b-[2.3px] border-[#127C12] '></span>
                                </MagicTabSelect>
                            }
                            {item}
                        </Text>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

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
const PlayerInfomation = () => {
    const [isActive, setIsActive] = useSafeState<number>(0);
    const handleActive = (index: number) => {
        setIsActive((_prev) => (_prev = index));
    };
    return (
        <Box className=''>
            <Box className="flex justify-between items-center">
                <Box className="flex gap-7 items-center">
                    <Box>
                        <User />
                    </Box>
                    <Box>
                        <Text className="text-xl font-bold inline ">Alex</Text>
                        <Box className="flex items-center gap-2 mt-3">
                            <PhillButton type="success" className="py-[10px] font-bold">
                                PL000001
                            </PhillButton>
                            <PhillButton type="success" className="font-bold">
                                <Level /> Level 8 - Grand Master
                            </PhillButton>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <PhillButton type="error" className=" border-[#D31515] border  py-2 gap-1">
                        <Block /> Block
                    </PhillButton>
                </Box>
            </Box>
        <Box  className='mt-7'>
        <Infohead handleActive={handleActive} isActive={isActive} />
             <Wraper value={isActive}>
                  <PersonalDetails />
                  <div></div>
             </Wraper>
        </Box>
        </Box>
    );
};

export default PlayerInfomation;
