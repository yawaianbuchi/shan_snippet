import { cn } from '@/utils/cn';
import { ListItem, ListItemButton } from '@mui/material';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type NavLinkProps = {
  isActive: boolean;
  href: string;
  label: string;
  icon?: ReactNode;
};
const NavLink = ({ href, isActive, label, icon }: NavLinkProps) => {
  return (
    <Link href={href}>
      <ListItem>
        <ListItemButton
          className={cn(
            'gap-2 capitalize rounded-lg group-hover:bg-white hover:bg-green hover:text-white duration-75 text-sm',
            isActive && 'text-white bg-green font-bold'
          )}
        >
          {icon ? (
            icon
          ) : (
            <div
              className={cn(
                'w-1.5 h-1.5 list-disc rounded-full ml-4',
                isActive ? 'bg-green hover:bg-gray-400' : 'bg-gray-400'
              )}
            />
          )}
          <span className="inline-block py-1.5">{label}</span>
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default NavLink;
