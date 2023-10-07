import Link from 'next/link'


const SecondMenu = () => {
  return (
<div className='flex flex-col gap-3'>
          <h1 className='font-oswald text-green-500 font-medium  text-sm'>
            Support
          </h1>
          <Link href='' className='text-sm cursor-pointer'>
          Support Portal
          </Link>
          <Link href='' className='text-sm cursor-pointer'>
          List Of charges
          </Link>
          <Link href='' className='text-sm cursor-pointer'>
           Pricing
          </Link>
          <Link href='' className='text-sm cursor-pointer'>
            Referal Program
          </Link>
          <Link href='' className='text-sm cursor-pointer'>
            Download Resources
          </Link>
          <Link href='' className='text-sm cursor-pointer'>
            Videos
          </Link>
            </div>
  )
}

export default SecondMenu