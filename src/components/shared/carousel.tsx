/* eslint-disable react/no-unused-prop-types */
"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Leftarrow from "../Assets/icons/Leftarrow";
import Rightarrow from "../Assets/icons/Rightarrow";
import CarouselCard from "./carouselcards";
import { internshipArrayCrouselType } from "../utils/arrays";
import { Component } from "react";


const NextArrow = ({ onClick }: any) => (
    <div
        onClick={onClick}
        className="absolute top-[42%] -right-10 lg:-right-5"
    >
        <Rightarrow />
    </div>
);

const PrevArrow = ({ onClick }: any) => (
    <div
        onClick={onClick}
        className="absolute top-[42%] -left-9"
    >
        <Leftarrow />
    </div>
);

// const SliderForResultCards = ({carouselData}:{carouselData:Array<internshipArrayCrouselType>}) => {
//     let responsiveBreak = [
//         {
//             breakpoint: 1445,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 1220,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             }
//         },
//     ]

//     const settings = {
//         dots: false,
//         centerPadding: "66px",
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: responsiveBreak,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//         // centerMode: true,
//         className: "wholeSlider",
//     };
// return (

//     <div
//         className="mx-auto max-w-[15rem] mm:max-w-[21rem] md:max-w-[50rem] xl:max-w-[77rem] "
//     >
//         <Slider {...settings}>
//             {/* Note: Don't remove main tag otherwise it will cause unexpacted design error */}
//             {carouselData.map((item: internshipArrayCrouselType, index: number) => (
//                 <main>
//                     <CarouselCard data={item} />
//                 </main>
//             ))}
//         </Slider>
//     </div>
// )



// };

// export default SliderForResultCards;




export default class SliderForResultCards extends Component<{ carouselData: Array<internshipArrayCrouselType> }>{


    responsiveBreak = [
        {
            breakpoint: 1445,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1220,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]

    settings = {
        dots: false,
        centerPadding: "66px",
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: this.responsiveBreak,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        // centerMode: true,
        className: "wholeSlider",
    };


    render(): React.ReactNode {
        return (
            <div
                className="mx-auto max-w-[15rem] mm:max-w-[21rem] md:max-w-[50rem] xl:max-w-[77rem] "
            >
                <Slider {...this.settings}>
                    {/* Note: Don't remove main tag otherwise it will cause unexpacted design error */}
                    {this.props.carouselData.map((item: internshipArrayCrouselType, index: number) => (
                        <main>
                            <CarouselCard data={item} />
                        </main>
                    ))}
                </Slider>
            </div>
        )
    }
}