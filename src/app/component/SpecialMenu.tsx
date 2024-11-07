import React from 'react';
import Image from 'next/image'; // Import the Image component

export default function SpecialMenu() {
  return (
    <div className='p-10'>
      <h1 className='text-2xl border-red-500 font-bold mb-6 text-left'>
        <b>Special Menu For You</b>
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'> {/* Responsive grid layout */}

        {/* Card 1 */}
        <div className='p-4 rounded shadow-md flex flex-col items-center'>
          <Image
            src="/assets/downloaded.jpeg" // Update with your image path
            alt="Menu Item 1"
            width={200}
            height={200}
            className="rounded mb-2"
          />
          <h2 className='text-black font-bold text-left w-full font-serif'>Moccacino</h2>
          <p className='text-black text-right w-full font-serif'>$2.4</p>
        </div>

        {/* Card 2 */}
        <div className='p-4 rounded shadow-md flex flex-col items-center'>
          <Image
            src="/assets/my.jpeg" // Update with your image path
            alt="Menu Item 2"
            width={200}
            height={200}
            className="rounded mb-2"
          />
          <h2 className='text-black font-bold text-left w-full font-serif'>Waffle Ice Cream</h2>
          <p className='text-black text-right w-full font-serif'>$2.5</p>
        </div>

        {/* Card 3 */}
        <div className='p-4 rounded shadow-md flex flex-col items-center'>
          <Image
            src="/assets/ice.jpeg" // Update with your image path
            alt="Menu Item 3"
            width={200}
            height={200}
            className="rounded mb-2"
          />
          <h2 className='text-black font-bold text-left w-full font-serif'>Ice Coffee</h2>
          <p className='text-black text-right w-full font-serif'>$2.0</p>
        </div>

        {/* Card 4 */}
        <div className='p-4 rounded shadow-md flex flex-col items-center'>
          <Image
            src="/assets/sendwich.jpeg" // Update with your image path
            alt="Menu Item 4"
            width={200}
            height={200}
            className="rounded mb-2"
          />
          <h2 className='text-black font-bold text-left w-full font-serif mt-36'>Sendwich</h2>
          <p className='text-black text-right w-full font-serif'>$2.6</p>
        </div>

        {/* Card 5 */}
        <div className='p-4 rounded shadow-md flex flex-col items-center'>
          <Image
            src="/assets/h.jpeg" // Update with your image path
            alt="Menu Item 5"
            width={200}
            height={200}
            className="rounded mb-2"
          />
          <h2 className='text-black font-bold text-left w-full font-serif'>Hot Milk</h2>
          <p className='text-black text-right w-full font-serif'>$2.7</p>
        </div>

        {/* Card 6 */}
        <div className='p-4 rounded shadow-md flex flex-col items-center'>
          <Image
            src="/assets/almond.jpeg" // Update with your image path
            alt="Menu Item 6"
            width={200}
            height={200}
            className="rounded mb-2"
          />
          <h2 className='text-black font-bold text-left w-full font-serif'>Almond Coffee</h2>
          <p className='text-black text-right w-full font-serif'>$2.8</p>
        </div>

      </div>
    </div>
  );
}
