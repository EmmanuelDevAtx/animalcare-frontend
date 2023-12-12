"use client";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { ConnectWallet } from "../connectWallet/connectWallet";
import { usePathname } from "next/navigation";
import { UseScreenInfo } from "@/app/hooks/screenInfo";
import NavigationIcon from "/public/svg/menu_icon.svg";
import { ModalCustom } from "../custom/modalCustom";
import { useState } from "react";

export const Navigation = () => {
  const pathname = usePathname();
  const { isConnected } = useWeb3ModalAccount();
  const { isSmall } = UseScreenInfo();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return isSmall ? (
    <nav className="borderBottomLine flex items-center justify-between p-4 backdrop-blur-xl">
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
  ) : (
    <div>
      <nav className="borderBottomLine grid items-center justify-between p-4 backdrop-blur-xl">
        <div className="grid sm:grid-cols-1 lg:grid-cols-1  xl:grid-cols-1 mb-3 w-full">
          <h1 className="text-2xl">Animal care</h1>
        </div>
        <div className="sm:grid-cols-1 lg:grid-cols-1  xl:grid-cols-1 ">
          <button className="icon-button" onClick={() => setIsOpenModal(true)}>
            <NavigationIcon style={{ height: 34, width: 34, fill: "white" }} />
          </button>
        </div>
      </nav>
      {isOpenModal && 
      <ModalCustom isOpen={isOpenModal} hideModal={() => setIsOpenModal(false)}>
        <></>
      </ModalCustom>
      }
    </div>
  );
};
