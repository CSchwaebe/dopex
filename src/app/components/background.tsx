"use client";

// Imports
// ========================================================
import React from "react";

// Page
// ========================================================
export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-1/1 min-h-screen "
      style={{
        background:
          "linear-gradient(270deg, rgba(30,39,53,1) 0%, rgba(27,33,47,1) 100%)",
      }}
    >
      {children}
    </div>
  );
}
