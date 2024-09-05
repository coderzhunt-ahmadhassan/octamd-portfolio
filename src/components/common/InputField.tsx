import React, { HTMLAttributes, ReactNode } from 'react'
import { Input, InputProps } from '@/components/ui'
import { twMerge } from 'tailwind-merge'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { IconType } from 'react-icons'

type Props = {
  className?: HTMLAttributes<HTMLDivElement>['className']
  inputClassName?: HTMLAttributes<HTMLInputElement>['className']
  icon?: ReactNode
} & InputProps

export const InputField = ({ className, inputClassName, icon, ...inputProps }: Props) => {
  return (
    <div className={twMerge('relative', className)}>
      <Input
        {...inputProps}
        className={twMerge(
          `w-full h-14`,
          inputProps?.type === 'date' && 'hide-date-icon',
          inputProps?.type === 'time' && 'hide-time-icon',
          inputClassName
        )}
      />
      {icon}
    </div>
  )
}
