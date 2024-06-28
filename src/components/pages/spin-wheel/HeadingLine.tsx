import { Stack } from '@mui/material';
import React from 'react';
import Text from '@/components/ui/typo';
import { usePathname } from 'next/navigation';
function HeadingLine() {
  const pathname = usePathname();
  const header = pathname.split('/');
  const firstHeader = header[2].split('-').join(' ');
  const secondHeader = header[3];
  return (
    <Stack direction={'row'} gap={3}>
      <Text
        fontWeight={700}
        sx={{ marginBottom: '1rem' }}
        className={`text-xl capitalize text-gray-400`}
      >
        {firstHeader}
      </Text>

      <Text fontWeight={700}> &gt;</Text>
      <Text fontWeight={700} sx={{ marginBottom: '1rem' }} className="text-xl capitalize">
        {secondHeader}
      </Text>
    </Stack>
  );
}

export default HeadingLine;
