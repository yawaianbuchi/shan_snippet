import React from 'react';
import { Stack } from '@mui/material';
import Grid from '@/components/layout/Grid';

export default function Layout({
  children,
  player,
  transactions,
  hotgames,
  popular,
  topwinner,
}: {
  children: React.ReactNode;
  player: React.ReactNode;
  transactions: React.ReactNode;
  topwinner: React.ReactNode;
  hotgames: React.ReactNode;
  popular: React.ReactNode;
}) {
  return (
    <Stack rowGap={2}>
      {children}
      <Grid>
        {transactions}
        {player}
      </Grid>
      {topwinner}
      {hotgames}
      {popular}
    </Stack>
  );
}
