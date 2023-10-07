import SliderForResultCards from '@/components/shared/carousel';
import { coursesWeOfferArrayCarousel, internshipArrayCrousel } from '@/components/utils/arrays';
import React from 'react';

const CoursesOffer = () => {

    return (
        <div className='pt-18 text-center'>
            <h1 className="font-semibold text-4xl leading-11 mb-6">
            Courses We Offer
            </h1>

            <div>
                <SliderForResultCards carouselData={coursesWeOfferArrayCarousel} />
            </div>
        </div>
    );
};

export default CoursesOffer;