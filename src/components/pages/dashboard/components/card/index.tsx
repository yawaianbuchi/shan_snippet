import Card from '@/components/shared/card';
import React from 'react';
import Text from '@/components/ui/typo';
import { Icons } from '@/components/ui/images/Icons';
import { Box, Stack } from '@mui/material';
import Image from '@/components/ui/images/Image';
import { cn } from '@/util';
import { formatNumber } from '@/util/numberAbbrevation';

type OverviewCardProps = {
  title: string;
  amount: number;
  imgName: 'game.png' | 'newplayers.png' | 'reports.png';
  increase?: boolean;
};
const OverviewCard = ({ title, amount, imgName, increase = true }: OverviewCardProps) => {
  return (
    <Card className="p-4">
      <Text
        className="font-semibold capitalize"
        sx={{
          fontSize: {
            sm: '22px',
          },
        }}
      >
        {title}
      </Text>

      <Stack
        justifyContent="space-between"
        sx={{
          flexDirection: {
            sm: 'row-reverse',
          },
          alignItems: {
            sm: 'flex-end',
          },
        }}
      >
        <Image src={`/images/${imgName}`} alt="game-image" height={70} width={70} />

        <Box>
          <Stack mt={2} direction="row" rowGap={1} alignItems="center">
            <Icons.arrowUpRight
              className={cn('font-bold text-xl ', increase ? 'text-green' : 'text-red rotate-90')}
            />
            <Text className={cn('font-semibold', increase ? 'text-green' : 'text-red')}>
              {43.54}%
            </Text>
          </Stack>

          <Text className="font-bold text-lg md:text-3xl">+{formatNumber(amount,0)}</Text>
        </Box>
      </Stack>
    </Card>
  );
};

export default OverviewCard;
