import React from 'react'

import thai from '../assets/thailand.jpeg';
// import BoraBora2 from '../assets/borabora2.jpg';
// import Maldives from '../assets/maldives.jpg';
// import Maldives2 from '../assets/maldives2.jpg';
// import KeyWest from '../assets/keywest.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-9 gap-2 px-4 py-16'>
      <div className='lg:col-span-4 flex flex-col justify-evenly'>
        <h1 style={{ fontSize: '3rem' }}>Make your trip Unforgettable</h1>
        <p className='py-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sed est iste, repellat praesentium velit eum dolorem quae veritatis suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium molestiae quis iste, sint impedit incidunt deleniti, dolor dolore eum fugit porro delectus vero blanditiis adipisci odit voluptas fugiat nihil!</p>
      </div>

      <div className='lg:col-span-5 flex flex-col justify-evenly'>
        <img  src={thai} alt="/" />
      </div>
    </div>


  )
}

export default Destinations