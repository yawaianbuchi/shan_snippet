import { Icons } from '@/components/ui/images/Icons';
import { formatNumberAbbreviation } from '@/utils';
import { Card, Stack, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Text from '@/components/ui/typo';
import { useRouter } from 'next/navigation';
export interface InfoCardI {
  imgurl: string;
  label: string;
}

function InfoCard({ imgurl, label }: InfoCardI) {
  const router = useRouter();
  return (
    <Card elevation={1} className="rounded-lg p-4">
      <Stack direction={'row'} gap={2}>
        <Image src={`/images/${imgurl}.png`} alt="game-image" height={56} width={56} priority />
        <Stack>
          <Text fontWeight={600}>{label}</Text>
          <Text sx={{ fontSize: '12px' }}>Last updated on 03 Jun 2024 at 04:43:21 PM</Text>
        </Stack>
      </Stack>
      <div className="my-3 h-[1px] w-full bg-gray-200" />
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Text className="text-gray-600">Played by</Text>
        <Text fontWeight={500}>{formatNumberAbbreviation(39020)} Players</Text>
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Text className="text-gray-600">Total win by players</Text>
        <Text fontWeight={500} className="text-green">
          {formatNumberAbbreviation(60388499)}
        </Text>
      </Stack>
      <Button
        startIcon={<Icons.penline width={20} height={20} style={{ marginRight: '0.5rem' }} />}
        variant="contained"
        disableRipple
        className="mt-4 bg-green capitalize hover:bg-green/90"
        onClick={() => router.push(`/spin-wheel/manage/${label}`)}
      >
        Edit
      </Button>
    </Card>
  );
}

export default InfoCard;
