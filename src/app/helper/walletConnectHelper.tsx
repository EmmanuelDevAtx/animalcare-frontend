import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5";
import { ENVIROMENT, WALLET_CONNECT_PROJECT } from "../config";

export const createWeb3ModalConfig = () => {
  const projectId = WALLET_CONNECT_PROJECT!;
  const enviroment = ENVIROMENT;

  console.log("enviroment ", enviroment);

  const mainnet = {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
  };

  const mumbai = {
    chainId: 80003,
    name: "Mumbai",
    currency: "MATIC",
    explorerUrl: "https://mumbai.polygonscan.com/",
    rpcUrl: "https://rpc.ankr.com/polygon_mumbai",
  };

  const local = {
    chainId: 80002,
    name: "local ETH",
    currency: "ETH",
    explorerUrl: "http://127.0.0.1:8545/",
    rpcUrl: "http://127.0.0.1:8545/",
  };

  const ganache = {
    chainId: 5777,
    name: "Ganache",
    currency: "ETH",
    explorerUrl: "http://127.0.0.1:7545",
    rpcUrl: "http://127.0.0.1:7545",
  };

  const metadata = {
    name: "Animal care",
    description: "your mother ",
    url: "http://localhost:3000/",
    icons: ["https://avatars.mywebsite.com/"],
  };

  function GetNetWorks(): any[] {
    switch (enviroment) {
      case "local":
        return [local, ganache, mumbai];
      case "staging":
        return [mumbai];
      case "production":
        return [mumbai];
      default:
        return [];
    }
  }
  const networksData = GetNetWorks();
  return {
    ethersConfig: defaultConfig({
      metadata,
      defaultChainId: 1,
      enableEIP6963: true,
      enableInjected: true,
      enableCoinbase: true,
      rpcUrl: "...", // used for the Coinbase SDK
    }),
    chains: networksData,
    projectId,
  };
};
