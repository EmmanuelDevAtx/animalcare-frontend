"use client";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ethers } from "ethers";
import { ContractAnimalCareABi } from "../contract/contractAnimalCareAbi";
import { LOCAL_CONTRACT_ADDRESS } from "../config";
import { AnimalType, FoodType } from "../types/animalType";
import { useWeb3ModalSigner } from "@web3modal/ethers5/react";

interface ContractContextInterface {
  animalData: AnimalType | null;
  foodData: FoodType | null;
  CreateNewAnimal: (name: string) => void;
  GetOwnAnimals: () => void;
  CurrentAnimal: (index: number) => void;
  EatAnimal: (animalId: number, foodId: number) => void;
  SharedAnimal: (animalId: number, address: string) => void;
  GetOwnFood: () => void;
}

export const ContractContext = createContext<ContractContextInterface>({
  animalData: null,
  foodData: null,
  CreateNewAnimal: () => {},
  GetOwnAnimals: () => {},
  CurrentAnimal: () => {},
  EatAnimal: () => {},
  SharedAnimal: () => {},
  GetOwnFood: () => {},
});

export const ContractProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [animalData, setAnimalData] = useState<AnimalType | null>(null);
  const [foodData, setFoodData] = useState<FoodType | null>(null);
  const { walletProvider, signer } = useWeb3ModalSigner();

  const animalCareContract = new ethers.Contract(
    LOCAL_CONTRACT_ADDRESS!,
    ContractAnimalCareABi,
    walletProvider
  );

  const contractSigner = animalCareContract.connect(signer as ethers.Signer);

  async function CreateNewAnimal(name: string) {
    try {
      if (!contractSigner) throw new Error("Contract not loaded");
      const response = await contractSigner.createNewAnimal(name);
      console.log(" response ", response);
    } catch (error: any) {
      console.error("Error creating new animal ", error?.data?.message);
    }
  }

  async function GetOwnAnimals() {
    try {
      if (!contractSigner) throw new Error("Contract not loaded");
      const response = await contractSigner.getAnimalsOwner({});
      console.log(" response  gert total animal", response);
    } catch (error: any) {
      console.error("Error getting own animals ", error?.data?.message);
    }
  }

  async function CurrentAnimal(index: number) {
    try {
      if (!contractSigner) throw new Error("Contract not loaded");
      const response = await contractSigner.animals(index);
      console.log(" res  ", response);
      setAnimalData(response);
    } catch (error: any) {
      console.error("Error getting animal", error?.data?.message);
    }
  }

  async function EatAnimal(animalId: number, foodId: number) {
    try {
      if (!contractSigner) throw new Error("Contract not loaded");
      const response = await contractSigner.feedAnimal(animalId, foodId);
      setAnimalData(response);
      CurrentAnimal(animalId);
      GetOwnFood();
    } catch (error: any) {
      console.error("Error eat animal", error?.data?.message);
    }
  }

  async function SharedAnimal(animalId: number, address: string) {
    try {
      if (!contractSigner) throw new Error("Contract not loaded");
      const response = await contractSigner.sharedAnimal(animalId, address);
      console.log("response ", response);
    } catch (error: any) {
      console.error("Error sharing own animal", error?.data?.message);
    }
  }

  async function GetOwnFood() {
    try {
      if (!contractSigner) throw new Error("Contract not loaded");
      const response = await contractSigner.showItems();
      setFoodData(response);
      console.log("response ", response);
    } catch (error: any) {
      console.error("Error get own food", error?.data?.message);
    }
  }

  return (
    <ContractContext.Provider
      value={{
        animalData,
        foodData,
        CreateNewAnimal,
        GetOwnAnimals,
        CurrentAnimal,
        EatAnimal,
        SharedAnimal,
        GetOwnFood,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
