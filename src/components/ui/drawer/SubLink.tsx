'use client';
import { Collapse, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { Icons } from '../images/Icons';
import { MenuProps } from '@/constants/Menu';
import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';
import { ToggleState, useToggle } from '@/hooks/useToggle';

type SUB_MENU_LISTS_PROPS = MenuProps & {
  sublinks: MenuProps[];
};

const NavWithSubLink = ({ label, icon, ...props }: SUB_MENU_LISTS_PROPS) => {
  const pathname = usePathname();

  const [showSubLink, { toggle }] = useToggle(false) as [boolean, ToggleState];
  return (
    <>
      <ListItem onClick={toggle}>
        <ListItemButton
          className={cn(
            'gap-2 rounded-lg capitalize duration-75 hover:bg-green hover:text-white',
            pathname.includes(props.href) && 'bg-green text-white'
          )}
        >
          <ListItemIcon className="h-5 min-w-5">{icon}</ListItemIcon>
          <ListItemText primary={label} />
          <Icons.chevron_down
            className={cn('duration-100 ease-in', showSubLink ? 'rotate-180' : 'rotate-0')}
          />
        </ListItemButton>
      </ListItem>

      <Collapse in={showSubLink} timeout="auto" unmountOnExit>
        {props.sublinks.map((subLink, idx) => (
          <NavLink
            key={idx}
            href={`${props.href}/${subLink.href}`}
            label={subLink.label}
            isActive={pathname.includes(subLink.href) && pathname.includes(props.href)}
          />
        ))}
      </Collapse>
    </>
  );
};

export default NavWithSubLink;
