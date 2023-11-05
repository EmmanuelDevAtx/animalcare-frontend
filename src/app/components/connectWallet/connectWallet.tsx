import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/react";
import EthIcon from "/public/svg/eth_logo.svg";

export const ConnectWallet = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();

  function reducirTexto(texto: string) {
    if (texto.length < 7) {
      return texto;
    }
    const primerasTresLetras = texto.substring(0, 5);
    const ultimasCuatroLetras = texto.substring(texto.length - 6);
    return primerasTresLetras + "..." + ultimasCuatroLetras;
  }

  return (
    <div className="flex flex-row">
      <button className="transition duration-150 ease-in-out" onClick={() => open({ view: "Networks" })}>
        <EthIcon style={{ height: 50, width: 50 }} />
      </button>
      <button
        className="transition duration-150 ease-in-out walletBottom rounded-lg outline outline-offset-2 outline-blue-500 "
        onClick={() => open()}
      >
        <h1>
          {isConnected
            ? reducirTexto(address as string)
            : "collect your walelt"}
        </h1>
      </button>
    </div>
  );
};
