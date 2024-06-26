import React from 'react';
import Text from '@/components/ui/typo';
import { Stack } from '@mui/material';
import TextField from '@/components/ui/inputs/TextField';

function SpinTextField() {
  return (
    <div className="flex-1">
      <Stack direction={'row'} justifyContent={'space-between'} className="w-[200px]" gap={2}>
        <div className="flex-grow">
          {/* <input type="text" value="50" /> */}
          50
        </div>
        <div className="">
          <input type="text" value="two" className="w-fit bg-red" />
        </div>
      </Stack>
    </div>
  );
}

function SpinInput() {
  return (
    <div className="w-fit rounded-lg bg-gray-100 p-3">
      <Text className="mb-3">Label</Text>
      <Stack direction={'row'}>
        <SpinTextField />
      </Stack>
    </div>
  );
}

export default SpinInput;
