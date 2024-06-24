import React from 'react';
import CusContainer from '@/components/ui/cuscontainer';
import InfoCard, { InfoCardI } from '../InfoCard';

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
    <CusContainer>
      <div className="grid grid-cols-2 gap-4">
        {datas.map((item) => (
          <InfoCard key={item.label} {...item} />
        ))}
      </div>
    </CusContainer>
  );
}

export default ManagePage;
