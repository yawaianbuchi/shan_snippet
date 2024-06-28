import Grid from '@/components/layout/Grid';
import ComponentCopy from '@/components/shared/ComponentCopy';
import Card from '@/components/shared/card';
import Text from '@/components/ui/typo';
import React from 'react';

const Background = () => {
  return (
    <Card>
      <Text variant="h4">Background Color</Text>

      <Grid className="mt-3 xl:grid-cols-8">
        <ComponentCopy component={<div className="h-20 w-20 bg-green" />} value="bg-green" />
        <ComponentCopy component={<div className="h-20 w-20 bg-green-50" />} value="bg-green-50" />
        <ComponentCopy component={<div className="h-20 w-20 bg-red" />} value="bg-red" />
        <ComponentCopy component={<div className="h-20 w-20 bg-red-50" />} value="bg-red-50" />
        <ComponentCopy component={<div className="h-20 w-20 bg-yellow" />} value="bg-yellow" />
        <ComponentCopy component={<div className="h-20 w-20 bg-gray" />} value="bg-gray" />
        <ComponentCopy
          component={<div className="bg-gray-secondary h-20 w-20" />}
          value="bg-gray-secondary"
        />
        <ComponentCopy component={<div className="h-20 w-20 bg-gray-400" />} value="bg-gray-400" />
        <ComponentCopy component={<div className="h-20 w-20 bg-orange" />} value="bg-orange" />
      </Grid>
    </Card>
  );
};

export default Background;
