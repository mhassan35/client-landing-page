// import Link from 'next/link'
// import { BsTelephone } from "react-icons/bs";
// import { BiMessageDetail } from "react-icons/bi";
// import { CiLocationOn } from "react-icons/ci";

// const ContectList = () => {
//   return (
// <div className='flex flex-col gap-3'>
//            <h1 className='font-oswald text-green-500 font-medium text-sm'>
//             Contect Us
//           </h1>
//           <Link href='' className=' flex gap-2 text-sm hover:text-white cursor-pointer'>
//            <BsTelephone size={22} className='text-green-500' /> 
//            +91 33555 6778
//           </Link>
//           <Link href='' className=' flex gap-2 text-sm hover:text-white cursor-pointer'>
//           <BiMessageDetail size={22} className='text-green-500' />
//           JohnDoe@gmail.com
//           </Link>
//           <Link href='' className=' flex gap-2 text-sm hover:text-white cursor-pointer'>
//           <CiLocationOn size={22} className='text-green-300' />
//           Street 34 Sector 12 B
//           Mumbai India
//           </Link>
//             </div>
//   )
// }

// export default ContectList




import Link from 'next/link'
import { BsTelephone } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

const ContactList = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='font-oswald text-green-500 font-medium text-sm'>
        Contact Us
      </h1>
      <Link href='' className='flex gap-2 text-sm hover:text-white cursor-pointer'>
        <BsTelephone size={22} className='text-green-500' /> 
        +91 33555 6778
      </Link>
      <Link href='' className='flex gap-2 text-sm hover:text-white cursor-pointer'>
        <BiMessageDetail size={22} className='text-green-500' />
        JohnDoe@gmail.com
      </Link>
      <Link href='' className='flex gap-2 text-sm hover:text-white cursor-pointer'>
        <CiLocationOn size={22} className='text-green-300' />
        Street 34 Sector 12 B
        Mumbai India
      </Link>
    </div>
  )
}

export default ContactList;
