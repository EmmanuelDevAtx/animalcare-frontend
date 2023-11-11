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
  GetOwnAnimals: () => Promise<number[]>;
  CurrentAnimal: (index: number) => Promise<any>;
  EatAnimal: (animalId: number, foodId: number) => void;
  SharedAnimal: (animalId: number, address: string) => void;
  GetOwnFood: () => void;
}

export const ContractContext = createContext<ContractContextInterface>({
  animalData: null,
  foodData: null,
  CreateNewAnimal: () => {},
  GetOwnAnimals: async () => {
    return [];
  },
  CurrentAnimal: async () => {
    return null;
  },
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

  async function GetOwnAnimals(): Promise<number[]> {
    try {
      if (!contractSigner) throw new Error("Contract not loaded");
      const response = await contractSigner.getAnimalsOwner({});
      return response as number[];
    } catch (error: any) {
      console.error("Error getting own animals ", error?.data?.message);
      return [];
    }
  }

  async function CurrentAnimal(index: number): Promise<any> {
    try {
      if (!contractSigner) throw new Error("Contract not loaded");
      const response = await contractSigner.animals(index);
      return response;
      setAnimalData(response);
    } catch (error: any) {
      console.error("Error getting animal", error?.data?.message);
      return null;
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
