import Card from '@/components/shared/card';
import React from 'react';
import dynamic from 'next/dynamic';
import ChartHeader from '@/components/pages/dashboard/components/chart/ChartHeader';

const LineChart = dynamic(() => import('@/components/pages/dashboard/components/chart/linechart'), {
  ssr: false,
});
const Transactions = () => {
  return (
    <Card className="flex-1 min-h-[30vh] col-span-2 p-4 ">
      <ChartHeader label="Transactions" href="/transactions/top-up" />
      <LineChart />
    </Card>
  );
};

export default Transactions;
