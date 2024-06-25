'use client';
import TCard from '@/components/ui/tcard';
import RightIcon from '@/iconejs/right-icon';
import React, { useMemo } from 'react';
import BradeCurmb from '../../breadcumbs';
import Row from '@/components/ui/row';
import Item from '@/components/ui/item';
import { useGenieTable } from '@/hooks/useGenieTable';
import { data } from '../../config';
import Chip from '@/components/ui/chip';
import ChipUi from '../../custom-chip';
import PhillButton from '@/components/ui/phill-button';
import Eye from '@/iconejs/eyes';
import Block from '@/iconejs/block';
import dynamic from 'next/dynamic';

const list = [{ cump: 'Player' }, { cump: <RightIcon /> }, { cump: 'All Players' }];

const GenieTable = dynamic(() => import('@/components/ui/genie-table'), {
  ssr: false,
});

const AllPlayerList = () => {
  const header = [
    'NO',
    'PLAYER',
    'CREATED ON',
    'STATUS',
    'CREATED ON',
    'LAST UPDATED ON',
    'ACTION',
  ];
  const { value = [], controls } = useGenieTable({
    total: data.length,
    api: false,
    data,
  });

  type renderType = ReturnType<typeof hello>;
  const hello = () => data[0];

  const render = useMemo(() => {
    const item = value.map((item: renderType) => (
      <Row key={item.id}>
        <Item>{item.id}.</Item>
        <Item>
          <div className="flex space-x-2">
            <img src={item.img} className="w-[37px] h-[37px] rounded-full object-cover" />
            <div className="">
              <p className="font-semibold">{item.player}</p>
              <p className="text-gray-500">{item.phone}</p>
            </div>
          </div>
        </Item>
        <Item>{item.level}</Item>
        <Item>
          <ChipUi className="uppercase" type={item.status === 'active' ? 'success' : 'error'}>
            {item.status}
          </ChipUi>
        </Item>
        <Item className="w-[70px]">{item.startDate}</Item>
        <Item className="w-[70px]">{item.endDate}</Item>
        <Item>
          <div className="flex items-center">
            <PhillButton className="mr-2 flex items-center space-x-1">
              <Eye className="mr-1" /> Details
            </PhillButton>
            <PhillButton className="flex items-center space-x-1" type="error">
              <Block className="mr-1" /> Block
            </PhillButton>
          </div>
        </Item>
      </Row>
    ));
    return item;
  }, [{ ...controls }]);

  return (
    <TCard>
      <BradeCurmb active={2} list={list} classNameContainer="mb-5" />
      <GenieTable
        show="default"
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

export default AllPlayerList;
