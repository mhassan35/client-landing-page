import React from 'react';
import Image from 'next/image';
import { BagIcon, CalenderIcon, CoinIcon, GoogleIcon } from '../Assets';
import { internshipArrayCrouselType } from '../utils/arrays';

function CarouselCard({ data }: { data: internshipArrayCrouselType }) {
    return (
        <div className="max-w-[393px] text-[16px] rounded-t-[5px] border-[1px] border-[#D0D0D0] flex flex-col min-h-[196px]">
            <div className="flex flex-col">
                <div className="flex items-center gap-4 p-4">
                    <Image src={data.logo} alt={"coin"} />
                    <div className="">
                        <div className='text-[#000] font-semibold -ml-2'>Commercial Industrial Placement</div>
                        <div className='flex gap-[11px] text-[#777] text-[14px]'>
                            <p className='flex gap-[6px]'>
                                <span>
                                    <Image src={BagIcon} alt='BagIcon' />
                                </span>
                                Google
                            </p>
                            <p className='flex gap-[6px]'>
                                <span>
                                    <Image src={CalenderIcon} alt='BagIcon' />
                                </span>
                                Internship  (10 Months+)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center p-4">
                    <Image src={CoinIcon} alt={"coin"} />
                    <span className='ml-[10px]'>10 coins</span>
                </div>
            </div>
            <div className="flex h-[58px] justify-around items-center border-t-[1px]">
                <div>
                    <button className=" bg-green-700 text-white py-2 px-8 rounded-[5px]">
                        Apply Now
                    </button>
                </div>
                <div>
                    <button className="bg-transparent text-[#777] border border-[#777] py-2 px-8 rounded-[5px] ">
                        View Program
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CarouselCard;

