import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  image: StaticImport
  title: string
  className?: HTMLAttributes<HTMLDivElement>['className']
  heading?: {
    title: string
    className?: HTMLAttributes<HTMLHeadingElement>['className']
  }
}

export const SectionTitle = ({ image, title, className, heading }: Props) => {
  return (
    <>
      <div
        className={twMerge(
          'flex justify-center items-center lg:justify-stretch lg:items-stretch uppercase gap-[10px]',
          className && className
        )}
      >
        <Image className='h-[30px] w-[30px]' src={image} alt='services' width={30} height={30} />
        <h4 className='font-outfit font_18_500 uppercase text-themePrimary font-medium'>{title}</h4>
      </div>
      {heading && (
        <h2
          className={twMerge(
            'font-urbanist font_48_700 text-center mt-[15px] lg:text-left text-titleColor',
            heading?.className
          )}
        >
          {heading?.title}
        </h2>
      )}
    </>
  )
}
