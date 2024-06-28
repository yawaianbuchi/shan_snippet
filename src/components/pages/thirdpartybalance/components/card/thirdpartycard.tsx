import Card from '@/components/shared/card';
import Button from '@/components/ui/button';
import { Icons } from '@/components/ui/images/Icons';
import Image from '@/components/ui/images/Image';
import Text from '@/components/ui/typo';
import { formatDate } from '@/utils';
import { Box, Stack } from '@mui/material';
import React from 'react';
import ContactDialogBox from '../ContactDialogBox';
import { formatNumber } from '@/utils/numberAbbrevation';

const ThirdPartyCard = () => {
  return (
    <Card className="group bg-transparent p-4 duration-100 hover:bg-green-50">
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
          className="w-fit gap-2 border-none bg-green-50 text-[16px] normal-case text-green hover:border-none hover:bg-green hover:text-white group-hover:bg-green group-hover:text-white"
        >
          <Icons.refresh />
          Refresh
        </Button>
      </Stack>
    </Card>
  );
};

export default ThirdPartyCard;
