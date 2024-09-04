'use client'

import { WcsDoctors, WcsTabIcon } from '@/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { Range } from '@/components/common'

type Props = {}

export const WhyChoseUsTabs = (props: Props) => {
  const [tab, setTab] = useState<number>(2)
  return (
    <div className='mt-[80px] p-[99px_60px_60px] bg-white shadow-[-0.5rem_0.5rem_22rem_#00000015] rounded-[30px] relative'>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80px] w-[calc(100%-2rem)] max-w-[800px] bg-themeSecondary rounded-[30px] overflow-hidden flex'>
        <div
          className='absolute h-full bg-themePrimary w-[16.7rem] top-0'
          style={{ left: `calc(16.6rem*${tab})` }}
        ></div>
        <div className='flex-1 border relative border-white flex__center gap-[10px]'>
          <Image
            className='w-[40px] h-[40px] aspect-square rounded-full'
            src={WcsTabIcon}
            alt='tab icon'
            height={40}
            width={40}
          />
          <p className='text-white urbanist font_18_600'>Our Emergency Case</p>
        </div>
        <div className='flex-1 border relative border-white flex__center gap-[10px]'>
          <Image
            className='w-[40px] h-[40px] aspect-square rounded-full'
            src={WcsTabIcon}
            alt='tab icon'
            height={40}
            width={40}
          />
          <p className='text-white urbanist font_18_600'>Our Emergency Case</p>
        </div>
        <div className='flex-1 border relative border-white flex__center gap-[10px]'>
          <Image
            className='w-[40px] h-[40px] aspect-square rounded-full'
            src={WcsTabIcon}
            alt='tab icon'
            height={40}
            width={40}
          />
          <p className='text-white urbanist font_18_600'>Our Emergency Case</p>
        </div>
      </div>
      {tab === 0 && <Tab1 />}
      {tab === 1 && <Tab1 />}
      {tab === 2 && <Tab1 />}
    </div>
  )
}

const Tab1 = () => {
  return (
    <div className='flex gap-[80px]'>
      <div className='flex flex-col flex-1'>
        <h3 className='urbanist font_36_700 max-w-[29rem]'>
          Benefits by <span className='text-themePrimary'>Mediax</span> Dental Care And Clinic
        </h3>
        <p className='urbanist font_16_400 mt-10 mb-[60px] text-[#788094]'>
          Prompt care for dental emergencies, such as toothaches, broken teeth, or knocked-out
          teeth. Specialized dental care for children. Give patients an estimate of the average wait
          time for scheduled appointments.
        </p>
        <div className='flex flex-col gap-6'>
          <Range title='Dental Prevention' percentage={85} />
          <Range title='Dental Prevention' percentage={90} />
          <Range title='Dental Prevention' percentage={60} />
          <Range title='Dental Prevention' percentage={75} />
        </div>
      </div>
      <Image
        className='flex-1 rounded-[30px] object-cover'
        src={WcsDoctors}
        alt='doctors'
        height={800}
        width={800}
      />
    </div>
  )
}
