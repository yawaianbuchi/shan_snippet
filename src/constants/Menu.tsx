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
  { label: 'dashboard', icon: <Icons.dashboard />, href: '/dashboard' },
  {
    label: 'third party balance',
    icon: <Icons.card />,
    href: '/thirdparty-balance',
  },
  {
    label: 'game tracking panel',
    icon: <Icons.game_tracking />,
    href: '/game-track-panel',
  },
  {
    label: 'game list',
    icon: <Icons.game_list />,
    href: '/game-list',
    sublinks: [
      { label: 'main game', href: '/main-game' },
      { label: 'child game', href: '/child-game' },
      { label: 'top winner game', href: '/topwinner-game' },
      { label: 'hot game', href: '/hot-game' },
      { label: 'popular game', href: '/popular-game' },
    ],
  },
  {
    label: 'Player',
    icon: <Icons.players />,
    href: '/player',
    sublinks: [
      { label: 'all players', href: '/all' },
      { label: 'top winners', href: '/top-winner' },
      { label: 'promocode', href: '/topwinner-game' },
      { label: 'hot game', href: '/hot-game' },
      { label: 'popular game', href: '/popular-game' },
    ],
  },
  { label: 'member levels', icon: <Icons.member_levels />, href: '/member-levels' },
  {
    label: 'transactions',
    icon: <Icons.transactions />,
    href: '/transactions',
    sublinks: [
      { label: 'top up', href: '/top-up' },
      { label: 'withdraw', href: '/withdraw' },
      { label: 'games', href: '/games' },
      { label: 'top-up bonus', href: '/topup-bonus' },
      { label: 'register bonus', href: '/register-bonus' },
      { label: 'referral bonus', href: '/referral-bonus' },
      { label: 'pocket bonus', href: '/pocket-bonus' },
    ],
  },
  {
    label: 'spin wheel',
    icon: <Icons.spin_wheel />,
    href: '/spin-wheel',
    sublinks: [
      { label: 'manage', href: '/manage' },
      { label: 'spin history', href: '/history' },
    ],
  },
  {
    label: 'pocket money',
    icon: <Icons.pocker_money />,
    href: '/pocket-money',
    sublinks: [
      { label: 'active pocket money', href: '/active' },
      { label: 'history', href: '/history' },
    ],
  },
  {
    label: 'share card bonus',
    icon: <Icons.share_card_bonus />,
    href: '/share-card-bonus',
    sublinks: [
      { label: 'register share', href: '/register' },
      { label: 'top-up share', href: '/topup' },
      { label: 'withdraw share', href: '/withdraw' },
      { label: 'spin share', href: '/spin' },
      { label: 'pocket money share', href: '/pocket-money' },
      { label: 'in app share', href: '/app' },
      { label: 'share bonux setting', href: '/share' },
    ],
  },
  { label: 'inbox', icon: <Icons.inbox />, href: '/inbox' },
  {
    label: 'auto message',
    icon: <Icons.auto_message />,
    href: '/auto-message',
  },
  { label: 'channel', icon: <Icons.channel />, href: '/channel' },
  {
    label: 'admin management',
    icon: <Icons.admin_management />,
    href: '/admin-management',
    sublinks: [
      { label: 'top-up admin', href: '/top-up' },
      { label: 'withdraw', href: '/withdraw' },
      { label: 'services admin', href: '/services' },
      { label: 'pay list admin', href: '/paylist' },
      { label: 'custom admin', href: '/custom' },
      { label: 'roles and permissions', href: '/roles-permission' },
    ],
  },
  {
    label: 'payment category',
    icon: <Icons.payment_category />,
    href: '/payment-category',
  },
  {
    label: 'account setting',
    icon: <Icons.card />,
    href: '/account-setting',
  },
  {
    label: 'reports',
    icon: <Icons.report />,
    href: '/reports',
    sublinks: [
      { label: 'active pocket money', href: '/active' },
      { label: 'history', href: '/history' },
    ],
  },
  {
    label: 'settings',
    icon: <Icons.setting />,
    href: '/settings',
    sublinks: [
      { label: 'active pocket money', href: '/active' },
      { label: 'history', href: '/history' },
    ],
  },
];
