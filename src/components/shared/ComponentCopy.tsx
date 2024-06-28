'use client';
import React, { ReactNode, useRef } from 'react';
import Button from '../ui/button';
import { Icons } from '../ui/images/Icons';
import { handleCopy } from '@/utils/Copy';
import { Stack } from '@mui/material';

const ComponentCopy = ({ component, value }: { component: ReactNode; value: string }) => {
  const ref = useRef<HTMLInputElement | null>(null);
  return (
    <Stack direction="row" alignItems="center">
      <input type="text" ref={ref} value={value} className="hidden" />
      {component}
      <Button variant="text" className="text-lg" onClick={() => handleCopy(ref)}>
        <Icons.fileCopy />
      </Button>
    </Stack>
  );
};

export default ComponentCopy;
