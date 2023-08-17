'use client';

// Imports
// ========================================================
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  ButtonGroup,
  Button,
  Spacer,
  Tab,
  Tabs,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Divider,
} from "@nextui-org/react";

import {
  ChevronDownIcon,
  PlusIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/solid";

// Component
// ========================================================
export default function Deposit() {
    // State / Props
    const [buySell, setBuySell] = useState("buy");   
    const [callPut, setCallPut] = useState("call");
    const [expiry, setExpiry] = useState("January 1, 2AM");


  const data = [
    { clamm: "Uniswap", baseAPY: 1.25, rewardAPY: 10.25, asset: "ETH", type: "Call", side: "Buy"},
    { clamm: "Trader Joe", baseAPY: 2, rewardAPY: 130,  asset: "ETH", type: "Call", side: "Buy" },
    { clamm: "Camelot", baseAPY: 5, rewardAPY: 20,  asset: "ETH", type: "Call", side: "Buy"},
  ];



    // Render
    return (
        <div className="p-4">
      <div className="w-full h-10 block ">
        {/* Buttons */}
        <div className="inline-block gap-4">
          <h1 className="text-2xl font-bold p-2 text-zinc-400">Deposit LP Tokens</h1>
        </div>

        {/* Dropdown */}
       
      </div>

      <Spacer y={5} />
      {/* Table */}
      <div>
        <Table removeWrapper aria-label="Options Market Table">
          <TableHeader>
            <TableColumn className="text-zinc-300 text-base">
              CLAMM
            </TableColumn>
            <TableColumn className="text-zinc-300 text-base">
              Base APY
            </TableColumn>
            <TableColumn className="text-zinc-300 text-base">
              Reward APY
            </TableColumn>
            <TableColumn className="text-zinc-300 text-base"></TableColumn>
          </TableHeader>
          <TableBody emptyContent={"No rows to display."}>
            {data.length === 0
              ? null
              : data.map((row, index) => (
                  <TableRow className="text-base" key={index}>
                    <TableCell className="text-base">{row.clamm}</TableCell>
                    <TableCell className="text-base">{row.baseAPY.toFixed(2)}%</TableCell>
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
                        //onClick={() => setSelectedOption(row)}
                      >
                        <span className="w-16">Deposit</span>
                        
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>
    </div>



    );
};

