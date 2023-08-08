"use client";

// Imports
// ========================================================
import React from "react";
import Image from "next/image";
import logo from "src/assets/logo.svg";
import twitter from "src/assets/twitter.svg";

// Page
// ========================================================
export default function Footer() {
  // State / Props

  // Render
  return (
    <div>
      <footer className="footer footer-center p-10 glass text-primary-content bg-accent bg-none">
        <div>
        <Image priority className="w-9" src={logo} alt="Dopex Logo" />

          <p className="font-bold text-neutral">
            DOPEX <br />
            
          </p>
          <p className="text-neutral">Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/fantasyprem_xyz">
            <Image priority className="" src={twitter} alt="Twitter Logo" />

            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
