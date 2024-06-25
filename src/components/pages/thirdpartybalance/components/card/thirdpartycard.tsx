import Card from '@/components/shared/card';
import Button from '@/components/ui/button';
import { Icons } from '@/components/ui/images/Icons';
import Image from '@/components/ui/images/Image';
import Text from '@/components/ui/typo';
import { formatDate } from '@/util';
import { Box, Stack } from '@mui/material';
import React from 'react';
import ContactDialogBox from '../ContactDialogBox';
import { formatNumber } from '@/util/numberAbbrevation';

const ThirdPartyCard = () => {
  return (
    <Card className="p-4 bg-transparent hover:bg-green-50 duration-100 group">
      <Stack gap={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Stack direction="row" alignItems="center" gap={1}>
            <Image src="/images/game.png" alt="third_party_logo" />
            <Box>
              <Text>Gaming Soft</Text>
              <Text>
                Last updated{'  '}
                <span className="text-gray-secondary font-medium">{formatDate(new Date())}</span>
              </Text>
            </Box>
          </Stack>

          <ContactDialogBox />
        </Stack>
        <Text variant="h5" fontWeight="bold">
          {formatNumber(123456, 0)}
        </Text>

        <Button
          variant="outlined"
          className="normal-case w-fit bg-green-50 border-none text-green text-[16px] gap-2 hover:border-none hover:bg-green hover:text-white group-hover:bg-green group-hover:text-white"
        >
          <Icons.refresh />
          Refresh
        </Button>
      </Stack>
    </Card>
  );
};

export default ThirdPartyCard;
