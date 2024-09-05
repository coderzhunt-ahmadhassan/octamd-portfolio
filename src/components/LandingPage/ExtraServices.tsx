import React from 'react'
import { AnimatedCartoonImageBg, BackgroundCornerImage } from '../common'
import {
  es_cardiology,
  es_dentalCare,
  es_gynecologists,
  es_internalMedicine,
  es_neurologyCare,
  es_ophthalmology,
  es_orthopedics,
  es_topLeftBg,
  es_urologyCare,
  ExtraServiceCardBg,
  ExtraServiceCardHoverBg,
  ExtraServicesAnimatedMedicine
} from '@/assets'
import Image from 'next/image'
import { Button } from '@/components/ui'
import Link from 'next/link'

type Props = {}

const extraServices = [
  {
    title: 'Internal Medicine',
    doctorsCount: 32,
    image: es_internalMedicine,
    slug: 'internalMedicine'
  },
  {
    title: 'Dental Care',
    doctorsCount: 22,
    image: es_dentalCare,
    slug: 'dentalCare'
  },
  {
    title: 'Urology Care',
    doctorsCount: 42,
    image: es_urologyCare,
    slug: 'urologyCare'
  },
  {
    title: 'Neurology Care',
    doctorsCount: 32,
    image: es_neurologyCare,
    slug: 'neurologyCare'
  },
  {
    title: 'Gynecologists',
    doctorsCount: 32,
    image: es_gynecologists,
    slug: 'gynecologist'
  },
  {
    title: 'Ophthalmology',
    doctorsCount: 32,
    image: es_ophthalmology,
    slug: 'ophthalmology'
  },
  {
    title: 'Orthopedics',
    doctorsCount: 30,
    image: es_orthopedics,
    slug: 'orthopedics'
  },
  {
    title: 'Cardiology',
    doctorsCount: 32,
    image: es_cardiology,
    slug: 'cardiology'
  }
]

export const ExtraServices = (props: Props) => {
  return (
    <div className='relative z-10 bg-[#F5F7FA]'>
      <BackgroundCornerImage
        position='top left'
        image={es_topLeftBg}
        alt='extra services background vector'
      />
      <AnimatedCartoonImageBg
        image={ExtraServicesAnimatedMedicine}
        alt='Floating capsules'
        position='bottom left'
        dimensions={{
          height: 192,
          width: 105
        }}
      />
      <div className='outerContainer pt-[128px] pb-[94px]'>
        <div className='innerContainer grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {extraServices.map(service => {
            const { title, image, slug, doctorsCount } = service
            const doctorsCountRoundFigure =
              Math.trunc(doctorsCount / 10) * 10 + (doctorsCount % 10 > 0 ? '+' : '')
            return (
              <div
                key={title}
                className='bg-white group/card rounded-[20px] overflow-hidden relative shadow-md py-[30px] px-4 flex justify-between items-center flex-col h-[287px]'
              >
                <Image
                  className='absolute block group-hover/card:hidden z-10 bottom-0 left-1/2 object-cover h-[calc(120%)]'
                  src={ExtraServiceCardBg}
                  alt='card bg'
                  width={520}
                  height={382}
                />
                <div className='absolute hidden [&_*]:pointer-events-none pointer-events-none group-hover/card:block z-10 top-0 left-0 h-full w-full'>
                  <Image
                    className='absolute top-0 left-0 h-[calc(130%)] w-full object-cover'
                    src={ExtraServiceCardHoverBg}
                    alt='card hover bg'
                    width={520}
                    height={382}
                  />
                  <div className='absolute top-0 left-0 w-full h-full bg-[#000D44] opacity-80'></div>
                </div>

                <div className='flex__center relative rounded-full z-10 bg-[#E6E9EE] group-hover/card:bg-themePrimary h-[80px] w-[80px] aspect-square'>
                  <Image src={image} height={50} width={50} alt={title} />
                </div>
                <div className='flex__center flex-col z-10'>
                  <h4 className='urbanist font_24_700 group-hover/card:text-white'>{title}</h4>
                  <p className='text-[#788094] urbanist font_14_400'>
                    {doctorsCountRoundFigure} Doctors
                  </p>
                </div>
                <Button
                  variant={'outline'}
                  className='border-themePrimary rounded-[30px] z-10 group-hover/card:bg-themePrimary group-hover/card:text-white text-themePrimary uppercase dmSans font_14_700 h-[46px] w-[151px] duration-0'
                >
                  Read more
                </Button>
              </div>
            )
          })}
        </div>
        <div className='innerContainer flex__center mt-[60px]'>
          <div className='border-t border-[#D8DDE1] flex-1 h-0'></div>
          <p className='border border-[#D8DDE1] flex__center flex-wrap rounded-[100px] w-full min-h-10 text-center max-w-[460px] text-[#788094] dmSans font_16_500'>
            You Get Our 20+ More services...&nbsp;
            <Link
              className='dmSans inline font_16_700 underline text-themePrimary'
              href='/services'
            >
              Explore All Services
            </Link>
          </p>
          <div className='border-t border-[#D8DDE1] flex-1 h-0'></div>
        </div>
      </div>
    </div>
  )
}
