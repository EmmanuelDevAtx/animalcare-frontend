"use client";
import { useWeb3ModalSigner } from "@web3modal/ethers5/react";
import { useContext, useEffect, useRef, useState } from "react";
import { ContractContext } from "../hooks/contractActions";
import "../styles/background.css";
import { AnimalType } from "../types/animalType";
import { motion } from "framer-motion";
import { ModalCustom } from "../components/custom/modalCustom";
import { InputFileCustom } from "../components/custom/inputFileCustom";

export default function AnimalHome() {
  const { walletProvider, signer } = useWeb3ModalSigner();
  const [animalsOwner, setAnimalsOwner] = useState<any[]>([]);
  const { CreateNewAnimal, GetAllAnimalData } = useContext(ContractContext);
  const [isLoadData, setIsLoadData] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const animalName = useRef({} as any);

  function fetchData() {
    setIsLoadData(false);
    setAnimalsOwner([]);
    GetAllAnimalData()
      .then((e: any) => {
        setAnimalsOwner(e);
        console.log("resonseArray ", e);
      })
      .catch((e: any) => {
        console.error("resonseArray ", e);
      })
      .finally(() => {
        setIsLoadData(true);
      });
  }

  return (
    <div className="grid new-page">
      <div className="grid justify-items-center mb-20">
        <h5 className="text-4xl">Selecciona tu animal </h5>
      </div>
      <div className="grid justify-items-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <button className="custom-button" onClick={fetchData}>
          Load animals
        </button>
        </motion.div>
      </div>
      <div className="grid justify-items-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <button className="custom-button" onClick={() => setIsOpenModal(true)}>
          Crear nuevo animal
        </button>
      </motion.div>
      </div>
      <GetCards
        isLoadData={isLoadData}
        animalsOwner={animalsOwner}
        setIsOpenModal={setIsOpenModal}
      />
  <GetCards
        isLoadData={isLoadData}
        animalsOwner={animalsOwner}
        setIsOpenModal={setIsOpenModal}
      /><GetCards
      isLoadData={isLoadData}
      animalsOwner={animalsOwner}
      setIsOpenModal={setIsOpenModal}
    /><GetCards
    isLoadData={isLoadData}
    animalsOwner={animalsOwner}
    setIsOpenModal={setIsOpenModal}
  /><GetCards
  isLoadData={isLoadData}
  animalsOwner={animalsOwner}
  setIsOpenModal={setIsOpenModal}
/><GetCards
        isLoadData={isLoadData}
        animalsOwner={animalsOwner}
        setIsOpenModal={setIsOpenModal}
      /><GetCards
      isLoadData={isLoadData}
      animalsOwner={animalsOwner}
      setIsOpenModal={setIsOpenModal}
    />


      {isOpenModal && (
        <ModalCustom
          isOpen={isOpenModal}
          hideModal={() => {
            setIsOpenModal(false);
          }}
        >
          <div className="grid justify-items-center">
            <div className="grid sm:grid-cols-1 lg:grid-cols-1  xl:grid-cols-1  2xl:grid-cols-3 justify-items-center w-full x-full">
              <form className="grid sm:grid-cols-1 lg:grid-cols-1  xl:grid-cols-1  2xl:grid-cols-3 justify-items-center">
                <h1>Formulario</h1>
                <InputFileCustom inputRef={animalName} />
                <button
                  onClick={() => {
                    CreateNewAnimal(animalName?.current?.value, fetchData);
                    setIsOpenModal(false);
                  }}
                >
                  Enviar
                </button>
              </form>
              <button
                onClick={() => {
                  setIsOpenModal(false);
                }}
              >
                cancelar
              </button>
            </div>
          </div>
        </ModalCustom>
      )}
    </div>
  );
}

const GetCards = ({
  isLoadData,
  animalsOwner,
  setIsOpenModal,
}: {
  isLoadData: boolean;
  animalsOwner: any[];
  setIsOpenModal: (newValue: boolean) => void;
}) => {
  const generficImageURL = [
    "https://images.squarespace-cdn.com/content/v1/61a6f2befb96aa035ef5a15b/713a0b4f-8076-4bc6-906d-f64488756df6/10875.png?format=500w",
    "https://i0.wp.com/bulliscoming.com/wp-content/uploads/2022/09/1-cdn3l9ehkspsxirjfrysyw.webp?fit=1200%2C900&ssl=1",
    "https://i.seadn.io/gae/F_F-_oMr41wGnuc2tPPxmXCPNBpktcdr7huzWoVCNNZxlSAYCU9jSEkgpvfxaoc39Mag6zzlRPuc95pVOMN0lAGagUqW0uAITUYO?auto=format&dpr=1&w=1000",
  ];

  const htlmCard =
    isLoadData &&
    (animalsOwner.length > 0 ? (
      animalsOwner?.map((item: any, index: number) => {
        return (
          <motion.div
            className="grid w-full x-full p-10 max-w-lg"
            key={"ownAnimal" + index}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 20,
            }}
          >
            <div className="card-animal">
              <div
                className="h-3/4 bg-cover bg-center bakcgroundImage"
                style={{
                  backgroundImage: `url(${generficImageURL[index]})`,
                }}
              />
              <div className="grid justify-items-center">
                <h1>{item?.name}</h1>
              </div>
            </div>
          </motion.div>
        );
      })
    ) : (
      <motion.div
      className="my-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <button
          className="button-success"
          onClick={() => {
            setIsOpenModal(true);
          }}
        >
          {" "}
          Por favor crea uno c:{" "}
        </button>
      </motion.div>
    ));
  switch (animalsOwner.length-1 as number) {
    case 0:
      console.log('length 0', animalsOwner.length);
      return (
        <div
          className={
            "grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 justify-items-center"
          }
        >
          {htlmCard}
        </div>
      );
    case 1:
      console.log('length 1', animalsOwner.length);

      return (
        <div
          className={
            "grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 justify-items-center"
          }
        >
          {htlmCard}
        </div>
      );
    case 2:
      return (
        <div
          className={
            "grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 justify-items-center"
          }
        >
          {htlmCard}
        </div>
      );
    default:
      return (
        <div
          className={
            "grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 justify-items-center"
          }
        >
          {htlmCard}
        </div>
      );
  }
};
