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
import { Arbitrum, SSOV, Chain } from "../constants/addresses/minimized";
import SsovV3 from "../constants/contract_artifacts/SsovV3.json";
//const SsovV3 = require("../constants/abis/SsovV3.json")
import { EpochData } from "../constants/contract_interfaces";

interface strike {
  strike: string;
  expiry: number;
  contract?: string;
  premium: string;
  purchaseFees: string;
}

export default function SingleStrike({ strike }) {
  let strikePrice = "$1850.00";

  const premium = "$1.00";
  const purchaseFees = "$1.00";

  /*****************************************************************
   * HELPER FUNCTIONS *
   *****************************************************************/

  /*****************************************************************
   * The following functions are used to render components *
   *****************************************************************/

  /*****************************************************************
   * MAIN RENDER *
   ******************************************************************/
  return (
    <div className="p-8 w-full text-white">
      <button className="btn btn-secondary">{strikePrice}</button>
      <button className="btn btn-secondary">{premium}</button>
    </div>
  );
}
