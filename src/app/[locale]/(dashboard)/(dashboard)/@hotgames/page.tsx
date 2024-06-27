import HotGameTable from '@/components/pages/dashboard/components/table/HotGame';
import Card from '@/components/shared/card';
import Button from '@/components/ui/button';
import {  Stack } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Text from '@/components/ui/typo';
import { Icons } from '@/components/ui/images/Icons';


const HotGamesTable = () => {
  return (
    <Card className="p-4">
     <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Text variant="h6">Hot Games</Text>

        <Link href="/game-list/hot-game">
          <Button
            variant="text"
            className="flex text-lg justify-center items-center gap-2 normal-case text-gray-secondary"
          >
            More
            <Icons.arrow_long className="rotate-180" />
          </Button>
        </Link>
      </Stack>


      <HotGameTable />
    </Card>
  );
};

export default HotGamesTable;
