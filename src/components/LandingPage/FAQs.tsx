import { faq_bg, faq_woman, ServicesIconPrimary } from '@/assets'
import { SectionTitle, SectionWrapper } from '@/components/common'
import Image from 'next/image'
import { AccordionItemType, CustomAccordion } from '@/components/common/Accordion'

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
  }
]

export const FAQs = (props: Props) => {
  return (
    <SectionWrapper
      className='overflow-hidden mb-16'
      innerContainerClassName='gap-[80px] flex gap-[80px] relative'
      bgProps={
        <>
          <Image
            className='absolute top-0 left-0 h-full w-full object-cover'
            src={faq_bg}
            height={1150}
            width={1920}
            alt='faq background'
          />
        </>
      }
    >
      <div className='flex-1 flex flex-col justify-center py-10 items-start'>
        <SectionTitle
          image={ServicesIconPrimary}
          title='faqs'
          heading={{
            title: 'Frequently Asked Have Any Question',
            className: 'text-white !text-left'
          }}
        />
        <div className='mt-14'>
          <CustomAccordion items={FaqAccordionItems} />
        </div>
      </div>
      <div className='pt-2 flex-1 justify-center items-end hidden xl:flex'>
        <Image
          className='h-[calc(100%)] max-h-screen object-top object-contain'
          src={faq_woman}
          height={786}
          width={573}
          alt='black female doctor'
        />
      </div>
    </SectionWrapper>
  )
}
