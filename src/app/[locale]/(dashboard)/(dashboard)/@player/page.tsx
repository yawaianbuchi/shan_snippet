import React from 'react';
import Card from '@/components/shared/card';
import ChartHeader from '@/components/pages/dashboard/components/chart/ChartHeader';
import dynamic from 'next/dynamic';

const PieChart = dynamic(() => import('@/components/pages/dashboard/components/chart/PieChart'), {
  ssr: false,
});

const Players = () => {
  return (
    <Card className="p-4">
      <ChartHeader label="Players" href="/transactions/top-up" />
     <PieChart />
    </Card>
  );
};

export default Players;
