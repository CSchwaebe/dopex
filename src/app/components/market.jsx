import React from "react";
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

import { ChevronDownIcon, PlusIcon, PlusSmallIcon } from "@heroicons/react/24/solid";

export default function Market() {
  const data = [
    { strike: 500, breakEven: 520, toBreakEven: "5%", price: 120 },
    { strike: 520, breakEven: 540, toBreakEven: "4%", price: 130 },
    // ... other rows data
  ];

  return (
    <div className="p-4">
      {/* Top Row */}
      <div className="w-full h-10 block ">
        {/* Buttons */}
        <div className="inline-block float-left gap-4">
          <Tabs
            key="buy_sell"
            radius="sm"
            color="secondary"
            aria-label="buy or sell"
          >
            <Tab key="buy" title="Buy" />
            <Tab key="sell" title="Sell" />
          </Tabs>

          <Tabs
            key="call_put"
            radius="sm"
            color="secondary"
            aria-label="call or put"
          >
            <Tab key="call" title="Call" />
            <Tab key="put" title="Put" />
          </Tabs>
        </div>

        {/* Dropdown */}
        <div className="inline-block float-right gap-4">
          <Dropdown
            placement="bottom-end"
            showArrow
            shadow="none"
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
                {"Expiry"}
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              variant="faded"
              selectionMode="single"
              //selectedKeys={selectedKeys}
              //onSelectionChange={setSelectedKeys}
              aria-label="Dropdown menu with description"
            >
              {/* Markets */}

              <DropdownItem key="date">1/1/2024</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      <Spacer y={5} />
      {/* Table */}
      <div>
        <Table removeWrapper aria-label="Options Market Table">
          <TableHeader>
            <TableColumn className="text-zinc-300 text-base">Strike</TableColumn>
            <TableColumn className="text-zinc-300 text-base">Break Even</TableColumn>
            <TableColumn className="text-zinc-300 text-base">To Break Even</TableColumn>
            <TableColumn className="text-zinc-300 text-base">Price</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"No rows to display."}>
            {data.length === 0
              ? null
              : data.map((row, index) => (
                  <TableRow className="text-base" key={index}>
                    <TableCell className="text-base">{row.strike}</TableCell>
                    <TableCell className="text-base" >{row.breakEven}</TableCell>
                    <TableCell className="text-base" >{row.toBreakEven}</TableCell>
                    <TableCell  className="text-base">
                      <Button 
                      color="secondary"
                      size="md"
                      variant="ghost"
                      radius="full"
                      className="text-foreground pl-4"
                      
                      >${row.price}
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
