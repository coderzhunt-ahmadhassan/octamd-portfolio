'use client'

import { services } from '@/constants/data'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { FaCheck } from 'react-icons/fa6'

type Props = {
  currentCard: number
  setCurrentCard: Dispatch<SetStateAction<number>>
}

export const ServiceSlider = ({ currentCard, setCurrentCard }: Props) => {
  return (
    <>
      <div className='mt-[58px] hidden xl:flex innerContainer h-[483px] gap-6'>
        {services.map(service => {
          const {
            idx,
            color,
            title,
            content: { desc, points }
          } = service
          return (
            <div
              className={`rounded-[30px] h-full transition-all duration-500 ${
                color === 'blueishGray'
                  ? 'bg-lightBluishGray'
                  : color === 'brownishYellow'
                  ? 'bg-lightBrownishYellow'
                  : 'bg-white'
              } ${
                idx === currentCard ? 'flex-1 shadow-xl' : 'flex-0 shadow-md'
              } basis-[184px] flex flex-col overflow-hidden`}
              onClick={() => setCurrentCard(idx)}
            >
              <div className='border-b-[3px] w-full'>
                <div className='w-[184px] flex__center h-[130px]'>
                  <Image src={service.image} height={70} width={70} alt={service.title} />
                </div>
              </div>
              <div className={`flex-1  ${idx === currentCard ? 'smooth__hidden' : 'smooth__show'}`}>
                <h3 className='urbanist font_24_700 absolute top-[0px] left-[75px] whitespace-normal sm:whitespace-nowrap rotate-90 origin-[left_bottom] '>
                  {title}
                </h3>
              </div>
              <div
                className={`flex-1 relative w-[392px] openedCard ${
                  idx === currentCard ? 'smooth__show' : 'smooth__hidden'
                }`}
              >
                <div className='p-[30px_40px]'>
                  <h3 className='urbanist font_24_700 whitespace-normal sm:whitespace-nowrap mb-[29px]'>
                    {title}
                  </h3>
                  <p className='text-[#788094] urbanist font_16_400 font-thin'>{desc}</p>
                  <ul className='list-none flex flex-col gap-[10px] font-normal mt-[30px]'>
                    {points.map(point => {
                      return (
                        <li key={point} className='flex__center gap-2'>
                          <FaCheck className='text-themePrimary' />
                          <p className='flex-1 dmSans font_16_400'>{point}</p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='mt-[58px] xl:hidden innerContainer gap-6 grid mgrid-cols-[repeat(auto-fit,minMax(10rem,1fr))] md:grid-cols-[repeat(auto-fit,minMax(20rem,1fr))]'>
        {services.map(service => {
          const {
            idx,
            color,
            title,
            content: { desc, points }
          } = service
          return (
            <div
              className={`rounded-2xl h-auto ${
                color === 'blueishGray'
                  ? 'bg-lightBluishGray'
                  : color === 'brownishYellow'
                  ? 'bg-lightBrownishYellow'
                  : 'bg-white'
              } flex flex-1 shadow-md smooth__show flex-col overflow-hidden`}
              onClick={() => setCurrentCard(idx)}
            >
              <div className='border-b-[3px] w-full'>
                <div className='w-full md:w-[184px] flex__center mx-auto md:mx-0 h-[130px]'>
                  <Image src={service.image} height={70} width={70} alt={service.title} />
                </div>
              </div>
              <div className={`flex-1 relative`}>
                <div className='p-[30px_20px] md:p-[30px_40px]'>
                  <h3 className='heading6 whitespace-normal sm:whitespace-nowrap mb-[29px]'>
                    {title}
                  </h3>
                  <p className='text-[#788094] font-thin'>{desc}</p>
                  <ul className='list-none flex flex-col gap-[10px] font-normal mt-[30px]'>
                    {points.map(point => {
                      return (
                        <li key={point} className='flex__center gap-2'>
                          <FaCheck className='text-themePrimary' />
                          <p className='flex-1'>{point}</p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
