import React from 'react';
import Text from '@/components/ui/typo';
import { CreateGameTrackForm } from '@/components/pages/gametrack/form/create';
import BackButton from '@/components/shared/button/BackButton';

const CreateGameTracking = () => {
  return (
    <>
      <BackButton href="/game-track-panel" />
      <Text variant="h5" fontWeight="bold" mt={2}>
        Create Game Tracking Link
      </Text>

      <CreateGameTrackForm />
    </>
  );
};

export default CreateGameTracking;
