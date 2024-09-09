import React from 'react'
import { DefaultHeaderLogo, LogoDark } from '@/assets'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

export const HeaderLogo = ({ className }: Props) => {
  return (
    <div
      id='logo'
      className={twMerge(
        'w-[220px] md:w-[350px] h-full flex justify-start items-center relative',
        className && className
      )}
    >
      <div className='absolute hidden md:block bg-[#F5F7FA] top-0 right-0 h-screen w-screen z-[1] origin-top-right -skew-x-[25deg]'></div>
      <Image
        className=' h-[50px] w-[168px] md:h-[60px] md:w-[202px] z-[2]'
        src={DefaultHeaderLogo}
        alt='logo'
        height={60}
        width={202}
      />
    </div>
  )
}
