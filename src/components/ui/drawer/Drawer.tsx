'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MENU_LISTS } from '@/constants/Menu';
import { Icons } from '../images/Icons';
import Text from '../typo';
import NavWithSubLink from './SubLink';
import Button from '../button';
import { Avatar, Stack } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import NavLink from './NavLink';
import Card from '@/components/shared/card';
import Chip from '../chip';
import Link from 'next/link';
import LocalizationPopUp from '../popup/LocalizationPopUp';
import { useSessionLogout } from '@/lib/session';
import { useTranslation } from 'react-i18next';

const drawerWidth = 280;

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

export default function ResponsiveDrawer(props: Props) {
  const { trigger: logoutTrigger } = useSessionLogout();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const router = useRouter();
  const [isPending] = React.useTransition();
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleLogout = () => {
    React.startTransition(() => {
      logoutTrigger().then(() => {
        router.push(`/${currentLocale}/login`);
        router.refresh();
      });
    });
  };

  if (isPending) {
    return <div className="h-full w-full bg-black/45" />;
  }

  const drawer = (
    <Box className="relative">
      <Toolbar>
        <Icons.logo />
        <Text color="green" fontWeight="bold" ml={1}>
          HELLO WORLD
        </Text>
      </Toolbar>

      <List>
        {MENU_LISTS.map(({ label, href, icon, ...rest }, idx) =>
          rest.sublinks ? (
            <NavWithSubLink
              key={idx}
              icon={icon}
              label={label}
              href={href}
              sublinks={rest.sublinks}
              {...rest}
            />
          ) : (
            <NavLink
              key={idx}
              href={href}
              isActive={
                label === 'dashboard' &&
                /^\/(en|my|sh|zh)$/.test('/' + pathname.split('/').slice(-1)[0])
                  ? pathname.includes(href)
                  : `/${pathname.split('/').slice(-1)[0]}` === href
              }
              icon={icon}
              label={label}
            />
          )
        )}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          height: '100vh',
          overflowY: 'scroll',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
