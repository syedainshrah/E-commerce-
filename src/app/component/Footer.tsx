import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className='bg-gray-800 text-white p-4 mt-5'>
      <div className='container mx-auto text-center'>
        <h2 className='text-lg font-bold'>Stay Connected</h2>
        <p className='mb-2'>Follow us on social media for the latest updates!</p>
        <div className='flex justify-center space-x-4 mb-4'>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='hover:text-orange-300'>
            <Image src='/assets/linkedin.jpeg' alt='LinkedIn' width={60} height={30} className='inline' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='hover:text-orange-300'>
            <Image src='/assets/insta.jpeg' alt='Instagram' width={60} height={30} className='inline' />
          </a>
          <a href='https://whatsapp.com' target='_blank' rel='noopener noreferrer' className='hover:text-orange-300'>
            <Image src='/assets/wp.jpeg' alt='WhatsApp' width={60} height={30} className='inline' />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} [Caffeine Corner]. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;