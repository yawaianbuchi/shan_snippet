'use client';
import React, { PropsWithChildren } from 'react';
import Text from '../typo';
import { usePathname } from 'next/navigation';
import Stack from '@mui/material/Stack';

function CusContainer({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const header = pathname.split('/');
  const firstHeader = header[2].split('-').join(' ');
  const secondHeader = header[3];
  return (
    <div className="bg-white min-h-[80vh] p-4 rounded-lg">
      <Stack direction={'row'} gap={3}>
        <Text
          fontWeight={700}
          sx={{ marginBottom: '1rem' }}
          className={`text-xl text-gray-400 capitalize`}
        >
          {firstHeader}
        </Text>
        {secondHeader && (
          <>
            <Text fontWeight={700}> &gt;</Text>
            <Text fontWeight={700} sx={{ marginBottom: '1rem' }} className="text-xl capitalize">
              {secondHeader}
            </Text>
          </>
        )}
      </Stack>

      {children}
    </div>
  );
}

export default CusContainer;
