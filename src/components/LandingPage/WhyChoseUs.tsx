import React from 'react'
import { AnimatedCartoonImageBg, BackgroundCornerImage, SectionTitle } from '@/components/common'
import { HeartStethoscope, ServicesIcon, WcsBottomLeftBg } from '@/assets'
import { WhyChoseUsTabs } from './WhyChoseUsTabs'

type Props = {}

export const WhyChoseUs = (props: Props) => {
  return (
    <div className='z-10 relative'>
      <BackgroundCornerImage image={WcsBottomLeftBg} alt='background' position='bottom left' />
      <AnimatedCartoonImageBg
        image={HeartStethoscope}
        alt='stethoscope shaped in heart'
        position='top right'
        dimensions={{
          height: 245,
          width: 319
        }}
      />
      <div className='outerContainer pt-[120px] pb-[126px]'>
        <div className='innerContainer flex flex-col'>
          <SectionTitle
            className='mx-auto'
            image={ServicesIcon}
            title='Why Choose Us'
            heading={{
              title: 'We’re Passionate, Dedicated And Friendly...',
              className: 'max-w-[45rem] mx-auto !text-center'
            }}
          />
          <WhyChoseUsTabs />
        </div>
      </div>
    </div>
  )
}
