import { Stack } from '@mui/material';
import React, { ReactNode } from 'react';

const Layout = ({ children, background }: { children: ReactNode; background: ReactNode }) => {
  return (
    <Stack gap={2}>
      {children}
      {background}
    </Stack>
  );
};

export default Layout;
