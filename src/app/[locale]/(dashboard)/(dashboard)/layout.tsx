import React from 'react';
import { Stack } from '@mui/material';

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
      <Stack
        gap={3}
        className="w-full"
        sx={{
          flexDirection: {
            sm: 'row',
          },
        }}
      >
        {transactions}
        {player}
      </Stack>
      {topwinner}
      {hotgames}
      {popular}
    </Stack>
  );
}
