'use client';
import React from 'react';
import Card from '@/components/shared/card';
import { useT } from '@/utils/translate';

const Players = () => {
  return (
    <Card className="flex-1">
      <p>client side translation</p>
      <h1>{useT('game')}</h1>
    </Card>
  );
};

export default Players;
