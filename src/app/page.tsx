"use client";
import { Navigation } from "./components/navigation/navigation";
import { ConnectWallet } from "./components/connectWallet/connectWallet";
import { TestThreeJs } from "./components/custom/testThree";

export default function Home() {

  // TestThreeJs();
  return (
    <main>
      <TestThreeJs/>
      <h1>ola</h1>
    </main>
  );
}
