import { ethers } from "ethers";
import { useEffect, useState } from "react";

export const ConnectWallet = () => {
  const [current, setAccount] = useState<string>();
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(
    null
  );
  const [customProvider, setCustomProvider] =
    useState<ethers.providers.Web3Provider | null>(null);

  useEffect(() => {
    const getCustom = async () => {
      const cp = await new ethers.providers.Web3Provider(window.ethereum);
      setCustomProvider(cp);
    };
    getCustom();
  }, []);

  async function result() {

    if(!customProvider){
      return;
    }

    // MetaMask requires requesting permission to connect users' accounts
    const accounts = await customProvider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = await customProvider.getSigner();
    setSigner(signer);
    console.log("Accounts", accounts);
    setAccount(accounts[0] as string);

  }

  async function disconect() {
    window.location.reload();
    setAccount("");
  }

  async function showActions() {
    if(!customProvider){
      return;
    }
    const balance = await customProvider.getBalance(current!);
    console.log("Balance: ", ethers.utils.formatEther(balance), "ETH");
  }
  return (
    <div>
      <h1>current account {current}</h1>
      <button onClick={result}> collect your walelt</button>;
      <button onClick={disconect}> disconect</button>;
      <button onClick={showActions}> showActions</button>;
    </div>
  );
};
