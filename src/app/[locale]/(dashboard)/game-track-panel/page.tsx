import { NextPage } from 'next';
import React from 'react';
import Text from '@/components/ui/typo';
import GameTrackTable from '@/components/pages/gametrack';

const GameTrackPanelPage: NextPage = () => {
  return (
    <>
      <Text variant="h6" fontWeight="semibold">
        Game Tracking Link
      </Text>

      <GameTrackTable />
    </>
  );
};

export default GameTrackPanelPage;
