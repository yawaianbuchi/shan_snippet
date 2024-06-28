'use client';
import Box from '@/components/ui/box';
import Text from '@/components/ui/typo';
import Back from '@/iconejs/back';
import React from 'react';
import Content from '../../components/content';
import Card from '@/components/shared/card';

const PlayerDetailsPage = () => {
  return (
    <Card className="py-6">
      <Box className="flex items-center gap-1">
        <Back />
        <Text className="text-base"> Back</Text>
      </Box>
      <Text className="py-6 text-lg font-bold">Player Details</Text>
      <Content />
    </Card>
  );
};

export default PlayerDetailsPage;
