
import React from 'react'

import Wrapper from '@/components/View/wrapper'
import SecondMenu from '../FooterData/SecondMenu'
import FDataPage from '../FooterData/FDataPage'
import ThirdPage from '../FooterData/ThirdPage'
import NewpageData from '../FooterData/NewpageData'
import ContectList from '../FooterData/ContectList'
const Footer  = () => {

  return (
    <div className='bg-[#090303] text-white pt-32 pb-3'>
      <Wrapper className='flex justify-between flex-col md:flex-row gap-12 md:gap-0' >

      {/* Left Side */}
      <div className='flex gap-[35px] md:gap-[55px] lg:gap-[70px] flex-col md:flex-row'>
        {/* Start */}
        <NewpageData />
        <FDataPage />
      {/* Menu End */}

      {/* Second Menu Start */}
      <div className='flex gap-[35px] md:gap-[55px] lg:gap-[70px] shrink-0 ' >
        {/* Next Menu Start */}
        <SecondMenu />
        <ContectList />
      </div>
      <div className='flex gap-[35px] md:gap-[55px] lg:gap-[70px] shrink-0 ' >
        
      </div>
              {/* First MENU ENDDED */}
            </div>
            {/* First LEFT END */}

            {/* RIGHT START */}
            <div className='md:absolute md:right-8 md:mt-48' ><ThirdPage /></div>     
        {/* End */}
      </Wrapper>
      <Wrapper className='flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0 ' >
      <div className='text-[15px] text-white/[0.5] hover:text-white cursor-pointer md:text-left'>
        CopyRight © 2023 Muhammad Hassan, All Rights Reserved
       </div>
       {/* Left Side Complete End */}

      </Wrapper>
    </div>
  )
}

export default Footer;