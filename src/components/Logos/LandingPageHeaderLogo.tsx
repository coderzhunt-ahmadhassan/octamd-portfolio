import React from 'react'
import { LogoDark } from '@/assets'
import Image from 'next/image'

type Props = {}

export const LandingPageHeaderLogo = (props: Props) => {
  return (
    <div
      id='logo'
      className='w-[280px] h-full flex__center bg-black relative
  after:absolute after:bottom-0 after:right-0 after:border-r-[30px] after:border-r-white after:border-t-[75px] after:border-t-transparent after:h-0 after:w-0'
    >
      <Image className='h-[60px] w-[202px]' src={LogoDark} alt='logo' height={60} width={202} />
    </div>
  )
}
