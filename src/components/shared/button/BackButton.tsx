import Button from '@/components/ui/button';
import { Icons } from '@/components/ui/images/Icons';
import Link from 'next/link';
import React from 'react';

const BackButton = ({ href }: { href?: string }) => {
  return (
    <Link href={href ?? '/'}>
      <Button
        variant="outlined"
        className="normal-case w-fit border-none 
   text-[16px] gap-1 hover:border-none text-black font-normal"
      >
        <Icons.arrow_long className="text-2xl" />
        Back
      </Button>
    </Link>
  );
};

export default BackButton;
