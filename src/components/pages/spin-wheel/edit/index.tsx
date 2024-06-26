'use client';
import CusContainer from '@/components/ui/cuscontainer';
import Button from '@mui/material/Button';
import React from 'react';
import { Icons } from '@/components/ui/images/Icons';
import Text from '@/components/ui/typo';
import Stack from '@mui/material/Stack';
import CustomSwitch from '@/components/ui/customswitch';
import { FormControlLabel, Checkbox, Grid, Box } from '@mui/material';
import TextField from '@/components/ui/inputs/TextField';

import Link from 'next/link';
import SignUp from '../../auth/SignUp';
import SpinInput from './SpinInput';
function EditSpinWheel() {
  const [checked, setChecked] = React.useState(true);
  return (
    <>
      <CusContainer className="mb-4">
        <Button
          variant="text"
          className="-ml-5 capitalize text-gray-600 hover:bg-transparent"
          startIcon={<Icons.arrow_long />}
        >
          Back
        </Button>
        <Text className="my-4 text-xl font-bold">Spin Wheel Rewards (Level 1)</Text>
        <Button
          className="mb-4 bg-green text-white hover:bg-green/90"
          size="large"
          startIcon={<Icons.plus_circle style={{ fontSize: '15px' }} />}
        >
          New Reward
        </Button>
        {/* <EditTable /> */}
        <div>Table goes here</div>
      </CusContainer>
      <CusContainer>
        <Stack direction="row" alignItems={'center'} justifyContent={'space-between'}>
          <Text className="my-4 text-xl font-bold">Spin Settings</Text>
          <Stack direction={'row'} gap={1} alignItems={'center'}>
            <CustomSwitch isOpen={checked} handleToggle={() => setChecked((pre) => !pre)} />
            <Text className={`font-semibold ${checked ? 'text-green' : 'text-red'}`}>
              {checked ? 'On' : 'Off'}
            </Text>
          </Stack>
        </Stack>
        <SpinInput />
      </CusContainer>
    </>
  );
}

export default EditSpinWheel;
