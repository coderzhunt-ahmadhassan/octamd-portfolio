import React from 'react'
import { AnimatedCartoonImageBg, BackgroundCornerImage, SectionTitle } from '@/components/common'
import {
  AboutBottomRightBg,
  AboutSectionImage1,
  AboutSectionImage2,
  AboutTopLeftBg,
  DentalTools,
  GreenTooth,
  ServicesIcon,
  ToothBrushingItself
} from '@/assets'
import Image from 'next/image'

type Props = {}

export const AboutUsSection = (props: Props) => {
  return (
    <div className='bg-[#F5F7FA] z-10 relative'>
      <BackgroundCornerImage image={AboutTopLeftBg} alt='background' position='top left' />
      <BackgroundCornerImage image={AboutBottomRightBg} alt='background' position='bottom right' />
      <AnimatedCartoonImageBg
        image={ToothBrushingItself}
        alt='tooth brushing itself'
        position='top right'
        dimensions={{
          height: 219,
          width: 189
        }}
      />
      <AnimatedCartoonImageBg
        image={DentalTools}
        alt='dental tools'
        position='bottom left'
        dimensions={{ height: 204, width: 159 }}
      />
      <div className='outerContainer pt-[120px] pb-[105px]'>
        <div className='innerContainer flex gap-[80px] flex-wrap'>
          <div className='flex flex-col basis-96 flex-1'>
            <SectionTitle
              image={ServicesIcon}
              title='About Us Company'
              heading={{ title: 'Your Great Smile Begins With a Great Dentist' }}
            />
            <ul className='my-12 grid grid-cols-2 gap-5'>
              <li className='flex__center gap-[10px]'>
                <Image src={GreenTooth} alt='green tooth' height={21} width={21} />
                <p className='flex-1'>Patients Value</p>
              </li>
              <li className='flex__center gap-[10px]'>
                <Image src={GreenTooth} alt='green tooth' height={21} width={21} />
                <p className='flex-1'>Patients Value</p>
              </li>
              <li className='flex__center gap-[10px]'>
                <Image src={GreenTooth} alt='green tooth' height={21} width={21} />
                <p className='flex-1'>Patients Value</p>
              </li>
              <li className='flex__center gap-[10px]'>
                <Image src={GreenTooth} alt='green tooth' height={21} width={21} />
                <p className='flex-1'>Patients Value</p>
              </li>
            </ul>
            <Image
              className='rounded-3xl h-[416px] w-full object-cover'
              src={AboutSectionImage2}
              height={416}
              width={521}
              alt='some doctors'
            />
          </div>
          <div className='flex flex-col basis-96 flex-1'>
            <Image
              className='rounded-3xl h-[416px] w-full object-cover'
              src={AboutSectionImage1}
              height={416}
              width={521}
              alt='some doctors'
            />

            <div className='mt-[56px] flex-1 border-themeTertiary grid grid-cols-2 overflow-hidden border-2 rounded-[30px]'>
              <div className='border-r-2 border-b-2 border-themeTertiary flex__center flex-col p-10'>
                <p className='font_64_700 leading-[52px]'>
                  <span className='text-titleColor'>9k</span>
                  <span className='text-themePrimary'>+</span>
                </p>
                <p className='urbanist font_16_400 text-[#788094]'>Satisfied Patients</p>
              </div>
              <div className='border-b-2 border-themeTertiary flex__center flex-col p-10'>
                <p className='font_64_700 leading-[52px]'>
                  <span className='text-titleColor'>9k</span>
                  <span className='text-themePrimary'>+</span>
                </p>
                <p className='urbanist font_16_400 text-[#788094]'>Satisfied Patients</p>
              </div>
              <div className='border-r-2 border-themeTertiary flex__center flex-col p-10'>
                <p className='font_64_700 leading-[52px]'>
                  <span className='text-titleColor'>9k</span>
                  <span className='text-themePrimary'>+</span>
                </p>
                <p className='urbanist font_16_400 text-[#788094]'>Satisfied Patients</p>
              </div>
              <div className='flex__center flex-col p-10'>
                <p className='font_64_700 leading-[52px]'>
                  <span className='text-titleColor'>9k</span>
                  <span className='text-themePrimary'>+</span>
                </p>
                <p className='urbanist font_16_400 text-[#788094]'>Satisfied Patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
