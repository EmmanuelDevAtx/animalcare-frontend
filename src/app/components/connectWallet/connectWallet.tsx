import { useEffect, useState } from "react";
import { useWeb3Modal } from '@web3modal/ethers5/react'
import { useWeb3ModalAccount } from '@web3modal/ethers5/react'

export const ConnectWallet = () => {
  const [current, setAccount] = useState<string>();
  
  const { open } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount()

  return (
    <div>
      <h1>current account {address}</h1>
      <h1>is connected: {isConnected}</h1>
      <h1>chainId {chainId}</h1>
      <button onClick={()=> open()}> collect your walelt</button>;
      <button onClick={()=> open({view:'Networks'})}> disconect</button>;
      {/* <button onClick={showActions}> showActions</button>; */}
    </div>
  );
};
