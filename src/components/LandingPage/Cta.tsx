import React from 'react'
import { SectionWrapper } from '@/components/common'
import Image from 'next/image'
import { cta_bg } from '@/assets'
import { Button } from '@/components/ui'

type Props = {}

export function Cta({}: Props) {
  return (
    <SectionWrapper
      bgProps={<div className='absolute top-1/2 left-0 w-full h-full bg-[#F5F8FD] p-4'></div>}
    >
      <div className='w-full rounded-[20px] relative h-auto min-h-[422px] [&_*]:pointer-events-none overflow-hidden'>
        <Image
          className='object-cover object-center absolute top-0 left-0 h-full w-full'
          src={cta_bg}
          height={417}
          width={626}
          alt='cta background image'
        />
        <div className='absolute bg-cta-gradient top-0 left-0 h-full w-full'></div>
        <div className='absolute flex flex-col h-full w-full gap-9 px-[61px] justify-center items-start'>
          <h2 className='urbanist font_48_700 text-white max-w-[33rem]'>
            We Are Pleased To Offer You The Healthy.
          </h2>
          <Button
            variant='secondary'
            className='rounded-full uppercase dmSans font_14_700 h-14 w-[206px]'
          >
            contact us now
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
