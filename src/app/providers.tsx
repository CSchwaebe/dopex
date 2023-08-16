"use client";

import { NextUIProvider } from "@nextui-org/react";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  lightTheme,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
  injectedWallet,
  metaMaskWallet,
  coinbaseWallet,
  rabbyWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  //goerli,
  arbitrumGoerli,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, arbitrumGoerli],
  [publicProvider()]
);

const projectId = "1c849cc8d568964c99d66922c430ebec";

const { wallets } = getDefaultWallets({
  appName: "Dopex",
  projectId,
  chains,
});

const demoAppInfo = {
  appName: "Dopex",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <NextUIProvider>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#002EEF",
            //accentColorForeground: 'white',
            borderRadius: "large",
            fontStack: "rounded",
            overlayBlur: "small",
          })}
          chains={chains}
          appInfo={demoAppInfo}
        >
          {mounted && children}
        </RainbowKitProvider>
      </WagmiConfig>
    </NextUIProvider>
  );
}
