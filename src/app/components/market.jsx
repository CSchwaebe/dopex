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

export default function Market({ selectedAsset, selectedOption, setSelectedOption }) {
    const [buySell, setBuySell] = useState("buy");   
    const [callPut, setCallPut] = useState("call");
    const [expiry, setExpiry] = useState("January 1, 2AM");


  const data = [
    { strike: 1750, breakEven: 1760.25, toBreakEven: 10.25, price: 10.25, asset: "ETH", type: "Call", side: "Buy"},
    { strike: 1800, breakEven: 1930, toBreakEven: 130, price: 130, asset: "ETH", type: "Call", side: "Buy" },
    { strike: 1850, breakEven: 520, toBreakEven: 20, price: 7.86, asset: "ETH", type: "Call", side: "Buy"},
    { strike: 1900, breakEven: 540, toBreakEven: 20, price: 130, asset: "ETH", type: "Call", side: "Buy" },
  ];

  return (
    <div className="p-4">
      <div className="w-full h-10 block ">
        {/* Buttons */}
        <div className="inline-block float-left lg:gap-4">
          <Tabs
            key="buy_sell"
            radius="sm"
            //size="sm"
            color="secondary"
            aria-label="buy or sell"
            selectedKey={buySell}
            onSelectionChange={setBuySell}
            
          >
            <Tab key="buy" title="Buy" />
            <Tab key="sell" title="Sell" />
          </Tabs>

          <Tabs
            key="call_put"
            radius="sm"
            //size="sm"
            color="secondary"
            aria-label="call or put"
            selectedKey={callPut}
            onSelectionChange={setCallPut}
          >
            <Tab key="call" title="Call" />
            <Tab key="put" title="Put" />
          </Tabs>
        </div>

        {/* Dropdown */}
        <div className="inline-block float-right lg:gap-4">
          <Dropdown
            placement="bottom-end"
            showArrow
            shadow="none"
            size="sm"
            classNames={{
              base: "py-1 px-1 border border-zinc-800 bg-gradient-to-br from-white to-zinc-200 dark:from-neutral dark:to-neutral",
              arrow: "bg-default-200",
            }}
          >
            <DropdownTrigger>
              <Button
                variant="light"
                size="sm"
                className="capitalize text-sm font-bold"
              >
                {expiry}
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              variant="faded"
              selectionMode="single"
              //selectedKeys={selectedKeys}
              onAction={setExpiry}
              aria-label="Dropdown menu with description"
            >
              {/* Markets */}
              <DropdownItem key="January 1, 2AM">January 1, 2AM</DropdownItem>
              <DropdownItem key="February 1, 2AM">February 1, 2AM</DropdownItem>

            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      <Spacer y={5} />
      {/* Table */}
      <div>
        <Table removeWrapper aria-label="Options Market Table">
          <TableHeader>
            <TableColumn className="text-zinc-300 text-xs lg:text-base">
              Strike
            </TableColumn>
            <TableColumn className="text-zinc-300 text-xs  lg:text-base ">
              Break Even
            </TableColumn>
            <TableColumn className="text-zinc-300 text-xs lg:text-base">
              To Break Even
            </TableColumn>
            <TableColumn className="text-zinc-300 text-xs lg:text-base">Price</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"No rows to display."}>
            {data.length === 0
              ? null
              : data.map((row, index) => (
                  <TableRow className="text-base" key={index}>
                    <TableCell className="text-xs lg:text-base">${row.strike.toFixed(2)}</TableCell>
                    <TableCell className="text-xs lg:table-cell lg:text-base">${row.breakEven.toFixed(2)}</TableCell>
                    <TableCell className="text-xs lg:table-cell lg:text-base">
                      ${row.toBreakEven.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-xs lg:text-base">
                      <Button
                        color="secondary"
                        size="md"
                        variant="ghost"
                        radius="full"
                        className="text-foreground pl-4"
                        onClick={() => setSelectedOption(row)}
                      >
                        <span className="w-16">${row.price.toFixed(2)}</span>
                        <Divider orientation="vertical" />
                        <PlusIcon className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
