'use client';
import React, { useMemo } from 'react';
import { Stack } from '@mui/material';
import { Icons } from '@/components/ui/images/Icons';
import Button from '@/components/ui/button';
import Input from '@/components/ui/inputs/Input';
import Link from 'next/link';
import useGenieTable from '@/hooks/useGenieTable';
import Row from '@/components/ui/row';
import Item from '@/components/ui/item';
import Chip from '@/components/ui/chip';
import dynamic from 'next/dynamic';

const GenieTable = dynamic(() => import('@/components/ui/genie-table'), {
  ssr: false,
});

const header = ['MAIN GAME', 'URL', 'VPN REQUIRED', 'ACTION'];

const data = [
  { mainGame: 'shan', url: 'www.genie.com', vpn: true },
  { mainGame: 'shan', url: 'www.youtube.com', vpn: false },
];
const GameTrackTable = () => {
  const { value = [], controls } = useGenieTable({
    total: data.length,
    api: false,
    data,
  });

  type renderType = ReturnType<typeof value>;

  const render = useMemo(() => {
    const item = value.map((item: renderType) => (
      <Row key={item.id}>
        <Item>{item.mainGame}</Item>
        <Item className="normal-case w-2/6">{item.url}</Item>
        <Item>
          <Chip label={item.vpn ? 'yes' : 'no'} type={item.vpn ? 'success' : 'error'} />
        </Item>
        <Item>
          <Stack direction="row" columnGap={1}>
            <Link href={`/game-track-panel/details/${item.id}`}>
              <Button
                className="bg-green-50 text-lg text-green capitalize hover:bg-green-50/55"
                disableElevation
              >
                <Icons.eyeOpen className="mr-1 text-lg" /> Details
              </Button>
            </Link>

            <Link href={`/game-track-panel/details/${item.id}/edit`}>
              <Button
                className="bg-green-50 text-lg text-green capitalize hover:bg-green-50/55"
                disableElevation
              >
                <Icons.edit className="mr-1 w-4 h-4" /> Edit
              </Button>
            </Link>
          </Stack>
        </Item>
      </Row>
    ));
    return item;
  }, [{ ...controls }]);

  return (
    <>
      <Stack direction="row" gap={2} alignItems="center" my={2}>
        <Link href="/game-track-panel/create">
          <Button
            variant="outlined"
            className="normal-case w-fit bg-green border-none text-white
           text-[16px] h-12 rounded-lg gap-1 hover:border-none hover:bg-green/85 hover:text-white"
          >
            <Icons.plus_circle className="font-semibold text-lg" />
            Create New
          </Button>
        </Link>

        <Input
          name="game_track"
          placeholder="Search by game name or URL"
          icon={<Icons.search className="text-xl font-bold text-green" />}
          containerClass="rounded-lg"
          flexRowReverse
          className="py-3"
        />
      </Stack>

      <GenieTable
        header={header}
        show="default"
        {...controls}
        paginate
        data={value}
        total={data.length}
      >
        {render}
      </GenieTable>
    </>
  );
};

export default GameTrackTable;
