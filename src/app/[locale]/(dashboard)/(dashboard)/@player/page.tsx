'use client';
import React from 'react';
import Card from '@/components/shared/card';
import { t } from '@/util/translate';

const Players = () => {
  return (
    <Card className="flex-1">
      <p>client side translation</p>
      <h1>{t('game')}</h1>
    </Card>
  );
};

export default Players;
