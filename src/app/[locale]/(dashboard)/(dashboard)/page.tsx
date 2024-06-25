import Card from '@/components/shared/card';
import { NextPage } from 'next';
import React from 'react';
import Text from '@/components/ui/typo';
import { Box, Stack } from '@mui/material';
import Grid from '@/components/layout/Grid';
import OverviewCard from '@/components/pages/dashboard/components/card';
import initTranslations from '@/app/i18n';
import { LANG_NAMESPACE } from '@/constants/namespace';
import { Props } from '@/types/Params';

const DashboardPage: NextPage<Props> = async ({ params: { locale } }: Props) => {
  const { t } = await initTranslations(locale, LANG_NAMESPACE);
  return (
    <Card className="bg-green p-6">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Text className="text-white text-2xl font-semibold">{t('overview_reports')}</Text>
        <Box>
          <h1>Hello world</h1>
        </Box>
      </Stack>

      <Grid className="mt-4">
        <OverviewCard imgName="game.png" amount={123890} title={t('game')} />
        <OverviewCard
          imgName="newplayers.png"
          amount={123890}
          title={t('new_players')}
          increase={false}
        />
        <OverviewCard imgName="reports.png" amount={123890} title={t('reports')} />
      </Grid>
    </Card>
  );
};

export default DashboardPage;
