"use client";

// Imports
// ========================================================
import React from "react";
import Image from "next/image";
import logo from "src/assets/logo.svg";
import twitter from "src/assets/twitter.svg";
import { Card } from "@nextui-org/react";

// Page
// ========================================================
export default function Footer() {
  // State / Props

  // Render
  return (
    <Card radius="none" shadow="none" className="bg-background">
      <footer className="p-10 text-foreground">
        <div className="text-center">
          <div className="flex justify-center">
            <Image
              priority
              className="w-9 flex-none"
              src={logo}
              alt="Dopex Logo"
            />
          </div>

          <p className="font-bold text-zinc-400">
            <br />
          </p>
          <p className="text-zinc-400">Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <div className="flex justify-center pt-4">
            <a href="https://twitter.com/dopex_io" className="flex-none">
              <Image priority className="" src={twitter} alt="Twitter Logo" />
            </a>
          </div>
        </div>
      </footer>
    </Card>
  );
}
