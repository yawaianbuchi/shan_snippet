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
import { data as initData, type HotGame } from './data';
import { FRAME } from './tblFrame';
import { atom, useAtomValue } from 'jotai';

const initAtom = atom(initData);
const PopularTable = () => {
  const columns = useMemo<MRT_ColumnDef<HotGame>[]>(
    () => [
      {
        id: 'serial',
        header: '',
        size: 10,
        maxSize: 10,
        Cell: ({ row }) => (
          <Box className="center h-8 w-8 rounded-xl bg-orange font-semibold text-white">
            {row.index + 1}
          </Box>
        ),
      },
      {
        accessorKey: 'game',
        header: 'Game',
        Cell: ({ row }) => {
          return (
            <Stack direction="row" gap={1}>
              <Image src={row.original.game.image} alt="game" width={50} height={50} />
              <Text>
                <span>
                  {row.original.game.host}/
                  <br />
                </span>
                <span>{row.original.game.gameName}</span>
              </Text>
            </Stack>
          );
        },
      },
      {
        accessorKey: 'totalplayer',
        header: 'Total Player',
        Cell: ({ renderedCellValue }) => (
          <Text variant="h6" fontWeight="semibold">
            {formatNumber(Number(renderedCellValue), 0)}
          </Text>
        ),
      },
      {
        accessorKey: 'winamount',
        header: 'Win Amount',
        Cell: ({ renderedCellValue }) => (
          <Text variant="h6" fontWeight="semibold" className="text-green">
            {formatNumber(Number(renderedCellValue), 0)}
          </Text>
        ),
      },
    ],
    []
  );

  const data = useAtomValue(initAtom);

  const table = useMaterialReactTable({
    columns,
    data,
    ...FRAME,
  });

  return <MRT_TableContainer table={table} className="no-scrollbar" />;
};

export default PopularTable;
