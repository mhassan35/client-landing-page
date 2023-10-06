import Image from 'next/image'
import React from 'react'
import images from "@/components/Assets/ImagesEllipse 8 (2).png";

const CardPage = () => {
  return (
    <div className='p-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4'>
            <div>
                <Image src={images} alt='' />                    

                </div>
        </div>
        
    </div>
  )
}

export default CardPage