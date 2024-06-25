import CusContainer from '@/components/ui/cuscontainer';
import Button from '@mui/material/Button';
import React from 'react';
import { Icons } from '@/components/ui/images/Icons';
import Text from '@/components/ui/typo';
function EditSpinWheel() {
  return (
    <CusContainer>
      <Button
        variant="text"
        className="text-gray-600 capitalize  -ml-5 hover:bg-transparent"
        startIcon={<Icons.arrow_long />}
      >
        Back
      </Button>
      <Text className="text-xl font-bold my-4">Spin Wheel Rewards (Level 1)</Text>
      <Button
        className="bg-green text-white hover:bg-green/90"
        size="large"
        startIcon={<Icons.plus_circle style={{ fontSize: '15px' }} />}
      >
        New Reward
      </Button>
    </CusContainer>
  );
}

export default EditSpinWheel;
