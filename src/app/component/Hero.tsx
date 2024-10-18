import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='w-full bg-orange-950 min-h-screen flex justify-center items-center'>
      <div className='w-[90%] bg-black flex justify-between items-center h-full p-4'>
        <div className='flex flex-col justify-center'>
          <p className='text-slate-200 mt-4 ml-2 hover:text-orange-300 text-3xl'>
            <b>Enjoy your coffee before your activity</b>
          </p>

          <p className='text-slate-200 mt-4 ml-2 hover:text-orange-300 mr-96 '>
            Boost your productivity and build your mode with a glass of coffee in the morning.
          </p>
          <button className='bg-orange-500 bg-gradient-to-r from-gray-800 to-gray-600 hover:bg-orange-400 text-white py-2 px-4 rounded-e-2xl rounded-s-2xl mt-5 mr-auto'>
              Order Now
            </button>
            <button className='bg-blue-500 bg-gradient-to-r from-gray-800 to-gray-600 hover:bg-blue-400 text-white py-2 px-4 rounded mt-5 mr-auto'>
              More Menu
            </button>
        </div>
        <div className='h-full flex items-center'>
          <Image
            src="/assets/hero.jpg"
            alt='coffee shop'
            width={1200} // Change width here
            height={900}  // You can adjust height as well
            className="w-auto h-full object-cover" // Adjust height and set object-cover
          />
        </div>
      </div>
    </div>
  );
}
