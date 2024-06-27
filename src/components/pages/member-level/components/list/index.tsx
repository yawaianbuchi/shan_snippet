'use client';
import TCard from '@/components/ui/tcard';
import RightIcon from '@/iconejs/right-icon';
import React, { useMemo } from 'react';
import Row from '@/components/ui/row';
import Item from '@/components/ui/item';
import { datalevel } from '../config';
import { useGenieTable } from '@/hooks/useGenieTable';
import PhillButton from '@/components/ui/phill-button';
import Eye from '@/iconejs/eyes';
import dynamic from 'next/dynamic';
import { useRouter, usePathname } from 'next/navigation';
import Box from '@/components/ui/box';
import Input from '@/components/ui/inputs/Input';
import { Icons } from '@/components/ui/images/Icons';
import Edit from '@/iconejs/edit';
import { Button } from '@mui/material';
import BradeCurmb from '@/components/ui/breadcumbs';
import Star from '@/iconejs/start';

const list = [{ cump: 'Player' }, { cump: <RightIcon /> }, { cump: 'Promo Code Owners' }];

const GenieTable = dynamic(() => import('@/components/ui/genie-table'), {
  ssr: false,
});

const MemberList = () => {
  const header = ['NO', 'MEMBER LEVEL', 'NAME', 'MIN TOP-UP AMOUNT', 'LAST UPADATE ON', 'ACTION'];
  const router = useRouter();
  const pathName = usePathname();
  const { value = [], controls } = useGenieTable({
    total: datalevel.length,
    api: false,
    data: datalevel,
  });

  type renderType = ReturnType<typeof hello>;
  const hello = () => datalevel[0];

  const handleDetailPage = (id: number) => {
    router.push(`${pathName}/${id}`);
  };

  const render = useMemo(() => {
    const item = value.map((item: renderType) => (
      <Row key={item.name}>
        <Item>{item.id}.</Item>
        <Item className="min-w-[195px]">
          <Star /> {item.level}
        </Item>
        <Item className="text-[#127C12]">{item.name}</Item>
        <Item>{item.amount}</Item>
        <Item className="w-[70px]">{item.lastDate}</Item>
        <Item>
          <PhillButton>
            <Edit /> Edit
          </PhillButton>
        </Item>
      </Row>
    ));
    return item;
  }, [{ ...controls }]);

  return (
    <TCard>
      <BradeCurmb active={2} list={list} classNameContainer="mb-5" />

      <Box className="mb-5 grid grid-cols-2">
        <Box className="flex gap-2">
          <Button
            variant="outlined"
            className="h-12 w-fit gap-1 rounded-lg border-none bg-green text-[14px] normal-case text-white hover:border-none hover:bg-green/85 hover:text-white"
          >
            <Icons.plus_circle className="text-lg font-semibold" />
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
      <GenieTable {...controls} header={header} paginate data={value} total={datalevel.length}>
        {render}
      </GenieTable>
    </TCard>
  );
};

export default MemberList;
