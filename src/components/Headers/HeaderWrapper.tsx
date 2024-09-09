'use client'

import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  type: 'landingPage' | 'default'
}

const HeaderWrapper = ({ children, type }: Props) => {
  if (type === 'landingPage')
    return (
      <div className='w-full px-0 md:px-[25px] z-20 fixed [&_*]:whitespace-normal sm:whitespace-nowrap top-0 left-1/2 -translate-x-1/2 max-w-[1570px] mx-auto'>
        {children}
      </div>
    )
  else return <div>{children}</div>
}

export default HeaderWrapper
