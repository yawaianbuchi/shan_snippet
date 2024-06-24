import { Icons } from '@/components/ui/images/Icons';
import { formatAmount } from '@/util';
import { Card, Stack, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Text from '@/components/ui/typo';

export interface InfoCardI {
  imgurl: string;
  label: string;
}

function InfoCard({ imgurl, label }: InfoCardI) {
  return (
    <Card elevation={1} className="p-4 rounded-lg">
      <Stack direction={'row'} gap={2}>
        <Image src={`/images/${imgurl}.png`} alt="game-image" height={56} width={56} priority />
        <Stack>
          <Text fontWeight={600}>{label}</Text>
          <Text sx={{ fontSize: '12px' }}>Last updated on 03 Jun 2024 at 04:43:21 PM</Text>
        </Stack>
      </Stack>
      <div className="h-[1px] w-full bg-gray-200 my-3" />
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Text className="text-gray-100">Played by</Text>
        <Text fontWeight={500}>{formatAmount(39020)} Players</Text>
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Text className="text-gray-100">Total win by players</Text>
        <Text fontWeight={500} className="text-green">
          {formatAmount(60388499)}
        </Text>
      </Stack>
      <Button sx={{ background: 'green', marginTop: '1rem' }}>
        <Icons.penline width={20} height={20} style={{ marginRight: '0.5rem' }} />
        <Text className="text-white text-xs">Edit</Text>
      </Button>
    </Card>
  );
}

export default InfoCard;
