'use client'

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui'
import { useEffect, useState, type ReactNode } from 'react'
import Autoplay from 'embla-carousel-autoplay'

interface Props {
  children: ReactNode
  buttons?: boolean
  dots?: boolean
}

export const CarouselWrapper = ({ children, buttons, dots }: Props) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!dots) {
      return
    }
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel
      opts={{
        align: 'start'
      }}
      plugins={[
        Autoplay({
          delay: 5000
        })
      ]}
      setApi={setApi}
      className='w-full'
    >
      <CarouselContent>{children}</CarouselContent>
      {buttons && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
      {dots && (
        <div className='flex__center my-10'>
          {Array.from({ length: count }, (_, i) => (
            <Button
              variant={'dot'}
              key={i}
              className={`mx-1 h-1.5 w-1.5 rounded-full p-0 ${i === current ? 'active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => api?.scrollTo(i === 0 ? 0 : i - 1)}
            />
          ))}
        </div>
      )}
    </Carousel>
  )
}
