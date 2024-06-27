'use client';
import CusContainer from '@/components/ui/cuscontainer';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Icons } from '@/components/ui/images/Icons';
import Text from '@/components/ui/typo';
import EditTable from './EditTable';
import SpinSettings from './SpinSettings';

function EditSpinWheel() {
  const [newreward, setNewReward] = useState(false);
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
          onClick={() => setNewReward(true)}
        >
          New Reward
        </Button>
        <EditTable newreward={newreward} setNewReward={setNewReward} />
      </CusContainer>
      <CusContainer>
        <SpinSettings />
      </CusContainer>
    </>
  );
}

export default EditSpinWheel;
