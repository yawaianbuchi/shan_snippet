import React from 'react';
import Text from '@/components/ui/typo';
import { NextPage } from 'next';
import BackButton from '@/components/shared/button/BackButton';
import { EditGameTrackForm } from '@/components/pages/gametrack/form/edit';

const GameTrackEdit: NextPage = () => {
  return (
    <>
      <BackButton href="/game-track-panel" />
      <Text variant="h5" fontWeight="bold" mt={2}>
        Edit Game Tracking Link
      </Text>

      <EditGameTrackForm />
    </>
  );
};

export default GameTrackEdit;
