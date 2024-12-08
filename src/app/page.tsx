"use client";
import CardAnimalItem from "./components/Cards/CardAnimalItem";

export default function Home() {

  return (
    <div className='flex flex-col w-full '>
      <section className='flex flex-row '>
        <div className='flex-1 flex justify-center items-center h-80'>
          <p className='text-white font-semibold text-justify text-8xl'>
            <span className=' text-teal-100 title-text-cyan'>A</span>
            <span className='title-text-white'>nima</span>
            <span className=' text-violet-100 title-text-violet' >l</span>
            <br />
            <span className='title-text-white'>C</span>
            <span className=' text-pink-100 title-text-pink'>ar</span>
            <span className='title-text-white'>e</span>
          </p>
        </div>
        <div className='flex-1 flex'>
          <CardAnimalItem/>
        </div>
      </section>
    </div>
  );
}
