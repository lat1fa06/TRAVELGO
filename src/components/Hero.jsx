import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import vidi from '../assets/vidi.mp4';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={vidi}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-800/20'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white  fontSize:90 p-4 '>
        <h1 style={{ fontSize: '6em', marginBottom: '2cm' }}>Suitable for you</h1>
        <div style={{ display: 'flex', gap: '2cm', justifyContent: 'center', marginBottom: '1cm', fontSize:'22px'    }}>
          <a href="/search-all" className='link1'>Search All</a>
          <a href="/things-to-do" className='link1'>Things to do?</a>
          <a href="/restaurants" className='link1'>Restaurants</a>
          <a href="/hotels" className='link1'>Hotels</a>
        </div>






        <form
          className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90 '
        >
          <div>
            <input
              className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
                  '
              type='text'
              placeholder='Search '
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch size={20} className='icon' style={{ color: '#ffffff' }} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
