import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  position: 'top left' | 'top right' | 'bottom left' | 'bottom right'
  image: StaticImport
  alt: string
  dimensions: { width: number; height: number }
}

export const AnimatedCartoonImageBg = ({
  image,
  alt,
  position = 'bottom left',
  dimensions: { width, height }
}: Props) => {
  return (
    <Image
      className={twMerge(
        'absolute -z-[1] hidden 3xl:block pointer-events-none',
        position === 'top left' && 'top-[220px] left-[30px]',
        position === 'top right' && 'top-[220px] right-[30px]',
        position === 'bottom left' && 'bottom-[220px] left-[30px]',
        position === 'bottom right' && 'bottom-[220px] right-[30px]'
      )}
      src={image}
      alt={alt}
      height={height}
      width={width}
    />
  )
}
