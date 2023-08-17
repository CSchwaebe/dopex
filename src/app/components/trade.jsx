"use client";

import React, { useState } from "react";

// wagmi imports
import { useAccount } from "wagmi";

// Component imports
import AssetSelectDropdown from "./assetSelectDropdown";
import Chart from "./chart";
import Market from "./market";
import Loading from "./loading";
import PurchasePanel from "./purchasePanel";
import Deposit from "./deposit";

// UI Component imports
import { Card, Divider, Spacer } from "@nextui-org/react";

export default function Trade() {
  const [isLoading, setLoading] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState("ethereum");
  const [selectedOption, setSelectedOption] = useState(null);
  const { address, isConnecting, isDisconnected } = useAccount();

  if (isLoading) return <Loading />;

  return (
    <div className="py-4 px-2 lg:px-8 w-full lg:flex justify-center">
      {/* Left Side */}
      <div className="w-full  lg:inline-block lg:w-7/12 lg:max-w-2xl xl:w-9/12">
        {/* Top Row Asset Select */}
        <AssetSelectDropdown
          selectedAsset={selectedAsset}
          setSelectedAsset={setSelectedAsset}
        />

        {/* Main Card */}
        <Card
          isBlurred="true"
          shadow="none"
          className=""
          style={{ background: "#222935" }}
        >
          {/* Chart */}
          <Chart market={selectedAsset} />

          <Divider />

          {/* Market */}
          <Market
            selectedAsset={selectedAsset}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />

          <Divider />

          <Deposit selectedAsset={selectedAsset} />
        </Card>
      </div>

      <Spacer x={4} className="flex-initial" />

      {/* Right Side */}
      <div className="w-full lg:w-4/12 lg:max-w-md xl:w-3/12 flex-initial">
        <PurchasePanel selectedOption={selectedOption} />
      </div>
    </div>
  );
}
