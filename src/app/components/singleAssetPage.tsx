//@ts-nocheck
"use client";

import React, { useEffect, useState } from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useContractReads,
  useAccount,
} from "wagmi";
import Loading from "./loading";
import AssetSelectDropdown from "./assetSelectDropdown";
import SingleStrike from "../components/singleStrike";
import Chart from "../components/chart";
import Market from "../components/market";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function SingleAssetPage({ asset }) {
  const { address, isConnecting, isDisconnected } = useAccount();

  useEffect(() => {
    //setLoading(false)
  }, []);

  /*****************************************************************
   * HELPER FUNCTIONS *
   *****************************************************************/

  /*****************************************************************
   * The following functions are used to render components *
   *****************************************************************/

  function strikeList() {
    return (
      <div className="w-full">
        <SingleStrike
          strike={{
            strike: 1850,
            expiry: 1693548000,
            premium: "$1.00",
            purchaseFees: "$1.00",
          }}
        />
        <SingleStrike
          strike={{
            strike: 1900,
            expiry: 1693548000,
            premium: "$1.00",
            purchaseFees: "$1.00",
          }}
        />
        <SingleStrike
          strike={{
            strike: 1750,
            expiry: 1693548000,
            premium: "$1.00",
            purchaseFees: "$1.00",
          }}
        />
        <SingleStrike
          strike={{
            strike: 1800,
            expiry: 1693548000,
            premium: "$1.00",
            purchaseFees: "$1.00",
          }}
        />
      </div>
    );
  }

  /*****************************************************************
   * MAIN RENDER *
   ******************************************************************/
  return (
    <div className="w-full">
      <div className="w-full ">
        {/* Dropdown for asset selection */}
        <AssetSelectDropdown />
        {/* Simple or advanced */}
      </div>

      {/* Chart */}
      <div className="w-full">
        <Card
          isBlurred="true"
          shadow="none"
          className=""
          style={{ background: "#222935" }}
        >
          <Chart market={"ethereum"} className=""/>
          <Divider />

          <Market />
        </Card>
      </div>

      {/* Chart */}
      <div className="w-full "></div>
    </div>
  );
}
