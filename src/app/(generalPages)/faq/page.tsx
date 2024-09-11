import { ServicesIcon } from '@/assets'
import { InputField, SectionTitle, SectionWrapper } from '@/components/common'
import { AccordionItemType, CustomAccordion } from '@/components/common/Accordion'
import { Appointments, Cta } from '@/components/LandingPage'
import { AllServices } from '@/components/Services'
import { Button } from '@/components/ui'
import { FaRegEnvelope, FaRegUser } from 'react-icons/fa6'
import { RiPencilLine } from 'react-icons/ri'

type Props = {}

const FaqAccordionItems: AccordionItemType[] = [
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

const page = (props: Props) => {
  return (
    <SectionWrapper className='py-[60px]'>
      <div className='flex flex-col items-center'>
        <SectionTitle
          image={ServicesIcon}
          className='!mx-auto'
          title='Frequently Asked Questions'
          heading={{
            title: 'Get Every Single Answer There If You Want',
            className: 'w-full max-w-[47rem] !text-center'
          }}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-[58px]'>
        <CustomAccordion
          className=''
          itemsClassName='bg-[#F5F7FA]'
          type='multiple'
          items={FaqAccordionItems}
        />
        <CustomAccordion
          className=''
          itemsClassName='bg-[#F5F7FA]'
          type='multiple'
          items={FaqAccordionItems}
        />
      </div>
      <div className='mt-[120px] mb-[50px] rounded-[30px] p-5 md:p-[60px] shadow-cardShadow'>
        <h2 className='font-urbanist font_48_700 text-center mt-[15px] mb-[35px] text-titleColor'>
          Have Any Other Question?
        </h2>
        <form className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <InputField
            className='col-span-2 md:col-span-1 rounded-[30px] bg-[#F0F1F5]'
            inputClassName='rounded-[30px] border-none pl-6 pr-10 font-urbanist font_14_400'
            type='text'
            name='name'
            placeholder='Your Name'
            icon={
              <FaRegUser className='absolute top-[1.75rem] -translate-y-1/2 pointer-events-none opacity-50 right-6' />
            }
          />
          <InputField
            className='col-span-2 md:col-span-1 rounded-[30px] bg-[#F0F1F5]'
            inputClassName='rounded-[30px] border-none pl-6 pr-10 font-urbanist font_14_400'
            type='email'
            placeholder='Your Email'
            name='email'
            icon={
              <FaRegEnvelope className='absolute top-[1.75rem] -translate-y-1/2 pointer-events-none opacity-50 right-6' />
            }
          />
          <InputField
            className='col-span-2 rounded-[30px] bg-[#F0F1F5] h-[12rem]'
            textareaClassName='rounded-[30px] border-none pl-6 pr-10 font-urbanist font_14_400'
            type='text'
            placeholder='Write Message...'
            name='message'
            textarea
            icon={
              <RiPencilLine className='absolute top-[1.75rem] -translate-y-1/2 pointer-events-none opacity-50 right-6' />
            }
          />
          <Button
            className='rounded-[30px] col-span-2 uppercase font-dm_sans font_14_700 h-14 border border-themePrimary w-full hover:bg-white hover:text-themePrimary'
            type='submit'
            variant={'primary'}
          >
            submit now
          </Button>
        </form>
      </div>
    </SectionWrapper>
  )
}

export default page
