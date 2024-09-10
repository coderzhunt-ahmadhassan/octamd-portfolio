import React, { HTMLAttributes, ReactNode } from 'react'
import { Input, InputProps, Textarea, TextareaProps } from '@/components/ui'
import { twMerge } from 'tailwind-merge'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { IconType } from 'react-icons'

type Props = {
  className?: HTMLAttributes<HTMLDivElement>['className']
  inputClassName?: HTMLAttributes<HTMLInputElement>['className']
  textareaClassName?: HTMLAttributes<HTMLTextAreaElement>['className']
  icon?: ReactNode
  textarea?: boolean
} & InputProps &
  TextareaProps

export const InputField = ({
  className,
  inputClassName,
  textareaClassName,
  textarea,
  icon,
  ...inputProps
}: Props) => {
  return (
    <div className={twMerge('relative', className)}>
      {!textarea && (
        <Input
          {...inputProps}
          className={twMerge(
            `w-full h-14`,
            inputProps?.type === 'date' && 'hide-date-icon',
            inputProps?.type === 'time' && 'hide-time-icon',
            inputClassName
          )}
        />
      )}
      {textarea && (
        <Textarea {...inputProps} className={twMerge(`w-full py-5 h-full`, textareaClassName)} />
      )}
      {icon}
    </div>
  )
}
