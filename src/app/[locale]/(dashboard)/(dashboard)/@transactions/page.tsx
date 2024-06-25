import Card from '@/components/shared/card';
import React from 'react';
import dynamic from 'next/dynamic';

const LineChart = dynamic(() => import("@/components/pages/dashboard/components/chart/linechart"), {
  ssr: false
})
const Transactions = () => {
  return (
    <Card className="flex-1 min-h-[30vh]">
      <LineChart />
    </Card>
  );
};

export default Transactions;
