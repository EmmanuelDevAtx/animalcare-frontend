"use client";
import { useWeb3ModalSigner } from "@web3modal/ethers5/react";
import { useContext, useEffect, useState } from "react";
import { ContractContext } from "../hooks/contractActions";
import "../styles/background.css";
import { AnimalType } from "../types/animalType";

export default function AnimalHome() {
  const { walletProvider, signer } = useWeb3ModalSigner();
  const [animalsOwner, setAnimalsOwner] = useState<any[]>([]);
  const {
    CreateNewAnimal,
    GetAllAnimalData
  } = useContext(ContractContext);

  function fetchData(){
    GetAllAnimalData().then((e:any)=>{
      setAnimalsOwner(e);
      console.log('resonseArray ', e);
    }).catch((e:any)=>{
      console.error('resonseArray ', e);
    });

  }

  return (
    <div className="grid new-page">
      <div className="grid grid-cols-1 justify-items-center mb-20" >
        <h5 className="text-4xl">Selecciona tu animal </h5>
      </div>
      <button onClick={fetchData}> <h2>cargar animales</h2></button>
      <button onClick={()=>CreateNewAnimal('kian')}> Slavar nuevo animal</button>
      <div className={`grid  sm:grid-cols-1 md:grid-cols-${animalsOwner.length} lg:grid-cols-${animalsOwner.length}  xl:grid-cols-${animalsOwner.length}  2xl:grid-cols-4 justify-items-center`}>
      {animalsOwner?.map((item:any, index:number)=>{
        return(
          <div key={'ownAnimal' + index} className="card-animal"> {item?.name}</div>
        );
      })}
      </div>
    </div>
  );
}
