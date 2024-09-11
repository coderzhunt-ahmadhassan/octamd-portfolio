import { services_image01, services_image02 } from '@/assets'
import { SectionWrapper } from '@/components/common'
import { AccordionItemType, CustomAccordion } from '@/components/common/Accordion'
import { Button } from '@/components/ui'
import { capitalize, cn } from '@/lib/utils'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import { FaArrowRightLong, FaCircleCheck } from 'react-icons/fa6'

type Props = {
  children: ReactNode
}

const timings: string[][] = [
  ['Monday - Tuesday:', '9am - 6pm'],
  ['Wednesday - Thursday:', '8am - 5pm'],
  ['Friday:', '7am - 10pm'],
  ['Saturday:', '10am - 7pm'],
  ['Sunday:', 'Colsed']
]

const accordionData: AccordionItemType[] = [
  {
    value: '01',
    trigger: '01.What services does the clinic offer?',
    content:
      'Our clinic is strategically located for easy access, ensuring that you can reach us conveniently from various parts of the community. We also provide accessibility.'
  },
  {
    value: '02',
    trigger: '02.How do I schedule an appointment?',
    content:
      'Our clinic is strategically located for easy access, ensuring that you can reach us conveniently from various parts of the community. We also provide accessibility.'
  },
  {
    value: '03',
    trigger: "03.What are the clinic's hours of operation?",
    content:
      'Our clinic is strategically located for easy access, ensuring that you can reach us conveniently from various parts of the community. We also provide accessibility.'
  },
  {
    value: '04',
    trigger: "03.What are the clinic's hours of operation?",
    content:
      'Our clinic is strategically located for easy access, ensuring that you can reach us conveniently from various parts of the community. We also provide accessibility.'
  },
  {
    value: '05',
    trigger: "03.What are the clinic's hours of operation?",
    content:
      'Our clinic is strategically located for easy access, ensuring that you can reach us conveniently from various parts of the community. We also provide accessibility.'
  },
  {
    value: '06',
    trigger: "03.What are the clinic's hours of operation?",
    content:
      'Our clinic is strategically located for easy access, ensuring that you can reach us conveniently from various parts of the community. We also provide accessibility.'
  }
]

export default function Layout({ children }: Props) {
  return (
    <SectionWrapper>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 py-[66px]'>
        <div className='relative'>
          <div className='lg:sticky lg:top-[13rem] lg:left-0 flex flex-col gap-10'>
            <div className='bg-[#F5F7FA] p-5 order-2 lg:order-1 md:p-10 w-full rounded-[20px]'>
              <h3 className='text-titleColor outfit font_24_600'>Categories</h3>
              <div className='mt-[21px] relative h-[3px] w-full overflow-hidden rounded-full bg-[#D8DDE1]'>
                <div className='absolute bg-themePrimary w-8 h-full top-0 left-0' />
              </div>
              <div className='mt-10 flex flex-col gap-[14px]'>
                {[
                  'cardiology',
                  'gastroenterologist',
                  'dental care',
                  'ophthalmology',
                  'orthopedics',
                  'plastic surgeons',
                  'neurology'
                ].map((category, idx) => {
                  let active = false
                  if (idx === 3) {
                    active = true
                  }
                  return (
                    <Button
                      className={cn(
                        'flex justify-between items-center h-14 border-none rounded-full px-8 bg-white shadow-buttonShadow urbanist font_18_600 text-titleColor hover:bg-themeSecondary/5',
                        active &&
                          'shadow-[4px_0_0_0_#3D66F5_inset] bg-themeSecondary/5 text-themeSecondary'
                      )}
                      key={category}
                    >
                      <span>{capitalize(category)}</span>
                      <FaArrowRightLong className={cn('hidden', active && 'block')} />
                    </Button>
                  )
                })}
              </div>
            </div>
            <div className='bg-themeSecondary order-1 lg:order-2 rounded-[20px] w-full  px-4 md:px-[30px] py-10 text-white'>
              <h4 className='outfit font_24_600'>Opening Hours</h4>
              <div className='mt-[21px] relative h-[3px] w-full overflow-hidden rounded-full bg-[#D8DDE1]'>
                <div className='absolute bg-themePrimary w-8 h-full top-0 left-0' />
              </div>
              <ul className=''>
                {timings.map(timing => {
                  return (
                    <li
                      key={timing[0]}
                      className='flex justify-between w-full items-center py-[26px] border-b border-white last:border-none last:pb-0 urbanist font_16_400'
                    >
                      <span>{timing[0]}</span>
                      <span>{timing[1]}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className='col-span-1 lg:col-span-2'>{children}</div>
      </div>
    </SectionWrapper>
  )
}
