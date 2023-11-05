"use client";
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalSigner } from "@web3modal/ethers5/react";
import { ContractAnimalCareABi } from "../contract/contractAnimalCareAbi";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { AnimalType } from "../types/animalType";
import { useRouter } from "next/navigation";

export default function AnimalHome() {
  const { address, isConnected } = useWeb3ModalAccount()
  const { walletProvider, signer } = useWeb3ModalSigner();
  const [animalData, setAnimalData] = useState<AnimalType | null>(null);
  const router = useRouter();

  const contractAddress = "0x65b2D0d5e5dA1f485C97ecF237a79C34BA18Ab0c";

  const animalCare = new ethers.Contract(
    contractAddress,
    ContractAnimalCareABi,
    walletProvider
  );


  const contractSigner: any = animalCare.connect(signer as ethers.Signer);

  async function createNewAnimal() {
    const response = await contractSigner.createNewAnimal("juanito");
    console.log(" response ", response);
  }

  async function showItems() {
    const response = await contractSigner.getAnimalsOwner({});
    console.log(" response  gert total animal", response);
  }

  async function CurrentAnimal(){
    const response = await contractSigner.animals(0);
    console.log(' res  ', response)
    setAnimalData(response);
  }

  async function EatAnimal(){
    const response = await contractSigner.feedAnimal(0,0);
    setAnimalData(response);
  }

  async function SharedAnimal(){
    const response  = await contractSigner.sharedAnimal(0, address);
    console.log('response ', response)
  }

  return (
    <div>
      <h1>animal home </h1>
      <button
        className="transition duration-150 ease-in-out walletBottom rounded-lg outline outline-offset-2 outline-blue-500 "
        onClick={createNewAnimal}
      >
        <h1>try something</h1>
      </button>
      <button
        className="transition duration-150 ease-in-out walletBottom rounded-lg outline outline-offset-2 outline-blue-500 "
        onClick={showItems}
      >
        <h1>show total owner</h1>
      </button>

      <button
        className="transition duration-150 ease-in-out walletBottom rounded-lg outline outline-offset-2 outline-blue-500 "
        onClick={CurrentAnimal}
      >
        <h1>aniaml</h1>
      </button>

      <button
        className="transition duration-150 ease-in-out walletBottom rounded-lg outline outline-offset-2 outline-blue-500 "
        onClick={EatAnimal}
      >
        <h1>eat animal</h1>
      </button>

      <button
        className="transition duration-150 ease-in-out walletBottom rounded-lg outline outline-offset-2 outline-blue-500 "
        onClick={SharedAnimal}
      >
        <h1>shared</h1>
      </button>

      <h1>
        canFeed {animalData?.canFeed ? 'true':'false'}
      </h1>

      <h1>
        canPlay {animalData?.canPlay ? 'true':'false'}
      </h1>

      <h1>
        currentPoints {animalData?.currentPoints}
      </h1>

      <h1>
        feedCount {animalData?.feedCount}
      </h1>

      {/* <h1>
        level {animalData?.level}
      </h1> */}

      <h1>
        name {animalData?.name}
      </h1>

      <h1>
        needsBathroom {animalData?.needsBathroom ? 'true':'false'}
      </h1>

      <h1>
        tired {animalData?.tired  ? 'true':'false'}
      </h1>
    </div>
  );
}
