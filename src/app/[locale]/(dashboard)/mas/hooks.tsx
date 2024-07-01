import Card from '@/components/shared/card';
import React from 'react';
import Text from '@/components/ui/typo';
import ComponentCopy from '@/components/shared/ComponentCopy';
import Grid from '@/components/layout/Grid';

const Hooks = () => {
  return (
    <Card>
      <Text variant="h6">Hooks</Text>

      <Grid className="grid-cols-5">
        <ComponentCopy
          component={<Text>Toggle Hook</Text>}
          value="  const [show, { toggle }] = useToggle(false) as [boolean, ToggleState];"
        />

        <ComponentCopy
          component={<Text>Query Hook</Text>}
          value="const  searchParams, updateQueryString} = useQueryString();"
        />

        <ComponentCopy
          component={<Text>Client Translate Hook</Text>}
          value={`
          import { useT } from '@/utils/translate';
          <Text>{useT("key_name")}</Text>
          `}
        />
      </Grid>
    </Card>
  );
};

export default Hooks;
