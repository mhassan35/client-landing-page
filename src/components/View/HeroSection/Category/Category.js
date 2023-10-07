
import React from 'react';
import CategoryItem from './CategoryItem'; // Import the CategoryItem component
import OneImage from "@/components/Assets/Images/fsfsfsfsfe.png";
import TwoImage from "@/components/Assets/Images/6464646.png"; 
import ThreeImage from "@/components/Assets/Images/presentationddddddddd.png";
import FourImage from "@/components/Assets/Images/languagefff.png"
import FiveImage from "@/components/Assets/Images/playlistddd.png"

import SixImage from "@/components/Assets/Images/dar.png"
import SevenImage from "@/components/Assets/Images/fsfsfsfsfe.png"
import EightImage from "@/components/Assets/Images/6464646.png"

const Category = () => {
  // Create an array of objects with image sources and names
  const categoryItems = [
    { imageSrc: OneImage, name: 'College & University' },
    { imageSrc: TwoImage, name: 'Courses & classes' },
    { imageSrc: ThreeImage, name: 'Education services' },
    { imageSrc: FourImage, name: 'Language Learning' },
    { imageSrc: FiveImage, name: 'Music & Theater Class' },
    { imageSrc: SixImage, name: 'Vocational training center' },
    { imageSrc: SevenImage, name: 'College & University' },
    { imageSrc: EightImage, name: 'Courses & classes' },

    // Add more objects for additional images with their respective names
  ];

  return (
    <div className='items-center pt-16 justify-center text-center '>
      <h1 className="font-semibold text-4xl leading-11 mb-6">
        Explore Categories
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4'>
        {categoryItems.map((item, index) => (
          <CategoryItem
            key={index}
            imageSrc={item.imageSrc}
            name={item.name}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
