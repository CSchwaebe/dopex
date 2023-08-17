"use client";

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spacer,
  Button,
} from "@nextui-org/react";

const data = [
  { clamm: "Uniswap", baseAPY: 1.25, rewardAPY: 10.25 },
  { clamm: "Trader Joe", baseAPY: 2, rewardAPY: 130 },
  { clamm: "Camelot", baseAPY: 5, rewardAPY: 20 },
];

// Component
export default function Deposit() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold p-2 text-zinc-400">
        Deposit LP Tokens
      </h1>

      <Spacer y={5} />

      {/* Table */}
      <Table removeWrapper layout='fixed' aria-label="Options Market Table">
        <TableHeader>
          <TableColumn className="text-zinc-300 text-base">CLAMM</TableColumn>
          <TableColumn className="text-zinc-300 text-base">
            Base APY
          </TableColumn>
          <TableColumn className="text-zinc-300 text-base">
            Reward APY
          </TableColumn>
          <TableColumn className="text-zinc-300 text-base"></TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
          {data.map((row, index) => (
            <TableRow className="text-base" key={index}>
              <TableCell className="text-base">{row.clamm}</TableCell>
              <TableCell className="text-base">
                {row.baseAPY.toFixed(2)}%
              </TableCell>
              <TableCell className="text-base">
                {row.rewardAPY.toFixed(2)}%
              </TableCell>
              <TableCell className="text-base">
                <Button
                  color="secondary"
                  size="md"
                  variant="ghost"
                  radius="full"
                  className="text-foreground pl-4"
                >
                  Deposit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
