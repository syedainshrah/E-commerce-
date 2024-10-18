import React from 'react';
import Image from 'next/image'; // Import the Image component

export default function Middle() {
  return (
    <div className='p-10'>
      <h1 className='text-2xl font-bold mb-6'><b>How To Use Delivery Services</b></h1>
      <div className='flex justify-center space-x-8'>
        <div className='flex flex-col items-center'> {/* Wrapper for image and text */}
          <Image
            src="/assets/images.jpg" // Ensure correct path
            alt="Service Step 1"
            width={200} // Adjust width
            height={200} // Adjust height
            className="rounded ml-6"
          />
          <p className='mt-2'><b>Choose Your Coffee</b></p> {/* Text below the image */}
        </div>

        <div className='flex flex-col items-center'> {/* Wrapper for second image and text */}
          <Image
            src="/assets/download.jpg" // Ensure correct path
            alt="Service Step 2"
            width={200}
            height={200}
            className="rounded ml-6"
          />
          <p className='mt-2'><b>We Diliver It To You</b></p> {/* Example text below the second image */}
        </div>

        <div className='flex flex-col items-center'> {/* Wrapper for third image and text */}
          <Image
            src="/assets/coffe.jpg" // Ensure correct path
            alt="Service Step 3"
            width={200}
            height={200}
            className="rounded ml-6"
          />
          <p className='mt-2'><b>Enjoy Your Coffee</b></p> {/* Example text below the third image */}
        </div>
      </div>
    </div>
  );
}
