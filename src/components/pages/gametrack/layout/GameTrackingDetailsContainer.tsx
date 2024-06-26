import React from 'react';
import Text from '@/components/ui/typo';
import { Stack } from '@mui/material';
import DetailsList from '../components/DetailsList';

const GameTrackingDetailsContainer = () => {
  return (
    <Stack mt={2}>
      <Text variant="h5" fontWeight="bold">
        JDB
      </Text>

      <Stack mt={3}>
        <DetailsList label="Operator Name" value="jhoe doe" />
        <DetailsList label="Main Game Name" value="jhoe doe" />
        <DetailsList label="URL" value="www.youtube.com" copy />
        <DetailsList label="Username" value="jhoe doe" copy />
        <DetailsList label="Password" value="hellothere" passwords />
        <DetailsList label="Merchant Name" value="SHANGAMING" />
        <DetailsList label="VPN Required" value={'true'} />
      </Stack>
    </Stack>
  );
};

export default GameTrackingDetailsContainer;
