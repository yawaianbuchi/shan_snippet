import Card from '@/components/shared/card';
import { NextPage } from 'next';
import React from 'react';
import Text from '@/components/ui/typo';
import { Box, Stack } from '@mui/material';
import Grid from '@/components/layout/Grid';
import { Icons } from '@/components/ui/images/Icons';
import Image from '@/components/ui/images/Image';
import OverviewCard from '@/components/pages/dashboard/components/card';

const DashboardPage: NextPage = () => {
  return (
    <Card className="bg-green p-6">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Text className="text-white text-2xl font-semibold">Overiew Reports</Text>
        <Box>
          <h1>Hello world</h1>
        </Box>
      </Stack>

      <Grid className="mt-4">
        <OverviewCard imgName="game.png" amount={123890} title="game" />
        <OverviewCard
          imgName="newplayers.png"
          amount={123890}
          title="new players"
          increase={false}
        />
        <OverviewCard imgName="reports.png" amount={123890} title="reports" />
      </Grid>
    </Card>
  );
};

export default DashboardPage;
