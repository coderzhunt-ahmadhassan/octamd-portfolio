import React from 'react'
import { Progress } from '@/components/ui'

type Props = {
  title: string
  percentage: number
}

export const Range = ({ title, percentage }: Props) => {
  return (
    <div className='flex flex-col w-full gap-[10px]'>
      <div className='flex justify-between items-center font-outfit font_16_400'>
        <p className='text-titleColor'>{title}</p>
        <p className='text-titleColor'>{percentage}%</p>
      </div>
      <Progress value={percentage} indicatorClassName='bg-themePrimary' />
    </div>
  )
}
