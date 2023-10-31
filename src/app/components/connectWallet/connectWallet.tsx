import { useEffect, useState } from "react";
import { useWeb3Modal, useWeb3ModalState } from "@web3modal/ethers5/react";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

export const ConnectWallet = () => {
  

  const [current, setAccount] = useState<string>();

  const { open, close } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { selectedNetworkId } = useWeb3ModalState();

  return (
    <div>
      <button onClick={() => open()}> collect your walelt</button>;
    </div>
  );
};
