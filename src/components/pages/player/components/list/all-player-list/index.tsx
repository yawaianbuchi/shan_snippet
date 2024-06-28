'use client';
import RightIcon from '@/iconejs/right-icon';
import React, { useMemo } from 'react';
import BradeCurmb from '../../../../../ui/breadcumbs';
import Row from '@/components/ui/row';
import Item from '@/components/ui/item';
import { useGenieTable } from '@/hooks/useGenieTable';
import { data } from '../../config';
import PhillButton from '@/components/ui/phill-button';
import Eye from '@/iconejs/eyes';
import Block from '@/iconejs/block';
import dynamic from 'next/dynamic';
import { useRouter, usePathname } from 'next/navigation';
import Box from '@/components/ui/box';
import Input from '@/components/ui/inputs/Input';
import { Icons } from '@/components/ui/images/Icons';
import Select from '@/components/ui/inputs/Select';
import Image from '@/components/ui/images/Image';
import Chip from '@/components/ui/chip';
import Card from '@/components/shared/card';

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
    router.push(`${pathName}/${id}`);
  };

  const render = useMemo(() => {
    const item = value.map((item: renderType) => (
      <Row key={item.id}>
        <Item>{item.id}.</Item>
        <Item className="min-w-[195px]">
          <div className="flex space-x-2">
            {/* <img src={item.img} className="h-[37px] w-[37px] rounded-full object-cover" /> */}
            <Image src={item.img} alt="testing" width={37} height={37} className="rounded-full" />
            <div className="">
              <p className="font-semibold">{item.player}</p>
              <p className="text-gray-500">{item.phone}</p>
            </div>
          </div>
        </Item>
        <Item>{item.level}</Item>
        <Item>
          <Chip label={item.status} type={item.status === 'active' ? 'success' : 'error'} />
        </Item>
        <Item className="w-[70px]">{item.startDate}</Item>
        <Item className="w-[70px]">{item.endDate}</Item>
        <Item>
          <div className="flex items-center">
            <PhillButton
              onClick={() => handleDetailPage(item.id)}
              className="mr-2 flex items-center space-x-1"
            >
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
    <Card>
      <BradeCurmb active={2} list={list} classNameContainer="mb-5" />
      <Box className="mb-5 w-[40%]">
        <Box className="flex gap-2">
          <Select
            label="status"
            className="w-full rounded-md"
            value={value}
            onChange={() => {}}
            options={[
              { label: 'One', value: 1 },
              { label: 'Two', value: 2 },
              { label: 'Three', value: 3 },
            ]}
          />
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
      <GenieTable {...controls} header={header} paginate data={value} total={data.length}>
        {render}
      </GenieTable>
    </Card>
  );
};

export default AllPlayerList;
