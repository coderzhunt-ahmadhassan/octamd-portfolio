import React, { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
  className?: HTMLAttributes<HTMLDivElement>['className']
  outerContainerClassName?: HTMLAttributes<HTMLDivElement>['className']
  innerContainerClassName?: HTMLAttributes<HTMLDivElement>['className']
  bgProps?: ReactNode
}

export const SectionWrapper = ({
  children,
  className,
  outerContainerClassName,
  innerContainerClassName,
  bgProps
}: Props) => {
  return (
    <section className={twMerge('z-10 relative', className)}>
      {bgProps}
      <div className={twMerge('outerContainer', outerContainerClassName)}>
        <div className={twMerge('innerContainer', innerContainerClassName)}>{children}</div>
      </div>
    </section>
  )
}
