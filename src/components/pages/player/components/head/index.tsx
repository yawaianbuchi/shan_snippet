import Card from '@/components/shared/card';
import Box from '@/components/ui/box';
import { MagicTabSelect } from 'react-magic-motion';
import Text from '@/components/ui/typo';

const Heading = ({
  list,
  isActive,
  handleActive,
}: {
  list?: string[];
  isActive?: number;
  handleActive: (index: number) => void;
}) => {
  return (
    <Box>
      <Card className="cursor-pointer rounded-[10px] p-1 py-1 shadow-md">
        <Box className="flex items-center overflow-x-scroll whitespace-nowrap scrollbar-hide">
          {list?.map((item: string, index: number) => (
            <Box
              key={item}
              className={`relative px-3 py-3`}
              onClick={() => {
                handleActive(index);
              }}
            >
              {isActive == index && (
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
              )}
              <Text
                className={`relative z-[10] text-sm transition-all duration-150 ease-in-out ${isActive == index ? 'text-white delay-100' : 'text-black'}`}
              >
                {item}
              </Text>
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default Heading;
