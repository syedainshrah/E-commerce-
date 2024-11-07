import React from 'react';
import Image from "next/image";

export default function Card() {
  return (
    <main className='bg-amber-950 rounded-3xl p-4'>
      <div className='w-full flex flex-wrap justify-center gap-6 md:gap-12'>
        
        {/* Card 1 */}
        <div className='w-full sm:w-[250px] md:w-[300px] lg:w-[350px] h-[400px] bg-slate-400 flex flex-col justify-between items-center p-4 rounded-xl'>
          <div>
            <Image
              src={"/assets/cappuccino.jpg"}
              alt='Cappuccino'
              width={250}
              height={200}
              className='object-cover rounded-xl'
            />
          </div>
          <div className='w-full flex justify-between mt-2'>
            <h1 className='text-black font-serif text-lg'>Cappuccino</h1>
            <p className='text-black text-lg'>$2.4</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='w-full sm:w-[250px] md:w-[300px] lg:w-[350px] h-[400px] bg-slate-400 flex flex-col justify-between items-center p-4 rounded-xl'>
          <div>
            <Image
              src={"/assets/chai latte.jpg"}
              alt='Chai Latte'
              width={250}
              height={200}
              className='object-cover rounded-xl'
            />
          </div>
          <div className='w-full flex justify-between mt-2'>
            <h1 className='text-black font-serif text-lg'>Chai Latte</h1>
            <p className='text-black text-lg'>$2.4</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className='w-full sm:w-[250px] md:w-[300px] lg:w-[350px] h-[400px] bg-slate-400 flex flex-col justify-between items-center p-4 rounded-xl'>
          <div>
            <Image
              src={"/assets/matcha latte.jpg"}
              alt='Matcha Latte'
              width={250}
              height={200}
              className='object-cover rounded-xl'
            />
          </div>
          <div className='w-full flex justify-between mt-2'>
            <h1 className='text-black font-serif text-lg'>Matcha Latte</h1>
            <p className='text-black text-lg'>$2.4</p>
          </div>
        </div>

      </div>
    </main>
  );
}
