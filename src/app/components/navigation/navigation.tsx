"use client";
import {
  createWeb3Modal,
  defaultConfig,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
import { ConnectWallet } from "../connectWallet/connectWallet";
import { usePathname } from "next/navigation";
import { createWeb3ModalConfig } from "@/app/helper";

export const Navigation = () => {
  const pathname = usePathname();
  createWeb3Modal(createWeb3ModalConfig());
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
            textShadow: `0 0 0px rgba(0, 0, 255, 1`,
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
