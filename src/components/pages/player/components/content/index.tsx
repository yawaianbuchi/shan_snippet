import { useSafeState } from '@/hooks/useSafeState';
import Heading from '../head';
import Wraper from '../wrapper';
import Box from '@/components/ui/box';
import PlayerInfomation from '../player-info';

const list = [
  'Player Information',
  'All Transactions',
  'Game Transactions',
  'Bet Transactions',
  'Invited (8)',
  'Active Bonus History',
  'Share Bonus Collection History',
];

const Content = () => {
  const [isActive, setIsActive] = useSafeState<number>(0);
  const handleActive = (index: number) => {
    setIsActive(index);
  };

  return (
    <div>
      <Heading list={list} handleActive={handleActive} isActive={isActive} />
      <Box className="mt-10">
        <Wraper value={isActive}>
          <PlayerInfomation />
          <div></div>
        </Wraper>
      </Box>
    </div>
  );
};

export default Content;
