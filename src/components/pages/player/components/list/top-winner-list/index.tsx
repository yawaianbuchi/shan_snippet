'use client';
import TCard from '@/components/ui/tcard';
import RightIcon from '@/iconejs/right-icon';
import React, {  useMemo } from 'react';
import BradeCurmb from '../../../../../ui/breadcumbs';
import Row from '@/components/ui/row';
import Item from '@/components/ui/item';
import { useGenieTable } from '@/hooks/useGenieTable';
import { data, formatNumber } from '../../config';
import dynamic from 'next/dynamic';
import Box from '@/components/ui/box';
import { Icons } from '@/components/ui/images/Icons';
import Input from '@/components/ui/inputs/Input';

const list = [{ cump: 'Player' }, { cump: <RightIcon /> }, { cump: 'Top Winners' }];

const GenieTable = dynamic(() => import('@/components/ui/genie-table'), {
  ssr: false,
});

const TopWinnerList = () => {
  const header = [
    'NO',
    'PLAYER',
    'Game',
    'Win Amount',
    'Date',
  ];

  const { value = [], controls } = useGenieTable({
    total: data.length,
    api: false,
    data,
  });

  type renderType = ReturnType<typeof winner>;
  const winner = () => data[0];


  const render = useMemo(() => {
    const item = value.map((item: renderType) => (
      <Row key={item.id}>
        <Item>{item.id}.</Item>
        <Item className="min-w-[195px]">
          <div className="flex space-x-2">
            <img src={item.img} className="w-[37px] h-[37px] rounded-full object-cover" />
            <div className="">
              <p className="font-semibold">{item.player}</p>
              <p className="text-gray-500">{item.phone}</p>
            </div>
          </div>
        </Item>
        <Item>{item.level}</Item>
        <Item className='text-[#127C12] font-semibold'>
            {formatNumber('000000')}
        </Item>

        <Item>
            {item.startDate}
        </Item>
      </Row>
    ));
    return item;
  }, [{ ...controls }]);

  return (
    <TCard>
      <BradeCurmb active={2} list={list} classNameContainer="mb-5" />
      {/* <TextField/> */}
       <Box className="grid grid-cols-4 mb-5">
       <Input
            name="game_track"
            placeholder="Search by name or ph no."
            icon={<Icons.search className="text-xl font-bold text-green" />}
            containerClass="rounded-lg :ring-1 hover:ring-[#127C12]"
            flexRowReverse
            className="py-3"
          />
       </Box>
      <GenieTable
        {...controls}
        header={header}
        paginate
        data={value}
        total={data.length}
      >
        {render}
      </GenieTable>
    </TCard>
  );
};

export default TopWinnerList;
