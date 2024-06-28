import { Box, Stack } from '@mui/material';
import React from 'react';
import Text from '@/components/ui/typo';
import Card from '@/components/shared/card';
import Grid from '@/components/layout/Grid';

export const MAS = [
  {
    com: (
      <Box>
        <Text variant="h6">Card</Text>

        <Card>
          <Text>Hello world</Text>
        </Card>
      </Box>
    ),
    val: '<Card><Text>Hello world</Text></Card>',
  },
  {
    com: (
      <Box>
        <Text variant="h6">Grid</Text>
        <Grid>
          <Card>
            <Text>Hello world</Text>
          </Card>
          <Card>
            <Text>Hello world</Text>
          </Card>
          <Card>
            <Text>Hello world</Text>
          </Card>
          <Card>
            <Text>Hello world</Text>
          </Card>
          <Card>
            <Text>Hello world</Text>
          </Card>
        </Grid>
      </Box>
    ),
    val: '<Grid><Card><Text>Hello world</Text></Card><Card><Text>Hello world</Text></Card><Card><Text>Hello world</Text></Card><Card><Text>Hello world</Text></Card><Card><Text>Hello world</Text></Card></Grid>',
  },
  {
    com: (
      <Box>
        <Text variant="h6">Stack</Text>
        <Stack gap={2}>
          <Card>
            <Text>Hello world</Text>
          </Card>
          <Card>
            <Text>Hello world</Text>
          </Card>
          <Card>
            <Text>Hello world</Text>
          </Card>
          <Card>
            <Text>Hello world</Text>
          </Card>
          <Card>
            <Text>Hello world</Text>
          </Card>
        </Stack>
      </Box>
    ),
    val: '<Stack gap={2} direction="row"><Card><Text>Hello world</Text></Card><Card><Text>Hello world</Text></Card><Card><Text>Hello world</Text></Card><Card><Text>Hello world</Text></Card><Card><Text>Hello world</Text></Card></Stack>',
  },
  {
    com: (
      <Box>
        <Text variant="h6">Column Stack With Full Width</Text>
        <Stack
          gap={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="w-full"
        >
          <Card>
            <Text>Hello world</Text>
          </Card>
          <Card>
            <Text>Hello world</Text>
          </Card>
          <Card>
            <Text>Hello world</Text>
          </Card>
          <Card>
            <Text>Hello world</Text>
          </Card>
          <Card>
            <Text>Hello world</Text>
          </Card>
        </Stack>
      </Box>
    ),
    val: '<Stack gap={2} direction="row" justifyContent="space-between" alignItems="center"  className="w-full"><Card><Text>Hello world</Text></Card><Card><Text>Hello world</Text></Card><Card><Text>Hello world</Text></Card><Card><Text>Hello world</Text></Card><Card><Text>Hello world</Text></Card></Stack>',
  },
];
