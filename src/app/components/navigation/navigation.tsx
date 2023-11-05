"use client";
import {
  createWeb3Modal,
  defaultConfig,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
import { ConnectWallet } from "../connectWallet/connectWallet";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  // 1. Get projectId
  const projectId = "4a579dd8af908597dde1544a62e922b7";

  // 2. Set chains
  const mainnet = {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
  };

  const mumbai = {
    chainId: 80001,
    name: "Mumbai",
    currency: "MATIC",
    explorerUrl: "https://mumbai.polygonscan.com/",
    rpcUrl: "https://rpc.ankr.com/polygon_mumbai",
  };

  const local = {
    chainId: 80001,
    name: "local ETH",
    currency: "ETH",
    explorerUrl: "http://127.0.0.1:8545/",
    rpcUrl: "http://127.0.0.1:8545/",
  };

  // 3. Create modal
  const metadata = {
    name: "Animal care",
    description: "your mother ",
    url: "http://localhost:3000/",
    icons: ["https://avatars.mywebsite.com/"],
  };

  createWeb3Modal({
    ethersConfig: defaultConfig({
      metadata,
      defaultChainId: 1,
      enableEIP6963: true,
      enableInjected: true,
      enableCoinbase: true,
      rpcUrl: "...", // used for the Coinbase SDK
    }),
    chains: [mainnet, mumbai, local],
    projectId,
  });
  const { isConnected } = useWeb3ModalAccount();

  return (
    <nav className="borderBottomLine flex items-center justify-between p-4 backdrop-blur-xl shadow-xl filter brightness-125 ">
      <h1 className="text-2xl">Animal care</h1>
      <div className="flex space-x-4">
        <a
          className={`hover:text-blue-600 ${
            pathname === "/" && "text-blue-600"
          } text-lg font-semibold relative`}
          href="/"
          style={{
            textShadow: `0 0 0px rgba(0, 0, 255, 1;`,
          }}
        >
          Landing
        </a>
        {isConnected && (
          <a
            className={`hover:text-blue-600 ${
              pathname === "/animalHome" && "text-blue-600"
            }`}
            href="/animalHome"
          >
            Animal Home
          </a>
        )}
        <a className="hover:text-blue-600" href="#contact">
          Contact
        </a>
        <a className="hover:text-blue-600" href="#about">
          About
        </a>
      </div>
      <ConnectWallet />
    </nav>
  );
};
