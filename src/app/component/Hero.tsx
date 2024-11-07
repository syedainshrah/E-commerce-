import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='w-full bg-orange-950 min-h-screen flex justify-center items-center'>
      <div className='w-full md:w-[90%] bg-black flex flex-col md:flex-row justify-between items-center h-full p-4'>
        
        {/* Left Content: Text and Buttons */}
        <div className='flex flex-col justify-center text-center md:text-left'>
          <p className='text-slate-200 mt-4 ml-2 hover:text-orange-300 text-3xl'>
            <b>Enjoy your coffee before your activity</b>
          </p>

          <p className='text-slate-200 mt-4 ml-2 hover:text-orange-300'>
            Boost your productivity and build your mood with a glass of coffee in the morning.
          </p>
          
          <div className='flex flex-col items-center md:items-start mt-5'>
            <button className='bg-orange-500 bg-gradient-to-r from-gray-800 to-gray-600 hover:bg-orange-400 text-white py-2 px-4 rounded-e-2xl rounded-s-2xl mt-3 w-32 md:w-auto'>
              Order Now
            </button>
            <button className='bg-blue-500 bg-gradient-to-r from-gray-800 to-gray-600 hover:bg-blue-400 text-white py-2 px-4 rounded mt-3 w-32 md:w-auto'>
              More Menu
            </button>
          </div>
        </div>

        {/* Right Content: Image */}
        <div className='w-full h-[300px] md:h-[250px] flex items-center justify-center'>
          <Image
            src="/assets/hero.jpg"
            alt='coffee shop'
            width={200}  // Smaller width for the image
            height={200} // Smaller height for the image
            className="w-[200px] h-[200px] object-cover rounded-full" // Round the image
          />
        </div>
      </div>
    </div>
  );
}
