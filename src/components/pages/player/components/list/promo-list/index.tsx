'use client';
import TCard from '@/components/ui/tcard';
import RightIcon from '@/iconejs/right-icon';
import React, {  useMemo } from 'react';
import BradeCurmb from '../../../../../ui/breadcumbs';
import Row from '@/components/ui/row';
import Item from '@/components/ui/item';
import { useGenieTable } from '@/hooks/useGenieTable';
import { data, formatNumber } from '../../config';
import PhillButton from '@/components/ui/phill-button';
import Eye from '@/iconejs/eyes';
import dynamic from 'next/dynamic';
import { useRouter, usePathname } from 'next/navigation';
import Box from '@/components/ui/box';
import Input from '@/components/ui/inputs/Input';
import { Icons } from '@/components/ui/images/Icons';
import Edit from '@/iconejs/edit';
import { Button } from '@mui/material';

const list = [{ cump: 'Player' }, { cump: <RightIcon /> }, { cump: 'Promo Code Owners' }];

const GenieTable = dynamic(() => import('@/components/ui/genie-table'), {
  ssr: false,
});


const PromoList = () => {
  const header = [
    'NO',
    'PLAYER',
    'PROMO CODE',
    'CREATED ON',
    'TYPE',
    'TOP-UP/REG. COUNT',
    'REWARDED AMOUNT',
    'ACTION',
  ];
  const router = useRouter();
  const pathName = usePathname();
  const { value = [], controls } = useGenieTable({
    total: data.length,
    api: false,
    data,
  });

  type renderType = ReturnType<typeof hello>;
  const hello = () => data[0];

  const handleDetailPage = (id: number) => {
    router.push(`${pathName}/${id}`)
  }

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
        <Item className='text-[#127C12]'>{'KMC8349'}</Item>
        <Item>

            {item.startDate}
         
        </Item>
        <Item className="w-[70px]">{'All'}</Item>
        <Item className="w-[70px] font-semibold">{'00/ 00'}</Item>
        <Item className='text-[#127C12] font-semibold'>
            {formatNumber('000000')}
        </Item>
        <Item>
          <div className="flex items-center">
            <PhillButton onClick={() => handleDetailPage(item.id)} className="mr-2 flex items-center space-x-1">
              <Eye className="mr-1" /> Details
            </PhillButton>
            <PhillButton className="flex items-center space-x-1" type="success">
              <Edit/> Block
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

      <Box className='grid grid-cols-2 mb-5'>
        <Box className='flex gap-2' >
        <Button
            variant="outlined"
            className="normal-case w-fit bg-green border-none text-white
           text-[14px] h-12 rounded-lg gap-1 hover:border-none hover:bg-green/85 hover:text-white"
          >
            <Icons.plus_circle className="font-semibold text-lg" />
            Create New
          </Button>
          <Input
            name="game_track"
            placeholder="Search by name or ph no."
            icon={<Icons.search className="text-xl font-bold text-green" />}
            containerClass="rounded-lg :ring-1 hover:ring-[#127C12]"
            flexRowReverse
            className="py-3"
          />
        </Box>
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

export default PromoList;
