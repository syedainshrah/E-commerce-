import React from 'react';

export default function Subscribe() {
  return (
    <div className='flex justify-center items-center mt-10 bg-gray-100'>
      <div className='relative mx-24 w-full rounded-lg shadow-lg overflow-hidden'>
        {/* Image as background for the input section */}
        <div 
          className='absolute inset-0 bg-cover bg-center' 
          style={{
            backgroundImage: "url('/assets/bg.jpeg')", // Replace with your image path
          }}
        ></div>

        {/* Overlay for better readability */}
        <div className='bg-gray-800 bg-opacity-70 p-8 relative z-10 text-center'>
          <h2 className='text-2xl font-bold mb-4 text-white'>Subscribe for 50% Off</h2>
          <input
            type='email'
            placeholder='Enter your email'
            className='h-10 p-2 border rounded border-gray-300 w-full size-12' 
          />
          <button className='mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600'>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
