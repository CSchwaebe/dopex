import React, { useState, useMemo } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Divider,
  Button,
} from "@nextui-org/react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const PlaceholderCard = () => (
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
      <PlusCircleIcon className="h-16 mt-20 text-zinc-400" />
      <p className="mt-2 mb-8 text-center text-zinc-400">Select an option</p>
    </CardBody>
  </Card>
);

const QuantityInputSection = ({
  numContracts,
  setNumContracts,
  selectedOptionPrice,
  validationState,
}) => (
  <>
    <CardBody>
      <GridCell label="Contracts">
        <Input
          size="sm"
          variant="underlined"
          value={numContracts}
          color={validationState === "invalid" ? "danger" : "secondary"}
          validationState={validationState}
          onValueChange={setNumContracts}
        />
      </GridCell>
      <GridCell label="Price per Option" value={`$${selectedOptionPrice}`} />
    </CardBody>
    <Divider className="my-4" />
  </>
);

const Checkout = ({ cost }) => (
  <>
    <CardBody>
      <GridCell label="Cost" value={`$${cost.toFixed(2)}`} />
      <GridCell label="Balance" value="$0.00" />
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
  </>
);

const ProfitLossChart = () => (
  <CardBody>
    <GridCell label="Expected Profit / Loss" value="$0.00" />
    <div className="h-36 bg-background my-5 rounded-lg">
      <p className="text-zinc-400 mt-12 ml-28">PnL Chart</p>
    </div>
    <GridCell label="Max Profit" value="$0.00" />
    <GridCell label="Breakeven" value="$0.00" />
    <GridCell label="Max Loss" value="$0.00" />
  </CardBody>
);

const GridCell = ({ label, children, value }) => (
  <div className="grid grid-cols-3 grid-rows-1 gap-5 py-2">
    <div className="col-span-2 text-zinc-400 font-semibold antialiased">
      {label}
    </div>
    {children ? (
      <div className="col-span-1">{children}</div>
    ) : (
      <div className="col-span-1 text-right">{value}</div>
    )}
  </div>
);

export default function PurchasePanel({ selectedOption }) {
  // State
  const [numContracts, setNumContracts] = useState(1);
  const [cost, setCost] = useState(0);

  // Functions
  const validateNumContracts = (num) => {
    const value = Number(num);
    if (!isNaN(value)) {
      if (selectedOption) setCost(value * selectedOption.price);
      return true;
    }
    return false;
  };

  // Effects
  const validationState = useMemo(() => {
    if (numContracts === "") {
      setCost(0);
      return undefined;
    }
    return validateNumContracts(numContracts) ? "valid" : "invalid";
  }, [numContracts, selectedOption]);

  if (!selectedOption) return <PlaceholderCard />;

  return (
    <Card
      isBlurred="true"
      shadow="none"
      className="mt-12 pt-2"
      style={{ background: "#222935" }}
    >
      <CardHeader>
        <h1 className="text-xl font-bold">
          {`${selectedOption.side} ${selectedOption.asset} $${selectedOption.strike} ${selectedOption.type}`}
        </h1>
      </CardHeader>

      <QuantityInputSection
        numContracts={numContracts}
        setNumContracts={setNumContracts}
        selectedOptionPrice={selectedOption.price}
        validationState={validationState}
      />

      <Checkout cost={cost} />

      <ProfitLossChart />
    </Card>
  );
}
