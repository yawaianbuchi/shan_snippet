"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MENU_LISTS } from "@/constants/Menu";
import { Icons } from "../images/Icons";
import Text from "../typo";
import NavWithSubLink from "./SubLink";
import Button from "../button";
import { Avatar, Stack } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import NavLink from "./NavLink";

const drawerWidth = 280;

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();
  const pathname = usePathname();

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
    startTransition(() => {
      router.push("/login");
    });
  };

  const drawer = (
    <Box className="relative">
      <Toolbar>
        <Icons.logo />
        <Text color="green" fontWeight="bold" ml={1}>
          SHAN GAMING
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
              isActive={pathname.includes(href)}
              icon={icon}
              label={label}
            />
          )
        )}
      </List>

      <div className="h-14" />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        p={2}
        className="bg-green h-14 absolute w-full bottom-0"
      >
        <Stack
          direction="row"
          justifyItems="center"
          alignItems="center"
          gap={2}
        >
          <Avatar alt="roger" />
          <Text color="white" fontWeight="bold">
            Roger
          </Text>
        </Stack>
        <Button onClick={handleLogout} variant="text">
          <Icons.logout className="text-white text-2xl" />
        </Button>
      </Stack>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="bg-gray min-h-screen">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "skyblue",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            1
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="text-black"
          >
            search bar
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
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
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
