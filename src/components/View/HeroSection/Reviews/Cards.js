import React from "react";
import Image from "next/image";
import Rating from "@/components/Assets/Images/Star9.png";

const Cards = ({ profileIcon, name, rating, description }) => {
  // Function to generate star icons based on the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      // Determine which star image to display based on the rating
      const starImage = i < rating ? `/images/star-filled.png` : `/images/star-empty.png`;
      stars.push(
        <Image
          key={i}
          src={starImage}
          alt={`Star ${i + 1}`}
          width={24}
          height={24}
          className="inline-block"
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white shadow-lg p-4 rounded-lg flex">
      <div className="w-1/4 p-2">
        <img
          src={profileIcon}
          alt="Profile Icon"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      <div className="w-3/4 p-2">
        <div className="mb-2">
          <div className="text-xl font-semibold">{name}</div>
          <div className="flex items-center">
            <div className="text-yellow-500">
              <Image src={Rating} alt="Rating" />
            </div>
          </div>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
