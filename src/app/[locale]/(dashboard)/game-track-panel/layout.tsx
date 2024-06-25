import React from 'react';
import Card from '@/components/shared/card';

const GameTrackLayout = ({ children }: { children: React.ReactNode }) => {
  return <Card className="p-4">{children}</Card>;
};

export default GameTrackLayout;
