'use client'

import { Card, CardContent, CarouselItem } from '@/components/ui'
import { CarouselWrapper } from './CarouselWrapper'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface CarouselItem {
  id: string | number
  content: ReactNode
}

interface Props {
  buttons?: boolean
  dots?: boolean
  className?: string
  items: CarouselItem[]
}

export function CustomCarousel({ buttons = false, dots = false, items, className }: Props) {
  return (
    <CarouselWrapper buttons={buttons} dots={dots}>
      {items?.map(item => (
        <CarouselItem key={item.id} className={twMerge('', className)}>
          {item.content}
        </CarouselItem>
      ))}
    </CarouselWrapper>
  )
}
