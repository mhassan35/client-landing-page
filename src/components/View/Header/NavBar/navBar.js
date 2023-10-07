'use client'

import React, { useState } from 'react';
import Logo from '@/components/Assets/Images/ED-Review.png';
import Image from 'next/image';
import Bell from '@/components/Assets/Images/Vector.png';
import Profile from '@/components/Assets/Images/Ellipse 1.png';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const navigationItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <div className='bg-white'>
      <div className='max-w-screen-xl mx-auto p-4 flex items-center justify-between'>
        <Image src={Logo} alt="Logo" height={22} width={98} />
        <ul className='hidden md:flex items-center gap-8 text-md font-semibold'>
          {navigationItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className='flex items-center space-x-6'>
          <Image className='w-4 h-4 md:w-5 md:h-5' src={Bell} alt="Bell" height={22} width={20} />
          <div className='relative inline-block text-left'>
            <div className='cursor-pointer' onClick={toggleDropdown}>
              <Image className='w-10 h-10 md:w-12 md:h-12' src={Profile} alt="Profile" height={24} width={22} />
            </div>
            {showDropdown && (
              <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                <div className='py-1'>
                  {navigationItems.map((item, index) => (
                    <a
                      key={index}
                      href='#' // Replace with actual links
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button className='hidden md:block h-12 w-40 bg-[#67E776]'>
            Post A Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
