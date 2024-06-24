'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const AllPlayerList = dynamic(() => import('../../components/list/all-player-list'), {
  ssr: false,
});

const AllPlayer = () => {
  return (
    <div>
      <AllPlayerList />
    </div>
  );
};

export default AllPlayer;
