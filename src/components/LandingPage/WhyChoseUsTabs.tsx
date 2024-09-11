'use client'

import { WcsDoctors, WcsTabIcon } from '@/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { Range } from '@/components/common'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Button } from '@/components/ui'

type Props = {}

type TabStructure = {
  buttonWidth: string
  tabs: {
    idx: number
    title: string
    content: React.JSX.Element
    icon: StaticImport
  }[]
}

export const WhyChoseUsTabs = (props: Props) => {
  const [tab, setTab] = useState<number>(2)

  const handleTabClick = (index: number) => setTab(index)

  const tabsStructure: TabStructure = {
    buttonWidth: '16.7rem',
    tabs: [
      {
        idx: 0,
        title: 'Our Emergency Case',
        content: <Tab1 />,
        icon: WcsTabIcon
      },
      {
        idx: 1,
        title: 'Our Professional Skills',
        content: <Tab2 />,
        icon: WcsTabIcon
      },
      {
        idx: 2,
        title: 'Our Opening Hours',
        content: <Tab3 />,
        icon: WcsTabIcon
      }
    ]
  }

  return (
    <div className='mt-[30px] lg:mt-[80px] p-[33px_20px_20px] lg:p-[99px_60px_60px] bg-white shadow-[-0.5rem_0.5rem_22rem_#00000015] rounded-[30px] relative'>
      <div className='absolute top-0 hidden lg:flex left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80px] w-[calc(100%-2rem)] max-w-[800px] bg-themeSecondary rounded-[30px] overflow-hidden'>
        <div
          className='absolute h-full bg-themePrimary w-[16.7rem] top-0'
          style={{ left: `calc(${tabsStructure.buttonWidth}*${tab})` }}
        ></div>
        {tabsStructure.tabs.map(tabData => {
          const { title, icon, idx } = tabData
          return (
            <div
              className='flex-1 border relative border-white flex__center gap-[10px] [&_*]:pointer-events-none'
              key={idx}
              onClick={() => handleTabClick(idx)}
            >
              <Image
                className='w-10 h-10 aspect-square rounded-full'
                src={icon}
                alt='tab icon'
                height={40}
                width={40}
              />
              <p className='text-white font-urbanist font_18_600'>{title}</p>
            </div>
          )
        })}
      </div>
      <div className='relative flex flex-wrap lg:hidden w-full gap-4 mb-8'>
        {tabsStructure.tabs.map(tabData => {
          const { title, icon, idx } = tabData
          return (
            <Button
              variant={`${idx === tab ? 'primary' : 'secondary'}`}
              className='p-10 flex-1 whitespace-nowrap rounded-xl'
              key={idx}
              onClick={() => handleTabClick(idx)}
            >
              <Image
                className='w-10 h-10 aspect-square rounded-full'
                src={icon}
                alt='tab icon'
                height={40}
                width={40}
              />
              <p className='text-white font-urbanist font_18_600'>{title}</p>
            </Button>
          )
        })}
      </div>
      {tabsStructure.tabs[tab].content}
    </div>
  )
}

const Tab1 = () => {
  return (
    <div className='flex flex-wrap gap-[80px]'>
      <div className='flex flex-col flex-1 basis-[225rem] md:basis-[10rem]'>
        <h3 className='font-urbanist font_36_700 text-center md:text-left mx-auto md:mx-0 max-w-[29rem]'>
          Benefits by <span className='text-themePrimary'>Mediax</span> Dental Care And Clinic
        </h3>
        <p className='font-urbanist font_16_400 mt-10 mb-[60px] text-center md:text-left text-[#788094]'>
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
        className='flex-1 rounded-[30px] basis-[225rem] md:basis-[10rem] object-cover'
        src={WcsDoctors}
        alt='doctors'
        height={800}
        width={800}
      />
    </div>
  )
}
const Tab2 = () => {
  return (
    <div className='flex flex-wrap gap-[80px]'>
      <div className='flex flex-col flex-1 basis-[225rem] md:basis-[10rem]'>
        <h3 className='font-urbanist font_36_700 text-center md:text-left mx-auto md:mx-0 max-w-[29rem]'>
          Benefits by <span className='text-themePrimary'>Mediax</span> Dental Care And Clinic
        </h3>
        <p className='font-urbanist font_16_400 mt-10 mb-[60px] text-center md:text-left text-[#788094]'>
          Prompt care for dental emergencies, such as toothaches, broken teeth, or knocked-out
          teeth. Specialized dental care for children. Give patients an estimate of the average wait
          time for scheduled appointments.
        </p>
        <div className='flex flex-col gap-6'>
          <Range title='Dental Prevention' percentage={85} />
          <Range title='Dental Prevention' percentage={85} />
          <Range title='Dental Prevention' percentage={85} />
          <Range title='Dental Prevention' percentage={85} />
        </div>
      </div>
      <Image
        className='flex-1 rounded-[30px] basis-[225rem] md:basis-[10rem] object-cover'
        src={WcsDoctors}
        alt='doctors'
        height={800}
        width={800}
      />
    </div>
  )
}
const Tab3 = () => {
  return (
    <div className='flex flex-wrap gap-[80px]'>
      <div className='flex flex-col flex-1 basis-[225rem] md:basis-[10rem]'>
        <h3 className='font-urbanist font_36_700 text-center md:text-left mx-auto md:mx-0 max-w-[29rem]'>
          Benefits by <span className='text-themePrimary'>Mediax</span> Dental Care And Clinic
        </h3>
        <p className='font-urbanist font_16_400 mt-10 mb-[60px] text-center md:text-left text-[#788094]'>
          Prompt care for dental emergencies, such as toothaches, broken teeth, or knocked-out
          teeth. Specialized dental care for children. Give patients an estimate of the average wait
          time for scheduled appointments.
        </p>
        <div className='flex flex-col gap-6'>
          <Range title='Dental Prevention' percentage={58} />
          <Range title='Dental Prevention' percentage={58} />
          <Range title='Dental Prevention' percentage={58} />
          <Range title='Dental Prevention' percentage={58} />
        </div>
      </div>
      <Image
        className='flex-1 rounded-[30px] basis-[225rem] md:basis-[10rem] object-cover'
        src={WcsDoctors}
        alt='doctors'
        height={800}
        width={800}
      />
    </div>
  )
}
