import React from 'react';
import Text from '@/components/ui/typo';
import Link from 'next/link';
import { Icons } from '@/components/ui/images/Icons';
import Button from '@/components/ui/button';
import { NextPage } from 'next';
import { Stack } from '@mui/material';
import BackButton from '@/components/shared/button/BackButton';
import GameTrackingDetailsContainer from '@/components/pages/gametrack/layout/GameTrackingDetailsContainer';

type GameTrackDetailsProps = {
  params: {
    id: string | number;
  };
};

const GameTrackDetails: NextPage<GameTrackDetailsProps> = ({
  params: { id },
}: GameTrackDetailsProps) => {
  return (
    <>
      <BackButton href="/game-track-panel" />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Text variant="h6" fontWeight="semibold" mt={2}>
          Game Tracking Link Details
        </Text>
        <Link href={`/game-track-panel/details/${id}/edit`}>
          <Button
            variant="outlined"
            className="w-fit gap-1 border-none bg-green-50 text-[16px] normal-case text-green hover:border-none"
          >
            <Icons.edit className="text-2xl" />
            Edit Details
          </Button>
        </Link>
      </Stack>

      <GameTrackingDetailsContainer />
    </>
  );
};

export default GameTrackDetails;
