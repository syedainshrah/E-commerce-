import React from 'react';
import Image from "next/image";

export default function Card() {
  return (
    <main className='bg-amber-950 rounded-3xl '>
      <div className='w-full flex gap-36  justify-center '> {/* Adjusted gap */}
        
        {/* Card 1 */}
        <div className='w-[300px] h-[400px] bg-slate-400 flex flex-col justify-between items-center p-4'>
          <div>
            <Image
              src={"/assets/cappuccino.jpg"}
              alt='Cappuccino'
              width={250}
              height={200}
              className='object-cover'
            />
          </div>
          <div className='w-full flex justify-between mt-2'>
            <h1 className='text-black font-serif'>Cappuccino</h1>
            <p className='text-black'>$2.4</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='w-[300px] h-[400px] bg-slate-400 flex flex-col justify-between items-center p-4'>
          <div>
            <Image
              src={"/assets/chai latte.jpg"}
              alt='Chai Latte'
              width={250}
              height={200}
              className='object-cover'
            />
          </div>
          <div className='w-full flex justify-between mt-2'>
            <h1 className='text-black font-serif'>Chai Latte</h1>
            <p className='text-black'>$2.4</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className='w-[300px] h-[400px] bg-slate-400 flex flex-col justify-between items-center p-4'>
          <div>
            <Image
              src={"/assets/matcha latte.jpg"}
              alt='Matcha Latte'
              width={250}
              height={200}
              className='object-cover'
            />
          </div>
          <div className='w-full flex justify-between mt-2'>
            <h1 className='text-black font-serif'>Matcha Latte</h1>
            <p className='text-black'>$2.4</p>
          </div>
        </div>

      </div>
    </main>
  );
}
