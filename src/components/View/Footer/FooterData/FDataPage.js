import Link from "next/link"


const FDataPage = () => {
  return (
<div className='flex flex-col gap-3 shrink-0'>
          <h1 className='font-oswald text-green-500 font-semibold cursor-pointer'>
            Company
          </h1>
          <Link href='' className='font-oswald font-medium text-sm cursor-pointer'>
            About
          </Link>
          <Link href='' className='font-oswald font-medium text-sm cursor-pointer'>
            Products
          </Link>
          <Link href='' className='font-oswald font-medium text-sm cursor-pointer'>
          Pricing
          </Link>
          <Link href='' className='font-oswald font-medium text-sm cursor-pointer'>
          Referal Program
          </Link>
          <Link href='' className='font-oswald font-medium text-sm cursor-pointer'>
          Career
          </Link>
          <Link href='' className='font-oswald font-medium text-sm cursor-pointer'>
         Press & media
          </Link>

        </div>
  )
}

export default FDataPage