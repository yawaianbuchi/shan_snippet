'use client';
import React from 'react';
import InfoCard, { InfoCardI } from '../InfoCard';
import HeadingLine from '../HeadingLine';
import Card from '@/components/shared/card';

const datas: InfoCardI[] = [
  {
    imgurl: 'lvl-one-warriors',
    label: 'Level 1 - Warriors',
  },
  {
    imgurl: 'lvl-one-warriors',
    label: 'Level 2 - Master',
  },
  {
    imgurl: 'green-lvl',
    label: 'Level 3',
  },
  {
    imgurl: 'green-lvl',
    label: 'Level 4',
  },
  {
    imgurl: 'purple-lvl',
    label: 'Level 5',
  },
  {
    imgurl: 'purple-lvl',
    label: 'Level 6',
  },
  {
    imgurl: 'red-lvl',
    label: 'Level 7',
  },
  {
    imgurl: 'red-lvl',
    label: 'Level 8',
  },
];

function ManagePage() {
  return (
    <Card className="p-4">
      <HeadingLine />
      <div className="grid grid-cols-2 gap-4">
        {datas.map((item) => (
          <InfoCard key={item.label} {...item} />
        ))}
      </div>
    </Card>
  );
}

export default ManagePage;
