import { Box } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import { MAS } from './data';
import ComponentCopy from '@/components/shared/ComponentCopy';

const MasPage: NextPage = () => {
  return (
    <Box>
      {MAS.map((btn, idx) => (
        <ComponentCopy key={idx} component={btn.com} value={btn.val} />
      ))}
    </Box>
  );
};

export default MasPage;
