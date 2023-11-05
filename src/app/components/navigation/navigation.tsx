'use client'
import styles from "./navigation.module.css";
import { createWeb3Modal, defaultConfig, useWeb3ModalAccount } from "@web3modal/ethers5/react";
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
    rpcUrl: "https://rpc.ankr.com/polygon_mumbai"
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
    chains: [mainnet, mumbai],
    projectId,
  });
  const { address, isConnected } = useWeb3ModalAccount();

  
  useEffect(() => {
    if (isConnected) {
      router.push("/animalHome");
    }
  }, []);

  console.log('router', pathname)
  return (
    <nav className={styles.topnav}>
      <div className={styles.container}>
        <a className={pathname == '/'? styles.active:''} href="/">
          Landing
        </a>
        <a href="/animalHome" className={pathname == '/animalHome'? styles.active:''}>Animal home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <ConnectWallet />
    </nav>
  );
};
