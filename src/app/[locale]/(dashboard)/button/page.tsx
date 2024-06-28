import Grid from '@/components/layout/Grid';
import Card from '@/components/shared/card';
import { Icons } from '@/components/ui/images/Icons';
import { Button } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import { BUTTON } from './data';
import ComponentCopy from '@/components/shared/ComponentCopy';

const ButtonPage: NextPage = () => {
  return (
    <Card className="p-8">
      <Grid>
        {BUTTON.map((btn, idx) => (
          <ComponentCopy key={idx} component={btn.com} value={btn.val} />
        ))}
      </Grid>
    </Card>
  );
};

export default ButtonPage;
