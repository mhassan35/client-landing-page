// 'use client'
// import Image from 'next/image';
// import React from 'react';
// import BgImage from '@/components/Assets/Images/Rectangle 2.png';
// import Background from './Background';


// const HomePage = () => {
//   return (
//     <div className="relative">
//       {/* Image Container */}
//       <div className='absolute z-10' >
//       <Background />
//       </div>
//       <div className="relative">
//         <div style={{ width: '100%', height: '100%' }}>
//           <Image
//             src={BgImage}
//             alt=""
//           />
     
//         </div>
//         {/* Overlay */}
//         <div className="absolute top-0 left-0 w-full h-full bg-blue-800 opacity-80"></div>
//       </div>
    
//     </div>
//   );
// };

// export default HomePage;


'use client'

import Image from 'next/image';
import BgImage from '@/components/Assets/Images/Rectangle 2.png';
import HomeImage from '@/components/Assets/Images/data.png';
import React, { useState } from 'react';

const HomePage = () => {


  return (
    <div className="relative ">
      {/* Background Image */}
      <div className="relative">
        <Image className="bg-cover w-full bg-center" src={BgImage} alt="Background" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-700 opacity-80"></div>

        {/* Content */}
        <div className="absolute inset-0 p-2 flex items-center justify-start text-white">
          <div className="">
            <h1 className="text-4xl font-bold">Your Text Goes Here</h1>
            <h1 className="mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <h3>Mosdkjfhsd</h3>
            <div className="relative flex mt-4">
              <input
                type="text"
                placeholder='search here'
                className="w-full md:w-96 border border-gray-300 rounded-md py-2 px-4"
              />
              <select
                className="text-black bg-transparent -ml-24"
              >
                <option >Home</option>
                <option >About</option>
                <option >Contact</option>
              </select>
              <button
                className="bg-[#67E776] text-black ml-2 px-[15px] py-[10px] mt-2 md:mt-0"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image on the right (Responsive and at the bottom-right corner) */}
      <div className="absolute inset-0 flex items-end justify-end">
        <div className="relative w-96 h-[490px] md:w-80 md:h-[380px] lg:w-[680px] lg:h-[480px]">
          <Image
            src={HomeImage}
            alt="Your Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
