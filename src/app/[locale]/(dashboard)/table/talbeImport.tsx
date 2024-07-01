import ComponentCopy from '@/components/shared/ComponentCopy';
import Card from '@/components/shared/card';
import Text from '@/components/ui/typo';
import React from 'react';

const TalbeImport = () => {
  return (
    <Card>
      <ComponentCopy
        component={<Text>Table Import </Text>}
        value={`
       'use client';
    import { useMemo } from 'react';
    import {
      useMaterialReactTable,
      type MRT_ColumnDef,
      MRT_TableContainer,
    } from 'material-react-table';
    import { Box, Stack } from '@mui/material';
    import Text from '@/components/ui/typo';
    import Image from '@/components/ui/images/Image';
    import { formatNumber } from '@/utils/numberAbbrevation';
    import { FRAME } from './tblFrame';
    import Chip from '@/components/ui/chip';
    import Button from '@/components/ui/button';
    import { Icons } from '@/components/ui/images/Icons';
    import { data as initData, type HotGame } from './data';
    import { atom, useAtomValue } from 'jotai';
    import ComponentCopy from '@/components/shared/ComponentCopy';
    
    const initAtom = atom(initData);
       `}
      />
    </Card>
  );
};

export default TalbeImport;
