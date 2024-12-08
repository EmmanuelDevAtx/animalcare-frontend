import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/react";
import EthIcon from "/public/svg/eth_logo.svg";

export const ConnectWallet = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();

  function textReducer(text: string) {
    if (text.length < 7) {
      return text;
    }
    return text.substring(0, 5) + "..." + text.substring(text.length - 6);
  }

  return (
    <div className="flex flex-row flex-1 justify-end gap-4">
      <button className="transition duration-700 ease-in-out border px-1.5 rounded-full" onClick={() => open({ view: "Networks" })}>
        <EthIcon style={{ height: 20, width: 20 }} />
      </button>
      <button
        className="transition-colors duration-700 ease-in-out walletBottom rounded-xl text-white outline outline-teal-400 px-4 py-1 navigation-hover"
        onClick={() => open()}
      >
        {isConnected
          ? textReducer(address as string)
          : "Connect"}
      </button>
    </div>
  );
};
