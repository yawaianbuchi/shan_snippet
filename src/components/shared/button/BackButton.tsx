import Button from '@/components/ui/button';
import { Icons } from '@/components/ui/images/Icons';
import Link from 'next/link';
import React from 'react';

const BackButton = ({ href }: { href?: string }) => {
  return (
    <Link href={href ?? '/'}>
      <Button
        variant="outlined"
        className="w-fit gap-1 border-none text-[16px] font-normal normal-case text-black hover:border-none"
      >
        <Icons.arrow_long className="text-2xl" />
        Back
      </Button>
    </Link>
  );
};

export default BackButton;
