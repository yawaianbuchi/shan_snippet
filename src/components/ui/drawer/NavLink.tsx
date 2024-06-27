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
            'gap-2 rounded-lg text-sm capitalize duration-75 hover:bg-green hover:text-white group-hover:bg-white',
            isActive && 'bg-green font-bold text-white'
          )}
        >
          {icon ? (
            icon
          ) : (
            <div
              className={cn(
                'ml-4 h-1.5 w-1.5 list-disc rounded-full',
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
