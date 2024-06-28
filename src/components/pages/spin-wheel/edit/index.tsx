'use client';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Icons } from '@/components/ui/images/Icons';
import Text from '@/components/ui/typo';
import EditTable from './EditTable';
import SpinSettings from './SpinSettings';
import Card from '@/components/shared/card';

function EditSpinWheel() {
  const [newreward, setNewReward] = useState(false);
  return (
    <>
      <Card className="mb-4 py-4">
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
      </Card>
      <Card className="py-4">
        <SpinSettings />
      </Card>
    </>
  );
}

export default EditSpinWheel;
