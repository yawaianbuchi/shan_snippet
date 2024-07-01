'use client';
import { Box } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import { MAS } from './data';
import ComponentCopy from '@/components/shared/ComponentCopy';
import Datepicker from '@/components/ui/calendar/Datepicker';
import { Icons } from '@/components/ui/images/Icons';
import Text from '@/components/ui/typo';
import Grid from '@/components/layout/Grid';
import Card from '@/components/shared/card';
import Hooks from './hooks';

const MasPage: NextPage = () => {
  return (
    <Box>
      <Grid>
        <Card>
          <Text variant="h4">Default Date Picker</Text>
          <ComponentCopy
            component={<Datepicker onChange={(e) => alert(e)} />}
            value="<Datepicker onChange={(e) => console.log(e)} />"
          />
        </Card>

        <Card>
          <Text variant="h4">Custom Date Picker</Text>
          <ComponentCopy
            component={
              <Datepicker
                onChange={(e) => alert(e)}
                icon={<Icons.search className="ml-3 text-lg" />}
                className="mt-3 flex-row-reverse"
                placeholder="placeholder"
                calendarClass=""
              />
            }
            value={`<Datepicker
        onChange={(e) => console.log(e)}
        icon={<Icons.search className="ml-3 text-lg" />}
        className="mt-3 flex-row-reverse"
        placeholder="placeholder"
        calendarClass=''
      />`}
          />
        </Card>
        <Hooks />
      </Grid>

      <Grid className="mt-5 items-start">
        {MAS.map((btn, idx) => (
          <ComponentCopy key={idx} component={btn.com} value={btn.val} />
        ))}
      </Grid>
    </Box>
  );
};

export default MasPage;
