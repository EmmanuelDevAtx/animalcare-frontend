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
  const { isConnected } = useWeb3ModalAccount();

  return (
    <nav className="fixed top-0 right-0 left-0 items-center flex justify-between p-4 backdrop-blur-xl">
      <div className="flex w-full justify-between items-center gap-8 ">
        <p className='flex-1 text-white font-medium text-2xl'>
          <span className='title-text-1'>Ani</span>
          <span className='title-text-2'>mal </span>
          <span className='title-text-3'>Care</span>
        </p>
        <ul className='flex flex-row flex-1 gap-3 justify-center'>
          <li>
            <a
              className={`text-white font-light transition-colors duration-700 text-sm  ${pathname == '/' ? ' navigation-hover-active ' : ' navigation-hover '}`}
              href='/'>
              Home
            </a>
          </li>
          <li>
            <a
              className={`text-white font-light transition-colors duration-700 text-sm ${pathname == '/animalHome' ? ' navigation-hover-active ' : ' navigation-hover '}`}
              href="/animalHome">
              Animal Home
            </a>
          </li>
          <li>
            <a
              className={`text-white font-light transition-colors duration-700 text-sm ${pathname == '/contact' ? ' navigation-hover-active ' : ' navigation-hover '}`}
              href='/contact'>
              Contact
            </a>
          </li>
          <li>
            <a
              className={`text-white font-light transition-colors duration-700 text-sm ${pathname == '/about' ? ' navigation-hover-active ' : ' navigation-hover '}`}
              href='/about'>
              About
            </a>
          </li>
        </ul>
        <ConnectWallet />
      </div>
    </nav>
  );
};
