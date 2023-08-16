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

export default function AssetSelectDropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Ethereum"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

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
          {selectedValue || "Select Asset"}
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        aria-label="Dropdown menu with description"
      >
        {/* Markets */}
        <DropdownSection title="Markets">
          <DropdownItem key="Ethereum" description="ETH / USDC">
            Ethereum
          </DropdownItem>
        </DropdownSection>

        
      </DropdownMenu>
    </Dropdown>
  );
}
