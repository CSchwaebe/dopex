"use client";

// Imports
// ========================================================
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  TableColumn,
  CardFooter,
  Divider,
  Link,
  Image,
  Tab,
  Tabs,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Button,
  Spacer,
  Input,
} from "@nextui-org/react";
import Chart from "./chart";

import { PlusCircleIcon } from "@heroicons/react/24/outline";

// Component
// ========================================================
export default function OptionDetail({ selectedOption }) {
  // State / Props
  const [numContracts, setNumContracts] = useState(1);
  const [cost, setCost] = useState(0);

  const validateNumContracts = (numContracts) => {
    let tmp = Number(numContracts);

    if (!Number.isNaN(tmp)) {
      if (selectedOption !== null) setCost(tmp * selectedOption.price);
      return true;
    }

    return false;
  };

  const validationState = React.useMemo(() => {
    if (numContracts === "") {
      setCost(0);
      return undefined;
    }

    return validateNumContracts(numContracts) ? "valid" : "invalid";
  }, [numContracts, selectedOption]);

  if (selectedOption === null)
    return (
      <Card
        isBlurred="true"
        shadow="none"
        className="h-96 mt-12 pt-2"
        style={{ background: "#222935" }}
      >
        <CardHeader>
          <h1 className="text-xl font-bold">Select Option</h1>
        </CardHeader>

        <CardBody className="h-16">
          <PlusCircleIcon className="h-16 mt-20 text-zinc-400"></PlusCircleIcon>
          <p className="mt-2 mb-8 text-center text-zinc-400">
            Select an option
          </p>
        </CardBody>
      </Card>
    );

  // Render
  return (
    <Card
      isBlurred="true"
      shadow="none"
      className="mt-12 pt-2"
      style={{ background: "#222935" }}
    >
      {/* Header */}
      <CardHeader>
        <h1 className="text-xl font-bold">
          {selectedOption.side +
            " " +
            selectedOption.asset +
            " $" +
            selectedOption.strike +
            " " +
            selectedOption.type}{" "}
        </h1>
      </CardHeader>
      {/* First Panel */}
      <CardBody>
        <div className="grid grid-cols-2 grid-rows-2 gap-5">
          <div className="col-span-1 text-zinc-400 font-semibold antialiased">
            Contracts
          </div>
          <div className="col-span-1">
            <Input
              size="sm"
              variant="underlined"
              value={numContracts}
              color={validationState === "invalid" ? "danger" : "secondary"}
              //errorMessage={validationState === "invalid"}
              validationState={validationState}
              onValueChange={setNumContracts}
            ></Input>
          </div>
          <div className="col-span-1 text-zinc-400 font-semibold antialiased">
            Price per Option
          </div>
          <div className="col-span-1 text-right">${selectedOption.price}</div>
        </div>
      </CardBody>

      <Divider className="my-4" />

      {/* Second Panel - Purchase Panel */}
      <CardBody>
        <div className="grid grid-cols-2 grid-rows-2 gap-5">
          <div className="col-span-1 text-zinc-400 font-semibold antialiased">
            Cost
          </div>
          <div className="col-span-1 text-right">${cost.toFixed(2)}</div>
          <div className="col-span-1 text-zinc-400 font-semibold antialiased">
            Balance
          </div>
          <div className="col-span-1 text-right">$0.00</div>
        </div>

        <Button
          className="mt-6 w-full text-base font-semibold antialiased"
          size="md"
          radius="full"
          color="secondary"
        >
          Purchase
        </Button>
      </CardBody>

      <Divider className="my-4" />

      {/* Third Panel - PnL Chart */}
      <CardBody>
        <div className="grid grid-cols-3 grid-rows-1 gap-5">
          <div className="col-span-2 text-zinc-400 font-semibold antialiased">
            Expected Profit / Loss
          </div>
          <div className="col-span-1 text-right">$0.00</div>
        </div>

        <div className="h-36 bg-background mt-5 rounded-lg">
          <p className="text-zinc-400 mt-12 ml-28">PnL Chart</p>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-5 mt-5">
          <div className="col-span-2 text-zinc-400 font-semibold antialiased">
            Max Profit
          </div>
          <div className="col-span-1 text-right">$0.00</div>

          <div className="col-span-2 text-zinc-400 font-semibold antialiased">
            Breakeven
          </div>
          <div className="col-span-1 text-right">$0.00</div>

          <div className="col-span-2 text-zinc-400 font-semibold antialiased">
            Max Loss
          </div>
          <div className="col-span-1 text-right">$0.00</div>
        </div>
      </CardBody>
    </Card>
  );
}
