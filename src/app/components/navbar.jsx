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
      {/* Hamburger */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand className="hidden lg:flex gap-4">
          <a className="font-bold text-inherit antialiased hover:cursor-pointer">
                      <Image priority className="w-10" src={logo} alt="Dopex Logo" />

          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex lg:hidden gap-4" justify="center">
      <NavbarBrand>
          <a className="font-bold text-inherit antialiased hover:cursor-pointer">
                      <Image priority className="w-10" src={logo} alt="Dopex Logo" />

          </a>
        </NavbarBrand>
        </NavbarContent>

      {/* Center Links */}
      <NavbarContent className="hidden lg:flex gap-4" justify="center">
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
          <Link className="w-full" href="#" size="md" color="foreground">
            Trade
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
