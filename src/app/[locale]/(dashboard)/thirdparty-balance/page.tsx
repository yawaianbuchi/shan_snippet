import { NextPage } from 'next';
import React from 'react';
import Card from '@/components/shared/card';
import Text from '@/components/ui/typo';
import ThirdyPartyLayout from '@/components/pages/thirdpartybalance/ThirdyPartyLayout';

const ThirdPartyBalancePage: NextPage = () => {
  return (
    <Card className="p-4">
      <Text variant="h6" fontWeight="semibold">
        Third Party Balance
      </Text>

      <ThirdyPartyLayout />
    </Card>
  );
};

export default ThirdPartyBalancePage;
