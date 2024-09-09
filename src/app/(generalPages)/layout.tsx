import { SectionWrapper } from '@/components/common'
import { CommonFooter } from '@/components/Footers'
import { Header } from '@/components/Headers'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const layout = ({ children }: Props) => {
  return (
    <main className='min-h-screen flex flex-col'>
      <Header />
      <SectionWrapper className='flex-1'>{children}</SectionWrapper>
      <CommonFooter />
    </main>
  )
}

export default layout
