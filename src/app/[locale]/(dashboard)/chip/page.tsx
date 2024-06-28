import ComponentCopy from '@/components/shared/ComponentCopy';
import Card from '@/components/shared/card';
import Chip from '@/components/ui/chip';
import { NextPage } from 'next';
import React from 'react';

const ChipPage: NextPage = () => {
  return (
    <Card>
      <ComponentCopy
        component={<Chip label="Active" type="success" />}
        value='<Chip label="Active" type="success" />'
      />

      <ComponentCopy
        component={<Chip label="Active" type="error" />}
        value='<Chip label="Active" type="error" />'
      />

      <ComponentCopy
        component={<Chip label="Custom Width" type="success" className="w-[240px]" />}
        value='<Chip label="Custom Width" type="success" className="w-[240px]" />'
      />

      <ComponentCopy
        component={<Chip label="Hello world" type="success" />}
        value=' <Chip label="Hello world" type="success" />'
      />
    </Card>
  );
};

export default ChipPage;
