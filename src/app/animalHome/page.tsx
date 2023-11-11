"use client";
import { useWeb3ModalSigner } from "@web3modal/ethers5/react";
import { useContext, useEffect, useState } from "react";
import { ContractContext } from "../hooks/contractActions";
import "../styles/background.css";

export default function AnimalHome() {
  const { walletProvider, signer } = useWeb3ModalSigner();
  const [animalsOwner, setAnimalsOwner] = useState<any[]>([]);
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


  function fetchData(){
    setAnimalsOwner([]);
    async function getAlldata(){
      const animals = await GetOwnAnimals();
      console.log('animals ', animals.length)
      for(let i = 0; i < animals.length ; i++){
        const currentAnimal = await CurrentAnimal(i);
        setAnimalsOwner([...animalsOwner, currentAnimal]);
      }
    }
    getAlldata();
  }
  // useEffect(()=>{
  //   setTimeout(fetchData, 3000);
  // }, []);
  console.log('totalAnimals ', animalsOwner);

  return (
    <div className="grid new-page">
      <div className="grid grid-cols-1 justify-items-center mb-20" >
        <h5 className="text-4xl">Selecciona tu animal </h5>
      </div>
      <button onClick={fetchData}> cargar animales</button>
      <div className={`grid  sm:grid-cols-1 md:grid-cols-${animalsOwner.length} lg:grid-cols-${animalsOwner.length}  xl:grid-cols-${animalsOwner.length}  2xl:grid-cols-4 justify-items-center`}>
        
      {animalsOwner.map((item:any)=>{
        return(
          <div className="card-animal"> {item?.name}</div>
        );
      })}
      </div>
    </div>
  );
}
