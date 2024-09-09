'use client'

import { Dispatch, Fragment, HTMLAttributes, ReactNode, SetStateAction, useState } from 'react'
import RootPortal from '@/components/common/RootPortal'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
  trigger: ReactNode
  className?: HTMLAttributes<HTMLDivElement>['className']
  open: boolean
  handleOpen: () => void
  handleClose: () => void
}

export function GeneralMenu({
  open,
  handleOpen,
  handleClose,
  children,
  trigger,
  className
}: Props) {
  return (
    <Fragment>
      <div className={twMerge('inline', className)} onClick={handleOpen}>
        {trigger}
      </div>
      {open && (
        <RootPortal>
          <div className='h-screen w-screen absolute inset-0'>
            <div className='bg-[rgba(0,0,0,0.5)] absolute inset-0' onClick={handleClose}></div>
            {children}
          </div>
        </RootPortal>
      )}
    </Fragment>
  )
}
