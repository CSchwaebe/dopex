"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  NavbarMenuToggle,
} from "@nextui-org/react";
import logo from "src/assets/logo.svg";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" height={"5rem"} position="sticky">
      {/* Logo and Hamburger */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Image priority className="w-10" src={logo} alt="Dopex Logo" />
          <p className="font-bold text-inherit pl-2 antialiased hidden md:flex">
            DOPEX
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* Center Links */}
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/" color="foreground">
            Trade
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Connect Button */}
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <ConnectButton
            showBalance={false}
            chainStatus={"icon"}
            accountStatus={{ smallScreen: "avatar", largeScreen: "full" }}
          />
        </NavbarItem>
      </NavbarContent>

      {/* Hamburger Contents */}
      <NavbarMenu>
        <NavbarMenuItem key="trade">
          <Link className="w-full" href="#" size="lg">
            Trade
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
