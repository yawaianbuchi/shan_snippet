'use client';
import Button from '@/components/ui/button';
import Dialog from '@/components/ui/dialog';
import { Icons } from '@/components/ui/images/Icons';
import { ToggleState, useToggle } from '@/hooks/useToggle';
import React from 'react';
import Text from '@/components/ui/typo';
import { FormControlLabel, RadioGroup, Stack } from '@mui/material';
import Input from '@/components/ui/inputs/Input';
import Select from '@/components/ui/inputs/Select';
import Radio from '@/components/ui/inputs/Radio';
import Image from '@/components/ui/images/Image';

const SwapDialog = () => {
  const [show, { toggle }] = useToggle(false) as [boolean, ToggleState];
  return (
    <>
      <Button
        variant="text"
        className="flex items-center justify-center gap-2 bg-green-50 text-lg normal-case text-green"
        onClick={toggle}
      >
        <Icons.swap />
        Swap
      </Button>
      <Dialog open={show} setOpen={toggle} closeIcon>
        <Text variant="h6" mb={2}>
          Swap Game
        </Text>
        <Select
          placeholder="Select Main  Game"
          options={[
            { label: 'CHANGE', value: 'SH' },
            { label: 'ABC', value: 'SH' },
            { label: 'TUBORG', value: 'SH' },
            { label: 'HEINEKEN', value: 'SH' },
            { label: 'LEO', value: 'SH' },
          ]}
          onChange={() => alert('first')}
        />

        <Text className="text-gray-secondary" mt={3} mb={1}>
          Select Child Game
        </Text>

        <Input
          name="search"
          icon={<Icons.search />}
          flexRowReverse
          placeholder="Search by child game name"
          className="py-2"
          containerClass="rounded-lg"
        />

        <Stack py={2} gap={2}>
          <RadioGroup defaultValue={1} name="game">
            <FormControlLabel
              value={1}
              control={<Radio />}
              label={
                <Stack direction="row" gap={1} alignItems="center">
                  <Image src="/sample.png" alt="game" width={40} height={40} />
                  <Text>Game name</Text>
                </Stack>
              }
            />
            <FormControlLabel
              value={2}
              control={<Radio />}
              label={
                <Stack direction="row" gap={1} alignItems="center">
                  <Image src="/sample.png" alt="game" width={40} height={40} />
                  <Text>Game name</Text>
                </Stack>
              }
            />
          </RadioGroup>
        </Stack>
      </Dialog>
    </>
  );
};

export default SwapDialog;
