'use client';
import dynamic from 'next/dynamic';
import React from 'react';
const AllPlayer = dynamic(() => import('@/components/pages/player/sub-page/all-player'), {
  ssr: false,
});
const AllPage = () => {
  return (
    <div>
      <AllPlayer />
    </div>
  );
};

export default AllPage;
