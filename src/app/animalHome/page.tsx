"use client";
import { useWeb3Modal } from "@web3modal/ethers5/react";

export default function AnimalHome() {
  const { open, close } = useWeb3Modal();

  return (
    <div>
      <h1>animal home </h1>
      <button > disoncect</button>
    </div>
  );
}
