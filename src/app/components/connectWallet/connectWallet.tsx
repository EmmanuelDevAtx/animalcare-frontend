import { useEffect, useState } from "react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/react";

export const ConnectWallet = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();

  return (
    <div>
      <button onClick={() => open()}>
        {isConnected ? "showwallet" : "collect your walelt"}
      </button>
      ;
    </div>
  );
};
