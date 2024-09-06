import React from 'react'
import { InputField, SectionWrapper } from '@/components/common'
import Image from 'next/image'
import { appointment_docs1, appointment_docs2, appointment_dotted_bg } from '@/assets'
import { Button, Input } from '@/components/ui'
import { FaAngleDown, FaRegCalendar, FaRegClock, FaRegUser } from 'react-icons/fa6'
import { GoMail } from 'react-icons/go'
import { FiPhone } from 'react-icons/fi'

type Props = {}

const timings: string[][] = [
  ['Monday - Tuesday:', '9am - 6pm'],
  ['Wednesday - Thursday:', '8am - 5pm'],
  ['Friday:', '7am - 10pm'],
  ['Saturday:', '10am - 7pm'],
  ['Sunday:', 'Colsed']
]

export const Appointments = (props: Props) => {
  return (
    <SectionWrapper
      className='py-6'
      innerContainerClassName='appointmentContainer flex flex-col xl:flex-row gap-[30px]'
    >
      <div className='flex justify-center xl:justify-end relative z-10 py-10 px-0 md:px-10 xl:px-0 w-full xl:w-[430px]'>
        <div className='rounded-[20px] absolute top-0 left-0 w-full xl:w-[292px] h-4/5 xl:h-full -z-[1] border-[3px] border-[#D8DDE1]'>
          <Image
            className='absolute top-4 left-4'
            src={appointment_dotted_bg}
            alt='dotted animated image'
            height={129}
            width={116}
          />
        </div>
        <div className='bg-themeSecondary rounded-[20px] w-full max-w-none xl:max-w-[370px] px-4 md:px-[30px] py-10 text-white'>
          <h4 className='urbanist font_30_700'>Working Hours</h4>
          <p className='urbanist font_16_400 opacity-80 mt-8 mb-[14px]'>
            Variations of passages amt available are anything embarrassing.
          </p>
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
      <div className='flex-1 rounded-[20px] flex-col xl:flex-row shadow-appointmentForm p-5 md:p-10 flex gap-10'>
        <div className='flex flex-1 flex-col gap-10'>
          <Image
            className='flex-1 object-cover w-full rounded-[10px]'
            src={appointment_docs1}
            height={660}
            width={990}
            alt='doctors'
          />
          <Image
            className='flex-1 object-cover w-full rounded-[10px]'
            src={appointment_docs2}
            height={660}
            width={990}
            alt='doctors'
          />
        </div>
        <div className='flex-1'>
          <h4 className='urbanist font_30_700 text-center mb-10 '>Make An Appointment</h4>
          <form className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <InputField
              className='col-span-2 rounded-full bg-[#F0F1F5]'
              inputClassName='rounded-full border-none pl-6 pr-10 urbanist font_14_400'
              type='text'
              placeholder='Your Name'
              icon={
                <FaRegUser className='absolute top-1/2 -translate-y-1/2 pointer-events-none opacity-50 right-6' />
              }
            />
            <InputField
              className='col-span-2 rounded-full bg-[#F0F1F5]'
              inputClassName='rounded-full border-none pl-6 pr-10 urbanist font_14_400'
              type='text'
              placeholder='Your Name'
              icon={
                <FaRegUser className='absolute top-1/2 -translate-y-1/2 pointer-events-none opacity-50 right-6' />
              }
            />
            <InputField
              className='col-span-2 rounded-full bg-[#F0F1F5]'
              inputClassName='rounded-full border-none pl-6 pr-10 urbanist font_14_400'
              type='tel'
              placeholder='Phone Number'
              icon={
                <FiPhone className='absolute top-1/2 -translate-y-1/2 pointer-events-none opacity-50 right-6' />
              }
            />
            <InputField
              className='col-span-2 rounded-full bg-[#F0F1F5]'
              inputClassName='rounded-full border-none pl-6 pr-10 urbanist font_14_400'
              type='text'
              placeholder='Choose Department'
              icon={
                <FaAngleDown className='absolute top-1/2 -translate-y-1/2 pointer-events-none opacity-50 right-6' />
              }
            />
            <InputField
              className='col-span-2 md:col-span-1 rounded-full bg-[#F0F1F5]'
              inputClassName='rounded-full border-none pl-6 pr-10 urbanist font_14_400'
              type='date'
              placeholder='Date'
              icon={
                <FaRegCalendar className='absolute top-1/2 -translate-y-1/2 pointer-events-none opacity-50 right-6' />
              }
            />
            <InputField
              className='col-span-2 md:col-span-1 rounded-full bg-[#F0F1F5]'
              inputClassName='rounded-full border-none pl-6 pr-10 urbanist font_14_400'
              type='time'
              placeholder='Time'
              icon={
                <FaRegClock className='absolute top-1/2 -translate-y-1/2 pointer-events-none opacity-50 right-6' />
              }
            />
            <Button
              className='rounded-full col-span-2 dmSans font_14_700 h-10 border border-themePrimary w-full hover:bg-white hover:text-themePrimary'
              type='submit'
              variant={'primary'}
            >
              BOOK AN APPOINTMENT
            </Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  )
}
