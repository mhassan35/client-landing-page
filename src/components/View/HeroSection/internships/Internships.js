'use client'
import React, { useState } from 'react';

import { MdOutlineAccountBox } from 'react-icons/md';
import { BiSolidShoppingBag ,BiSolidColor } from 'react-icons/bi';

import { MdEngineering } from 'react-icons/md';

import { AiOutlineTranslation } from 'react-icons/ai';

import Link from 'next/link';
import FirstPage from './FirstPage';
// import CarouselSection from './carouselSection';



const LatestInternships = () => {
  // State to track the clicked button index
  const [selectedButton, setSelectedButton] = useState(0);

  // Handler for button click
  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  // Button data with icons
  const buttons = [
    { text: 'Accounting', icon: <MdOutlineAccountBox size={25} /> },
    { text: 'Marketing', icon: <BiSolidShoppingBag size={25} /> },
    { text: 'Engineer', icon: <MdEngineering size={25} /> },
    { text: 'Translation', icon: <AiOutlineTranslation size={25} /> },
    { text: 'Graphic Designer', icon: <BiSolidColor /> },
  ];

  return (
    <div className='pt-16 text-center'>
      <h1 className="font-semibold text-4xl leading-11 mb-6">
        Latest Internships
      </h1>
      <ul className="flex flex-col items-center sm:flex-row justify-center gap-8">
        {buttons.map((button, index) => (
          <li
            key={index}
            className={`px-4 py-4 rounded-md text-lg mb-2 sm:mb-0 ${
              selectedButton === index ? 'bg-blue-700 text-white' : ' hover:bg-blue-700 text-black'
            }`}
          >
            <Link href="#"
              onClick={() => handleButtonClick(index)}
              className="w-full h-full flex items-center justify-center"
            >
              {button.icon}
              <span className="ml-2">{button.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div>
      <FirstPage />
      </div>
    </div>
  );
};

export default LatestInternships;

