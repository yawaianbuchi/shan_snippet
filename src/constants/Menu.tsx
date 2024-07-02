import React from 'react';
import { Icons } from '@/components/ui/images/Icons';

export type MenuProps = {
  label: string;
  icon?: React.ReactElement;
  href: string;
};

type MENU_LISTS_PROPS = MenuProps & {
  sublinks?: MenuProps[];
};

export const MENU_LISTS: MENU_LISTS_PROPS[] = [
  { label: 'Input', icon: <Icons.input />, href: '/' },
  {
    label: 'text',
    icon: <Icons.text />,
    href: '/text',
  },
  {
    label: 'Color',
    icon: <Icons.palette />,
    href: '/color',
  },
  {
    label: 'button',
    icon: <Icons.fileCopy />,
    href: '/button',
  },
  {
    label: 'chip',
    icon: <Icons.fileCopy />,
    href: '/chip',
  },
  { label: 'Table', icon: <Icons.fileCopy />, href: '/table' },
  { label: 'mascellaneous', icon: <Icons.fileCopy />, href: '/mas' },
  { label: 'Paginate-table', icon: <Icons.fileCopy />, href: '/paginate-table' },
  
];
