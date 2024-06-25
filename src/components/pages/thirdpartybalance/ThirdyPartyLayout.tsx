import Grid from '@/components/layout/Grid';
import React from 'react';
import ThirdPartyCard from './components/card/thirdpartycard';

const ThirdyPartyLayout = () => {
  return (
    <Grid className="mt-4">
      <ThirdPartyCard />
      <ThirdPartyCard />
      <ThirdPartyCard />
      <ThirdPartyCard />
      <ThirdPartyCard />
    </Grid>
  );
};

export default ThirdyPartyLayout;
