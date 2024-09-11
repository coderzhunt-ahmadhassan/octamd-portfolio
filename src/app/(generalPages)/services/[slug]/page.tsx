import { services_image01, services_image02 } from '@/assets'
import { AccordionItemType, CustomAccordion } from '@/components/common/Accordion'
import Image from 'next/image'
import { FaCircleCheck } from 'react-icons/fa6'

type Props = {}

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

export default function page({}: Props) {
  return (
    <>
      <Image
        className='w-full h-auto rounded-[35px] overflow-hidden'
        src={services_image01}
        height={450}
        width={792}
        alt='random image'
      />
      <h3 className='urbanist mt-10 font_36_700 text-titleColor'>What is Dental Care?</h3>
      <p className='mt-10 urbanist font_16_400 text-[#788094]'>
        From primary care and pediatrics to specialized services like dermatology, orthopedics, and
        women&apos;s health, we offer a wide spectrum of medical services under one roof. This means
        you can receive all the care you need conveniently in one location.
      </p>
      <p className='mt-10 urbanist font_16_400 text-[#788094]'>
        Your health and well-being are our top priorities. We take the time to listen to your
        concerns, answer your questions, and involve you in the decision-making process for your
        healthcare. We believe in empowering our patients to make informed choices about their
        health.
      </p>
      <h3 className='mt-[60px] urbanist font_36_700 text-titleColor'>Treatments</h3>
      <p className='mt-10 urbanist font_16_400 text-[#788094]'>
        Our team of skilled doctors, nurses, and specialists bring years of experience and expertise
        to ensure you receive the highest quality of care. We are dedicated to treating each patient
        with compassion.
      </p>
      <div className='mt-10 flex flex-wrap gap-10'>
        <Image
          className='flex-1 basis-[20rem] object-cover rounded-[35px] overflow-hidden'
          src={services_image02}
          height={300}
          width={370}
          alt='some image'
        />
        <div className='flex-1 basis-[20rem]'>
          <p className='mb-[30px] urbanist font_16_400 text-[#788094]'>
            Our team of skilled doctors, nurses, and specialists bring years of experience and
            expertise to ensure you receive the highest quality of care. We are dedicated to
            treating each patient.
          </p>
          <ul className='flex flex-col gap-[30px]'>
            <li className='urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>
                Minimal sedation – you are awake but relaxed many years of experience
              </span>
            </li>
            <li className='urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>
                Deep sedation – you are on the edge of consciousness but can still 24/7 care for
                mother and baby.
              </span>
            </li>
            <li className='urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>The four levels of the healthcare system</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-10 flex flex-wrap gap-10'>
        <div className='flex-1 basis-[20rem]'>
          <h3 className='urbanist font_36_700 text-titleColor'>Dental Family Plan</h3>
          <p className='mt-10 mb-[30px] urbanist font_16_400 text-[#788094]'>
            Our team of skilled doctors, nurses, and specialists bring years of experience and
            expertise to ensure you receive the highest quality of care.
          </p>
          <ul className='flex flex-col gap-[30px]'>
            <li className='urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>General Consulting</span>
            </li>
            <li className='urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Construction Management</span>
            </li>
            <li className='urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Modeling & Algorithm</span>
            </li>
            <li className='urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Better Decision Making</span>
            </li>
            <li className='urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Professional Consulting Services</span>
            </li>
          </ul>
        </div>
        <div className='flex-1 basis-[20rem]'>
          <h3 className='urbanist font_36_700 text-titleColor'>Why Choose Us?</h3>
          <p className='mt-10 mb-[30px] urbanist font_16_400 text-[#788094]'>
            Our team of skilled doctors, nurses, and specialists bring years of experience and
            expertise to ensure you receive the highest quality of care.
          </p>
          <ul className='flex flex-col gap-[30px]'>
            <li className='urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>General Consulting</span>
            </li>
            <li className='urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Construction Management</span>
            </li>
            <li className='urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Modeling & Algorithm</span>
            </li>
            <li className='urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Better Decision Making</span>
            </li>
            <li className='urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Professional Consulting Services</span>
            </li>
          </ul>
        </div>
      </div>
      <h3 className='mt-[60px] urbanist font_36_700 text-titleColor'>
        We are pleased to offer you the healthy.
      </h3>
      <p className='my-10 urbanist font_16_400 text-[#788094]'>
        There are many variations of passages of lorem Pilum but the majority. Monotonically seize
        vertical niche markets with global schemas. Completely streamline premier information
        through best-of-breed potentialities. Synergistically incubate team building synergy with
        B2C methods of empowerment. Uniquely matrix an proactively through web-enabled outsourcing.
      </p>
      <CustomAccordion
        className=''
        itemsClassName='shadow-cardShadow'
        type='single'
        items={accordionData}
      />
    </>
  )
}
