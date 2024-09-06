import React from 'react'
import { SectionTitle, SectionWrapper } from '@/components/common'
import { ServicesIcon } from '@/assets'
import { TestimonialSlider } from './TestimonialSlider'

type Props = {}

export const Testimonials = (props: Props) => {
  return (
    <SectionWrapper className='mt-[74px]' innerContainerClassName='flex flex-col'>
      <SectionTitle
        className='mx-auto justify-center items-center'
        title='testimonial'
        image={ServicesIcon}
        heading={{
          title: 'What Our Present Says?',
          className: '!text-center mx-auto w-full'
        }}
      />
      <TestimonialSlider />
    </SectionWrapper>
  )
}
