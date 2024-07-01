import ComponentCopy from '@/components/shared/ComponentCopy';
import React from 'react';
import Text from '@/components/ui/typo';
import Card from '@/components/shared/card';

const SampleFrame = () => {
  return (
    <Card>
      <ComponentCopy
        component={<Text>Sampel Frame</Text>}
        value={`
    export const FRAME = {
        autoResetPageIndex: false,
        enableRowActions: false,
        enableSorting: false,
        enableColumnActions: false,
        muiTableHeadProps: {
          sx: { height: '60px' },
        },
        muiTableHeadCellProps: {
          sx: {
            backgroundColor: '#E7F2E7',
            color: '#127C12',
            fontSize: '16px',
            textTransform: 'uppercase',
            alignContent: 'center',
          },
        },
        muiTableBodyCellProps: {
          sx: { borderBottom: 'none' },
        },
        initialState: {
          columnOrder: ['serial', 'game', 'totalplayer', 'winamount'],
        },
        enableStickyHeader: true,
        muiTableContainerProps: {
          sx: { maxHeight: '440px' },
        },
      };
      
    `}
      />
    </Card>
  );
};

export default SampleFrame;
