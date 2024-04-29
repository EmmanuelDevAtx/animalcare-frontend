const CardAnimalItem = () => {
  return (
    <div className='relative w-full max-w-80 h-96'>
      <div className=' absolute background-card-opacity-2 rounded-2xl h-full w-full rotate-12 ' />
      <div className=' absolute background-card-opacity-5 rounded-2xl h-full w-full rotate-6 ' />
      <div className='relative w-full max-w-80 h-96 padding-card-presentation justify-center rounded-2xl flex items-center overflow-hidden'>
        <div className=' absolute bg-red-300 rounded-2xl background-main-card ' />
        <div className='relative flex w-full h-full rounded-2xl'>
          <img className='w-full h-full rounded-2xl' src="https://i.pinimg.com/564x/c6/df/ae/c6dfae713159a07febf605f36d5d175e.jpg" alt="CardAnimalItem" />
        </div>
      </div>
    </div>
  );
}

export default CardAnimalItem;