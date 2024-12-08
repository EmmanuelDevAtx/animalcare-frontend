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
import { GANACHE_CONTRACT_ADDRESS, LOCAL_CONTRACT_ADDRESS, MUMBAI_CONTRACT_ADDRESS } from "../config";
import { AnimalType, FoodType } from "../types/animalType";
import { createWeb3Modal, useWeb3ModalSigner, useWeb3ModalState } from "@web3modal/ethers5/react";
import { createWeb3ModalConfig } from "../helper";

interface ContractContextInterface {
  animalData: AnimalType | null;
  foodData: FoodType | null;
  CreateNewAnimal: (name: string, callBackfunction?:()=> void) => void;
  GetOwnAnimals: () => Promise<number[]>;
  CurrentAnimal: (index: number) => Promise<any>;
  EatAnimal: (animalId: number, foodId: number) => void;
  SharedAnimal: (animalId: number, address: string) => void;
  GetOwnFood: () => void;
  GetAllAnimalData: () => Promise<any[]>;
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
  GetAllAnimalData: async () => [],
});

export const ContractProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [animalData, setAnimalData] = useState<AnimalType | null>(null);
  const [foodData, setFoodData] = useState<FoodType | null>(null);
  const { walletProvider, signer } = useWeb3ModalSigner();
  
  createWeb3Modal(createWeb3ModalConfig());

  const { selectedNetworkId } = useWeb3ModalState()

  function GetContractAddress(): string {
    switch (`${selectedNetworkId}`) {
      case "80003":
        return MUMBAI_CONTRACT_ADDRESS!
      case "5777":
        return GANACHE_CONTRACT_ADDRESS!
      case "80002":
        return LOCAL_CONTRACT_ADDRESS!
      default:
        return LOCAL_CONTRACT_ADDRESS!;
    }
  }

  
  const animalCareContract = new ethers.Contract(
    GetContractAddress(),
    ContractAnimalCareABi,
    walletProvider
  );

  const contractSigner = animalCareContract.connect(signer as ethers.Signer);

  async function CreateNewAnimal(name: string, callBackfunction?:()=> void) {
    try {
      if (!contractSigner) throw new Error("Contract not loaded");
      const response = await contractSigner.createNewAnimal(name);
      callBackfunction && callBackfunction();
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
      console.error("Error getting own animals ", error);
      return [];
    }
  }

  async function CurrentAnimal(index: number): Promise<any> {
    try {
      if (!contractSigner) throw new Error("Contract not loaded");
      const response = await contractSigner.animals(index);
      let animalData: any = {};
      animalData.canFeed = response.canFeed;
      animalData.canPlay = response.canPlay;
      animalData.needsBathroom = response.needsBathroom;

      animalData.currentPoints = response.currentPoints;
      animalData.feedCount = response.feedCount;
      animalData.tired = response.tired;
      animalData.name = response.name;

      return animalData  as AnimalType;
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

  async function GetAllAnimalData(): Promise<any[]> {
    try {
      let resonseArray:AnimalType[]=[];
      const animals = await GetOwnAnimals();
      for(let i = 0; i < animals.length ; i++){
        const currentAnimal: AnimalType = await CurrentAnimal(animals[i]);
        resonseArray.push(currentAnimal);
      }
      return resonseArray;
    } catch (error) {
      console.error("Error get own food", error);
      return [];
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
        GetAllAnimalData,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
