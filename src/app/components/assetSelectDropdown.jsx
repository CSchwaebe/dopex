import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownSection,
  cn,
} from "@nextui-org/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function AssetSelectDropdown({ selectedAsset, setSelectedAsset }) {
  //const [selectedAsset, setSelectedAsset] = React.useState("Ethereum");

  /*  
  const selectedAssetValue = React.useMemo(
    () => Array.from(selectedAsset).join(", ").replaceAll("_", " "),
    [selectedAsset]
  );
  */

  return (
    <Dropdown
      placement="bottom-start"
      showArrow
      classNames={{
        base: "py-1 px-1 border border-zinc-800 bg-gradient-to-br from-white to-zinc-200 dark:from-neutral dark:to-background",
        arrow: "bg-default-200",
      }}
    >
      <DropdownTrigger>
        <Button
          variant="light"
          className="capitalize text-2xl font-bold py-6 px-6"
        >
          {selectedAsset || "Select Asset"}
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        selectionMode="single"
        selectedKeys={selectedAsset}
        onAction={setSelectedAsset}
        aria-label="Dropdown menu with description"
      >
        {/* Markets */}
        <DropdownSection title="Markets">
          <DropdownItem
            key="ethereum"
            description="ETH / USDC"
          >
            Ethereum
          </DropdownItem>

          <DropdownItem
            key="bitcoin"
            description="BTC / USDC"
          >
            Bitcoin
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
