//@ts-nocheck
"use client";

import React, { useEffect, useState } from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useContractReads,
  useAccount,
} from "wagmi";
import AssetSelectDropdown from "./assetSelectDropdown";
import SingleStrike from "../components/singleStrike";
import Chart from "../components/chart";
import Market from "../components/market";
import Loading from "../components/loading";
import OptionDetail from "../components/optionDetail";
import Deposit from "../components/deposit";

import {
  Card,
  CardHeader,
  CardBody,
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
} from "@nextui-org/react";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Trade() {
  const [isLoading, setLoading] = useState(false);
  //const [activeAsset, setActiveAsset] = useState("Ethereum");
  const { address, isConnecting, isDisconnected } = useAccount();
  const [selectedAsset, setSelectedAsset] = useState("ethereum");
  const [selectedOption, setSelectedOption] = useState(null);
  /*****************************************************************
   * HELPER FUNCTIONS *
   *****************************************************************/

  /*****************************************************************
   * The following functions are used to render components *
   *****************************************************************/

  /*****************************************************************
   * MAIN RENDER *
   ******************************************************************/
  if (isLoading) return <Loading />;

  return (
    <div className="py-4 px-2 lg:px-8 w-full lg:flex justify-center">
      {/* Left Side */}
      <div className="w-full md:flex md:justify-center lg:inline-block lg:w-7/12 lg:max-w-2xl xl:w-9/12">
        <div className="flex-initial">
          {/* Top Row Asset Select */}
          <div className="w-full">
            {/* Dropdown for asset selection */}
            <AssetSelectDropdown
              selectedAsset={selectedAsset}
              setSelectedAsset={setSelectedAsset}
            />
            {/* Simple or advanced */}
            {/* TODO */}
          </div>

          {/* Main Card */}
          <div className="w-full">
            <Card
              isBlurred="true"
              shadow="none"
              className=""
              style={{ background: "#222935" }}
            >
              {/* Chart */}
              <Chart market={selectedAsset} className="" />

              <Divider />

              {/* Select Options Market (Buy/Sell and Call/Put) */}

              {/* This is where we need to pass data */}
              {/* We need to pass the selectedAsset, Call/Put, and Buy/Sell to pull the right data for the market */}
              <Market
                selectedAsset={selectedAsset}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />

            <Divider />

            <Deposit selectedAsset={selectedAsset} />



            </Card>
          </div>
        </div>
      </div>

      <Spacer x={4} className="flex-initial" />

      {/* Right Side */}
      <div className="w-full lg:w-4/12 lg:max-w-md xl:w-3/12 flex-initial">
        <OptionDetail selectedOption={selectedOption} />
      </div>
    </div>
  );
}
