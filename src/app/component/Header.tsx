import Link from 'next/link';
import React from 'react';
import Head from 'next/head'; // Importing the Next.js Head component

export default function Header() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Caffeine Corner</title>
      </Head>
      
      <main className='bg-amber-100'>
        <div className='w-full h-[80px] flex items-center border-b-2'>
          <div className='w-full md:w-[80%] h-full flex items-center justify-between px-4'>
            {/* Shop Name on the Left with Styling */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-orange-700 shadow-lg'>
              Caffeine Corner
            </h1>

            {/* Navigation Links Centered */}
            <div className='flex justify-center flex-grow'>
              <ul className='flex gap-4 sm:gap-6'>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>

            {/* Search Bar on the Right */}
            <div>
              <input
                type='text'
                placeholder='Search...'
                className='h-10 p-2 border rounded w-32 sm:w-48 md:w-64'
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
