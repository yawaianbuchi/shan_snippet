import { Stack } from '@mui/material';
import React from 'react';
import Text from '@/components/ui/typo';
import ComponentCopy from '@/components/shared/ComponentCopy';

const TextPage = () => {
  return (
    <Stack gap={2}>
      <ComponentCopy
        component={<Text variant="h1">Hello world</Text>}
        value='<Text variant="h1">Hello world</Text>'
      />
      <ComponentCopy
        component={<Text variant="h2">Hello world</Text>}
        value='<Text variant="h2">Hello world</Text>'
      />{' '}
      <ComponentCopy
        component={<Text variant="h3">Hello world</Text>}
        value='<Text variant="h3">Hello world</Text>'
      />
      <ComponentCopy
        component={<Text variant="h4">Hello world</Text>}
        value='<Text variant="h4">Hello world</Text>'
      />
      <ComponentCopy
        component={<Text variant="h5">Hello world</Text>}
        value='<Text variant="h5">Hello world</Text>'
      />
      <ComponentCopy
        component={<Text variant="h6">Hello world</Text>}
        value='<Text variant="h6">Hello world</Text>'
      />
      <ComponentCopy
        component={<Text variant="body1">Hello world</Text>}
        value='<Text variant="body1">Hello world</Text>'
      />
      <ComponentCopy
        component={<Text variant="body2">Hello world</Text>}
        value='<Text variant="body2">Hello world</Text>'
      />
    </Stack>
  );
};

export default TextPage;
