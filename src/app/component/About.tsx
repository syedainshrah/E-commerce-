import React from 'react';
import Image from 'next/image'; // Import the Image component

export default function About() {
  return (
    <main>
      <div className='bg-amber-100 flex flex-col items-center p-10 mt-2'>
        <div className='flex items-center'>
          <Image
            src="/assets/chai latte.jpg" // Update with your image path
            alt="About Our Coffee Shop"
            width={200} // Adjust width as needed
            height={180} // Adjust height as needed
            className="rounded" // Add styling for the image
          />
          <h1 className='text-2xl font-bold ml-5'>About Us</h1> {/* About Us text next to image */}
        </div>
        <p className='mt-5'>
          <b>We provide quality coffee and are ready to deliver.</b>
        </p>
        <p className='mt-2'>
          We are a company that makes and distributes delicious drinks. Our main product is made with a secret recipe and available in stores worldwide.
        </p>
        <button className='mt-5 bg-gradient-to-r from-gray-800 to-gray-600 text-white font-bold py-2 px-4 rounded hover:from-gray-700 hover:to-gray-500 transition duration-300'>
          Get Your Coffee
        </button>
      </div>
    </main>
  );
}
