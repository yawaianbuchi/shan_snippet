import Box from '@/components/ui/box';
import PhillButton from '@/components/ui/phill-button';
import Text from '@/components/ui/text';
import User from '@/components/ui/user';
import { useSafeState } from '@/hooks/useSafeState';
import Block from '@/iconejs/block';
import Level from '@/iconejs/level';
import React from 'react';
import { MagicTabSelect } from 'react-magic-motion';
import PersonalDetails from '../personal-details';

const list = ['Personal Detail', 'Wallet', 'Receiving Accounts (7)'];

const Infohead = ({
  handleActive,
  isActive,
}: {
  handleActive: (index: number) => void;
  isActive: number;
}) => {
  return (
    <Box className="mb-5 border-b">
      <Box className="flex items-center gap-3">
        {list.map((item, index: number) => (
          <Box
            onClick={() => handleActive(index)}
            key={item}
            className={`${isActive === index ? '' : ''} relative h-full cursor-pointer text-sm`}
          >
            <Text
              className={`relative py-3 transition-all duration-75 ease-in-out ${index == isActive ? 'text-[#127C12]' : 'text-gray-400'}`}
            >
              {index === isActive && (
                <MagicTabSelect id={'phiil'}>
                  <span className="absolute bottom-[-1px] left-0 right-0 top-0 border-b-[2.3px] border-[#127C12]"></span>
                </MagicTabSelect>
              )}
              {item}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const Wraper = ({ children, value }: { children: React.ReactNode[]; value: number }) => {
  return <div>{children[value]}</div>;
};
const PlayerInfomation = () => {
  const [isActive, setIsActive] = useSafeState<number>(0);
  const handleActive = (index: number) => {
    setIsActive((_prev) => (_prev = index));
  };
  return (
    <Box className="">
      <Box className="flex items-center justify-between">
        <Box className="flex items-center gap-7">
          <Box>
            <User />
          </Box>
          <Box>
            <Text className="inline text-xl font-bold">Alex</Text>
            <Box className="mt-3 flex items-center gap-2">
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
          <PhillButton type="error" className="gap-1 border border-[#D31515] py-2">
            <Block /> Block
          </PhillButton>
        </Box>
      </Box>
      <Box className="mt-7">
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
