'use client';
import React, { useRef } from 'react';
import Text from '@/components/ui/typo';
import Grid from '@/components/layout/Grid';
import Chip from '@/components/ui/chip';
import { Icons } from '@/components/ui/images/Icons';
import { Stack } from '@mui/material';
import Button from '@/components/ui/button';
import Input from '@/components/ui/inputs/Input';

export type DetailsListProps = {
  label: string;
  value: string;
  copy?: boolean;
  passwords?: boolean;
};

const DetailsList = ({ label, value, copy = false, passwords = false }: DetailsListProps) => {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleCopy = async () => {
    if (ref && ref.current) {
      navigator.clipboard.writeText(ref.current.value);
    }
  };
  return (
    <Grid className="h-14 w-full items-center justify-center rounded px-5 odd:bg-gray xl:grid-cols-2">
      <Text className="capitalize text-green">{label}</Text>

      {copy && (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="h-full"
        >
          <input
            ref={ref}
            name={label}
            defaultValue={value}
            className="bg-transparent p-0 outline-none"
            readOnly
          />
          <Button
            onClick={handleCopy}
            variant="text"
            className="h-fit max-w-fit text-xl font-bold text-green"
          >
            <Icons.fileCopy />
          </Button>
        </Stack>
      )}

      {passwords && (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="h-full"
        >
          <Input
            name="password"
            type="password"
            defaultValue={value}
            className="bg-transparent p-0 outline-none"
            containerClass="border-none w-full h-full p-0"
            readOnly
            sx={{
              '& .css-10botns-MuiInputBase-input-MuiFilledInput-input ': {
                padding: '0',
              },
            }}
          />
        </Stack>
      )}
      {!copy &&
        !passwords &&
        (label === 'VPN Required' ? (
          <Chip
            label={value == 'true' ? 'yes' : 'no'}
            type={value == 'true' ? 'success' : 'error'}
          />
        ) : (
          <Text className="capitalize text-black">{value}</Text>
        ))}
    </Grid>
  );
};
export default DetailsList;
