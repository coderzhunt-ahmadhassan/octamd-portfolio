'use client'

import { Dispatch, Fragment, HTMLAttributes, ReactNode, SetStateAction, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { RootPortal } from '../common'

type Props = {
  children: ReactNode
  trigger: ReactNode
  className?: HTMLAttributes<HTMLDivElement>['className']
  open: boolean
  handleToggle: () => void
  handleClose: () => void
}

export function GeneralMenu({
  open,
  handleToggle,
  handleClose,
  children,
  trigger,
  className
}: Props) {
  return (
    <Fragment>
      <div className={twMerge('inline 2xl:hidden', className)} onClick={handleToggle}>
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
