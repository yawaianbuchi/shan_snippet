'use client';
import { NextPage } from 'next';
import { Props } from '@/types/Params';
import TextField from '@/components/ui/inputs/TextField';
import Grid from '@/components/layout/Grid';
import ComponentCopy from '@/components/shared/ComponentCopy';
import Select from '@/components/ui/inputs/Select';

const DashboardPage: NextPage<Props> = () => {
  // const { t } = await initTranslations(locale, LANG_NAMESPACE);
  return (
    <Grid>
      <ComponentCopy component={<TextField label="Name" />} value='<TextField label="name" />' />

      <ComponentCopy
        component={<TextField label="Password" password />}
        value='<TextField label="name" password />'
      />

      <ComponentCopy
        component={
          <Select
            label="Choose Me"
            options={[
              { label: 'One', value: 1 },
              { label: 'One', value: 1 },
              { label: 'One', value: 1 },
            ]}
            onChange={(e) => console.log(e)}
          />
        }
        value="<Select label='Choose Me' options={[
          { label: 'One', value: 1},
          { label: 'One', value: 1},
          { label: 'One', value: 1},
        ]} 
          onChange={e => console.log(e)}
        />"
      />
    </Grid>
  );
};

export default DashboardPage;
