
import React from 'react';
import Image from 'next/image';

const CategoryItem = ({ imageSrc, index, name }) => {
  return (
    <div className='flex border flex-col items-center p-4'>
      <div className='flex items-center justify-center rounded-full bg-gray-200 w-16 h-16'>
        <Image
          src={imageSrc}
          alt={`Image ${index}`}
          width={40} // Set your desired width
          height={40} // Set your desired height
        />
      </div>
      <h2 className='text-lg font-semibold'>{name}</h2>
    </div>
  );
};

export default CategoryItem;
