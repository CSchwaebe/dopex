export interface SSOV {
  address: string;
  type: string;
  duration: string;
  asset: string;
  asset_address: string;
  retired?: boolean;
}

export interface Chain {
  id: number;
  ssovs: SSOV[];
}

const ArbitrumSSOVs: SSOV[] = [
  {
    address: "0xd74c61ca8917Be73377D74A007E6f002c25Efb4e",
    type: "CALL",
    duration: "MONTHLY",
    asset: "rDPX",
    asset_address: "0x32eb7902d4134bf98a28b963d26de779af92a212",
    retired: false,
  },
  {
    address: "0xCdaACF37726Bf1017821b5169e22EB34734B28A8",
    type: "CALL",
    duration: "WEEKLY",
    asset: "rDPX",
    asset_address: "0x32eb7902d4134bf98a28b963d26de779af92a212",
    retired: false,
  },

];

export const Arbitrum: Chain = {
  id: 42161,
  ssovs: ArbitrumSSOVs,
};

/*
"stETH-MONTHLY-CALLS-SSOV-V3":
"0x475a5a712b741b9ab992e6af0b9e5adee3d1851b",
"ARB-MONTHLY-CALLS-SSOV-V3":
"0xDF3d96299275E2Fb40124b8Ad9d270acFDcc6148",
"DPX-MONTHLY-CALLS-SSOV-V3-3":
"0x05E7ACeD3b7727f9129E6d302B488cd8a1e0C817",
"rDPX-MONTHLY-CALLS-SSOV-V3-3":
"0xd74c61ca8917Be73377D74A007E6f002c25Efb4e",
"ETH-MONTHLY-CALLS-SSOV-V3-3":
"0xC59836FEC63Cfb2E48b0aa00515056436D74Dc03",
*/
