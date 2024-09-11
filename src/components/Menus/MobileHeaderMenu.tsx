'use client'

import { IoClose } from 'react-icons/io5'
import { ReactNode, useState } from 'react'
import { GeneralMenu } from './GeneralMenu'
import Link from 'next/link'
import { Button } from '@/components/ui'

interface Props {
  children?: ReactNode
}

const NavList: { title: string; link: string }[] = [
  {
    title: 'HOME +',
    link: '/'
  },
  {
    title: 'ABOUT US',
    link: '/about'
  },
  {
    title: 'SERVICES +',
    link: '/services'
  },
  {
    title: 'PAGES +',
    link: '/pages'
  },
  {
    title: 'BLOG +',
    link: '/blog'
  },
  {
    title: 'CONTACT US',
    link: '/contact'
  }
]

export function MobileHeaderMenu({ children }: Props) {
  const [open, setOpen] = useState<boolean>(false)
  const handleClose = () => setOpen(false)
  const handleToggle = () => setOpen(prev => !prev)

  return (
    <GeneralMenu
      open={open}
      handleClose={handleClose}
      handleToggle={handleToggle}
      trigger={children}
    >
      <div className='h-screen absolute top-0 right-0 bg-white w-full max-w-[30rem] py-[50px] px-4 flex flex-col'>
        <Button
          className='flex__center ml-auto 2xl:m-0 p-0 h-14 w-14'
          variant='circularOutline'
          onClick={handleClose}
        >
          <IoClose />
        </Button>
        {NavList.map(({ title, link }) => (
          <Link
            key={title}
            href={link}
            className='my-[10px] flex items-center justify-between font-urbanist font_18_400'
            onClick={handleClose}
          >
            {title}
          </Link>
        ))}
        <Button
          className='flex uppercase rounded-[10rem] text-sm h-14 w-full mt-8'
          variant='secondary'
        >
          Appointment now
        </Button>
      </div>
    </GeneralMenu>
  )
}
