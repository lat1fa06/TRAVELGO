import React from 'react'

// import BoraBora from '../assets/borabora.jpg';
// import BoraBora2 from '../assets/borabora2.jpg';
import Gray from '../assets/gray.jpg';
// import Maldives2 from '../assets/maldives2.jpg';
// import Maldives3 from '../assets/maldives3.jpg';
// import KeyWest from '../assets/keywest.jpg';
import SelectsCard from './SelectsCard';





const Selects = () => {
  return (
    <div className='  max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-8 flex flex-col justify-evenly'>  </div>
      <div>
        <h2>Best Deals</h2>



        <div className=' flex flex-col items-center '>
          <a href="ссылка_на_страницу_для_BoraBora" className='mb-4'>
            <SelectsCard bg={Gray} text='Bora Bora' className='w-400' />
            <h2 className='mt-2 text-lg font-semibold'>Best restaurants</h2>
            <p className='mt-1'>Lorem, ipsum dolor.</p>
          </a>
          <a href="ссылка_на_страницу_для_Maldives" className='mb-4'>
            <SelectsCard bg={Gray} text='Maldives' className='w-400' />
            <h2 className='mt-2 text-lg font-semibold'>Best Hotels</h2>
            <p className='mt-1'>Lorem, ipsum dolor</p>
          </a>
          <a href="ссылка_на_страницу_для_Antigua">
            <SelectsCard bg={Gray} text='Antigua' className='w-400' />
            <h2 className='mt-2 text-lg font-semibold'>Best Hotels</h2>
            <p className='mt-1'>Lorem, ipsum dolor.</p>
          </a>
        </div>

        <h2>Most Popular</h2>
        <div className='flex flex-col items-center'>
          <a href="ссылка_на_страницу_для_BoraBora" className='mb-4'>
            <SelectsCard bg={Gray} text='Bora Bora' className='w-400 h-72' />
            <h2 className='mt-2 text-lg font-semibold'>Best restaurants</h2>
            <p className='mt-1'>Lorem, ipsum dolor.</p>
          </a>
          <a href="ссылка_на_страницу_для_Maldives" className='mb-4'>
            <SelectsCard bg={Gray} text='Maldives' className='w-400 h-72' />
            <h2 className='mt-2 text-lg font-semibold'>Best Hotels</h2>
            <p className='mt-1'>Lorem, ipsum dolor</p>
          </a>
          <a href="ссылка_на_страницу_для_Antigua">
            <SelectsCard bg={Gray} text='Antigua' className='w-400 h-72' />
            <h2 className='mt-2 text-lg font-semibold'>Best Hotels</h2>
            <p className='mt-1'>Lorem, ipsum dolor.</p>
          </a>
        </div>
















      </div>
    </div>

  )
}

export default Selects