'use client';
import { useMemo, useState } from 'react';
import {
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
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

const TopWinnerTable = () => {
  const columns = useMemo<MRT_ColumnDef<HotGame>[]>(
    () => [
      {
        id: 'serial',
        header: '',
        size: 10,
        maxSize: 10,
        Cell: ({ row }) => (
          <Box className="w-8 h-8 rounded-xl bg-orange center text-white font-semibold">
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
      {
        accessorKey: 'status',
        header: 'Status',
        Cell: ({ renderedCellValue: status }) => (
          <Chip
            className="w-fit text-[16px]"
            label={status ? 'active' : 'inactive'}
            type={status ? 'success' : 'error'}
          />
        ),
      },
      {
        header: 'Action',
        Cell: () => (
          <Button
            variant="text"
            className="flex text-lg justify-center items-center gap-2 normal-case bg-green-50 text-green"
          >
            <Icons.eyeOpen className="rotate-180" />
            Details
          </Button>
        ),
      },
    ],
    []
  );

  const [data, setData] = useState(() => initData);

  const table = useMaterialReactTable({
    columns,
    data,
    ...FRAME,
  });

  return <MRT_TableContainer table={table} className="no-scrollbar" />;
};

export default TopWinnerTable;
