import React from 'react'
import { LogoDark } from '@/assets'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

export const LandingPageHeaderLogo = ({ className }: Props) => {
  return (
    <div
      id='logo'
      className={twMerge(
        'w-[280px] h-full flex__center bg-black relative md:after:absolute md:after:bottom-0 md:after:right-0 2xl:after:border-r-[30px] 2xl:after:border-r-white 2xl:after:border-t-[75px] 2xl:after:border-t-transparent 2xl:after:h-0 2xl:after:w-0',
        className && className
      )}
    >
      <Image
        className=' h-[50px] w-[168px] md:h-[60px] md:w-[202px]'
        src={LogoDark}
        alt='logo'
        height={60}
        width={202}
      />
    </div>
  )
}
