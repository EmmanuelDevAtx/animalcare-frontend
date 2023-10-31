import { useState } from "react";
import { useWeb3Modal } from "@web3modal/ethers5/react";

export const ConnectWallet = () => {
  

  const [current, setAccount] = useState<string>();

  const { open, close } = useWeb3Modal();

  return (
    <div>
      <button onClick={() => open()}> collect your walelt</button>;
    </div>
  );
};
