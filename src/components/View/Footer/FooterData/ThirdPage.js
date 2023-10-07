import Link from "next/link"
import { FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa'

import { CiFacebook } from "react-icons/ci";

import { FiInstagram } from "react-icons/fi";

const ThirdPage = () => {
  return (
    <div className='flex gap-4 justify-center md:justify-start'>
<Link href='' className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white bg-[#459221] hover:bg-white/[0.5] cursor-pointer'>
  <CiFacebook size={24} />
</Link>
<Link href='' className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white bg-[#459221] hover:bg-white/[0.5] cursor-pointer'>
  <FiInstagram size={20} />
</Link>
<Link href='' className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center bg-[#459221] text-white hover:bg-white/[0.5] cursor-pointer'>
<FaTwitter size={20} />
</Link>
<Link href='' className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center bg-[#459221] text-white hover:bg-white/[0.5] cursor-pointer'>
<FaLinkedin size={20} />
</Link>
<Link href='' className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center bg-[#459221] text-white hover:bg-white/[0.5] cursor-pointer'>
<FaYoutube size={20} />
</Link>
</div>
      
  )
}

export default ThirdPage




