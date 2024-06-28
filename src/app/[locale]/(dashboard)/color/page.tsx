import Grid from '@/components/layout/Grid';
import ComponentCopy from '@/components/shared/ComponentCopy';
import Card from '@/components/shared/card';
import Text from '@/components/ui/typo';
import { Box } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';

const TextColor: NextPage = () => {
  return (
    <Card>
      <Text variant="h4">Text Color Color</Text>

      <Grid>
        <Box>
          <ComponentCopy
            component={<Text className="text-green">Text</Text>}
            value='<Text className="text-green">Text</Text>'
          />
          <ComponentCopy
            component={<Text className="text-green-50">Text</Text>}
            value='<Text className="text-green-50">Text</Text>'
          />
          <ComponentCopy
            component={<Text className="text-red">Text</Text>}
            value='<Text className="text-red">Text</Text>'
          />
          <ComponentCopy
            component={<Text className="text-red-50">Text</Text>}
            value='<Text className="text-red-50">Text</Text>'
          />
          <ComponentCopy
            component={<Text className="text-yellow">Text</Text>}
            value='<Text className="text-yellow">Text</Text>'
          />
          <ComponentCopy
            component={<Text className="text-gray">Text</Text>}
            value='<Text className="text-gray">Text</Text>'
          />

          <ComponentCopy
            component={<Text className="text-gray-secondary">Text</Text>}
            value='<Text className="text-gray-secondary">Text</Text>'
          />

          <ComponentCopy
            component={<Text className="text-gray-400">Text</Text>}
            value='<Text className="text-gray-400">Text</Text>'
          />

          <ComponentCopy
            component={<Text className="text-black">Text</Text>}
            value='<Text className="text-black">Text</Text>'
          />
        </Box>

        <Box>
          <ComponentCopy
            component={
              <Text variant="h4" className="text-green">
                Text
              </Text>
            }
            value='<Text className="text-green">Text</Text>'
          />
          <ComponentCopy
            component={
              <Text variant="h4" className="text-green-50">
                Text
              </Text>
            }
            value='<Text className="text-green-50">Text</Text>'
          />
          <ComponentCopy
            component={
              <Text variant="h4" className="text-red">
                Text
              </Text>
            }
            value='<Text className="text-red">Text</Text>'
          />
          <ComponentCopy
            component={
              <Text variant="h4" className="text-red-50">
                Text
              </Text>
            }
            value='<Text className="text-red-50">Text</Text>'
          />
          <ComponentCopy
            component={
              <Text variant="h4" className="text-yellow">
                Text
              </Text>
            }
            value='<Text className="text-yellow">Text</Text>'
          />
          <ComponentCopy
            component={
              <Text variant="h4" className="text-gray">
                Text
              </Text>
            }
            value='<Text className="text-gray">Text</Text>'
          />

          <ComponentCopy
            component={
              <Text variant="h4" className="text-gray-secondary">
                Text
              </Text>
            }
            value='<Text className="text-gray-secondary">Text</Text>'
          />

          <ComponentCopy
            component={
              <Text variant="h4" className="text-gray-400">
                Text
              </Text>
            }
            value='<Text className="text-gray-400">Text</Text>'
          />

          <ComponentCopy
            component={
              <Text variant="h4" className="text-black">
                Text
              </Text>
            }
            value='<Text className="text-black">Text</Text>'
          />
        </Box>
      </Grid>
    </Card>
  );
};

export default TextColor;
