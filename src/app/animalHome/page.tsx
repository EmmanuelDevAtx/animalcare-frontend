"use client";
import { useWeb3ModalSigner } from "@web3modal/ethers5/react";
import { useContext, useEffect } from "react";
import { ContractContext } from "../hooks/contractActions";

export default function AnimalHome() {
  const { walletProvider, signer } = useWeb3ModalSigner();

  const {
    GetOwnFood,
    foodData,
    animalData,
    CreateNewAnimal,
    GetOwnAnimals,
    CurrentAnimal,
    EatAnimal,
    SharedAnimal,
  } = useContext(ContractContext);

  return (
    <div>
      <h1>animal home </h1>
      <button
        className="transition duration-150 ease-in-out walletBottom rounded-lg outline outline-offset-2 outline-blue-500 "
        onClick={() => CreateNewAnimal("Juan1")}
      >
        <h1>Create animal</h1>
      </button>
      <button
        className="transition duration-150 ease-in-out walletBottom rounded-lg outline outline-offset-2 outline-blue-500 "
        onClick={GetOwnAnimals}
      >
        <h1>show total owner</h1>
      </button>

      <button
        className="transition duration-150 ease-in-out walletBottom rounded-lg outline outline-offset-2 outline-blue-500 "
        onClick={() => CurrentAnimal(0)}
      >
        <h1>curretn animal</h1>
      </button>

      <button
        className="transition duration-150 ease-in-out walletBottom rounded-lg outline outline-offset-2 outline-blue-500 "
        onClick={() => EatAnimal(0,2)}
      >
        <h1>eat animal</h1>
      </button>

      <button
        className="transition duration-150 ease-in-out walletBottom rounded-lg outline outline-offset-2 outline-blue-500 "
        onClick={() =>
          SharedAnimal(0, "0x9682F711672ca97c5098e0ee841d695be84687B8")
        }
      >
        <h1>shared</h1>
      </button>

      <button
        className="transition duration-150 ease-in-out walletBottom rounded-lg outline outline-offset-2 outline-blue-500 "
        onClick={GetOwnFood}
      >
        <h1>get own food</h1>
      </button>

      <h1>canFeed {animalData?.canFeed ? "true" : "false"}</h1>

      <h1>canPlay {animalData?.canPlay ? "true" : "false"}</h1>

      <h1>currentPoints {animalData?.currentPoints}</h1>

      <h1>feedCount {animalData?.feedCount}</h1>

      {/* <h1>
        level {animalData?.level}
      </h1> */}

      <h1>name {animalData?.name}</h1>

      <h1>needsBathroom {animalData?.needsBathroom ? "true" : "false"}</h1>

      <h1>tired {animalData?.tired ? "true" : "false"}</h1>

      <h5>soap_simple {foodData?.soap_simple}</h5>
      <h5>soap_medium {foodData?.soap_medium}</h5>
      <h5>soap_premium {foodData?.soap_premium}</h5>
      <h5>carrot {foodData?.carrot}</h5>
    </div>
  );
}
