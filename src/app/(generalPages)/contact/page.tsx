import { BranchTimings, contactus_femalebg, contactus_formbg } from '@/assets'
import { InputField, SectionWrapper } from '@/components/common'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FaRegEnvelope, FaRegUser } from 'react-icons/fa6'
import { GrLocation } from 'react-icons/gr'
import { RiPencilLine } from 'react-icons/ri'
import { TbPhoneCall } from 'react-icons/tb'

type BranchInfo = {
  name: string
  address: string
  email: string
  number: string
  openings: string[][]
}

type Props = {}

const data: BranchInfo[] = [
  {
    name: 'Central Branch',
    address: '12601 Garden Grove Blvd, Garden Grove, CA 92843',
    email: 'info@contacthp.com',
    number: '+171 4537 5160',
    openings: [['Mon to sat', '8:00am - 9:00pm'], ['Sunday - Closed']]
  },
  {
    name: 'USA. Branch',
    address: '12601 Garden Grove Blvd, Garden Grove, CA 92843',
    email: 'info@contacthp.com',
    number: '+171 4537 5160',
    openings: [['Mon to sat', '8:00am - 9:00pm'], ['Sunday - Closed']]
  },
  {
    name: 'Australia Branch',
    address: '12601 Garden Grove Blvd, Garden Grove, CA 92843',
    email: 'info@contacthp.com',
    number: '+171 4537 5160',
    openings: [['Mon to sat', '8:00am - 9:00pm'], ['Sunday - Closed']]
  }
]

const page = (props: Props) => {
  return (
    <SectionWrapper className='py-[60px]'>
      <div className='mt-[59px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
        {data.map((branch, idx) => {
          return <BranchInfo key={idx} idx={idx + 1} {...branch} />
        })}
      </div>
      <div className='mt-[120px] mb-[50px] rounded-[30px] shadow-cardShadow'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className=' py-5 md:py-[60px] pl-5 md:pl-[60px] pr-5 md:pr-[60px] lg:pr-0'>
            <h2 className='font-urbanist font_48_700 text-center lg:text-left mt-[15px] mb-[35px] text-titleColor'>
              Get In Touch!
            </h2>
            <form className='grid grid-cols-1  gap-5'>
              <InputField
                className='col-span-1 md:col-span-1 rounded-[30px] bg-[#F0F1F5]'
                inputClassName='rounded-[30px] border-none pl-6 pr-10 font-urbanist font_14_400'
                type='text'
                name='name'
                placeholder='Your Name'
                icon={
                  <FaRegUser className='absolute top-[1.75rem] -translate-y-1/2 pointer-events-none opacity-50 right-6' />
                }
              />
              <InputField
                className='col-span-1 md:col-span-1 rounded-[30px] bg-[#F0F1F5]'
                inputClassName='rounded-[30px] border-none pl-6 pr-10 font-urbanist font_14_400'
                type='email'
                placeholder='Your Email'
                name='email'
                icon={
                  <FaRegEnvelope className='absolute top-[1.75rem] -translate-y-1/2 pointer-events-none opacity-50 right-6' />
                }
              />
              <InputField
                className='col-span-1 rounded-[30px] bg-[#F0F1F5] h-[12rem]'
                textareaClassName='rounded-[30px] border-none pl-6 pr-10 font-urbanist font_14_400'
                type='text'
                placeholder='Type Appointment Note....'
                name='message'
                textarea
                icon={
                  <RiPencilLine className='absolute top-[1.75rem] -translate-y-1/2 pointer-events-none opacity-50 right-6' />
                }
              />
              <Button
                className='rounded-[30px] col-span-1 font-dm_sans font_14_700 h-14 border border-themePrimary w-full hover:bg-white hover:text-themePrimary'
                type='submit'
                variant={'primary'}
              >
                BOOK AN APPOINTMENT
              </Button>
            </form>
          </div>
          <div className='relative hidden lg:block'>
            <div className='absolute h-full w-full top-0 right-0 overflow-hidden'>
              <Image
                className='h-full w-full absolute'
                src={contactus_formbg}
                height={2000}
                width={2000}
                alt='background vector'
              />
            </div>
            <div className='absolute top-0 right-0 h-full flex justify-center items-end  w-full'>
              <Image
                className='h-[calc(100%+3rem)] w-[503px] object-contain object-bottom'
                src={contactus_femalebg}
                height={1550}
                width={1000}
                alt='female posing'
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

const BranchInfo = ({
  idx,
  name,
  address,
  email,
  number,
  openings
}: { idx: number } & Partial<BranchInfo>) => {
  return (
    <div className='flex flex-col gap-[10px]'>
      <div className='shadow-cardShadow px-10 rounded-[30px] relative'>
        <div
          className={cn(
            `absolute top-0 left-0 h-1 w-full block`,
            idx % 2 === 0 && 'bg-blue-radial-border',
            idx % 2 !== 0 && 'bg-green-radial-border'
          )}
        ></div>
        <h4 className='p-6 text-center font-urbanist font_24_700 border-b border-[#D8DDE1]'>
          {name}
        </h4>
        <div className='my-8 flex flex-col gap-8'>
          <div className='flex gap-1.5 justify-start items-start'>
            <GrLocation className='text-themePrimary relative top-1 w-5' />
            <p className='flex-1 font-urbanist font_16_400 text-[#788094]'>{address}</p>
          </div>
          <div className='flex gap-1.5 justify-start items-start'>
            <FaRegEnvelope className='text-themePrimary relative top-1 w-5' />
            <p className='flex-1 font-urbanist font_16_400 text-[#788094]'>{email}</p>
          </div>
          <div className='flex gap-1.5 justify-start items-start'>
            <TbPhoneCall className='text-themePrimary relative top-1 w-5' />
            <p className='flex-1 font-urbanist font_16_400 text-[#788094]'>{number}</p>
          </div>
        </div>
      </div>
      <div className='shadow-cardShadow p-10 rounded-[30px] flex flex-wrap gap-5'>
        <Image src={BranchTimings} height={70} width={70} alt='clock' />
        <div className='flex flex-col justify-between items-start'>
          <h4 className='text-left font-urbanist font_20_700'>Opening Hours</h4>
          {openings?.map(opening => {
            if (opening.length > 1) {
              return (
                <p key={opening[0]} className='font-urbanist font_16_400 text-[#788094]'>
                  <span>{opening[0]}</span>: <span>{opening[1]}</span>
                </p>
              )
            } else if (opening.length === 1) {
              return (
                <p key={opening[0]} className='font-urbanist font_16_400 text-themePrimary'>
                  <span>{opening[0]}</span>
                </p>
              )
            } else return null
          })}
        </div>
      </div>
    </div>
  )
}

export default page
