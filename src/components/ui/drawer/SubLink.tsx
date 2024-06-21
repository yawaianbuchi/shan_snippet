"use client";
import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Icons } from "../images/Icons";
import { MenuProps } from "@/constants/Menu";
import { cn } from "@/util";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { ToggleState, useToggle } from "@/hooks/useToggle";

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
            "gap-2 capitalize rounded-lg hover:bg-green hover:text-white duration-75",
            pathname.includes(props.href) && "bg-green text-white"
          )}
        >
          <ListItemIcon className="min-w-5 h-5">{icon}</ListItemIcon>
          <ListItemText primary={label} />
          <Icons.chevron_down
            className={cn(
              "duration-100 ease-in",
              showSubLink ? "rotate-180" : "rotate-0"
            )}
          />
        </ListItemButton>
      </ListItem>

      <Collapse in={showSubLink} timeout="auto" unmountOnExit>
        {props.sublinks.map((subLink, idx) => (
          <NavLink
            key={idx}
            href={`${props.href}/${subLink.href}`}
            label={subLink.label}
            isActive={
              pathname.includes(subLink.href) && pathname.includes(props.href)
            }
          />
        ))}
      </Collapse>
    </>
  );
};

export default NavWithSubLink;
