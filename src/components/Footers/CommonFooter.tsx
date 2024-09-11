import { SectionWrapper } from '@/components/common'
import Link from 'next/link'
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { Button } from '../ui'

type Props = {}

export function CommonFooter({}: Props) {
  return (
    <SectionWrapper
      className='bg-titleColor py-10 sm:py-3'
      innerContainerClassName='flex justify-between flex-col sm:flex-row items-center gap-y-6'
    >
      <p className='text-white font-urbanist font_16_400 text-center'>
        Copyright 2023{' '}
        <Link className='text-themePrimary' href={'/'}>
          Mediax
        </Link>
        . All Rights Reserved.
      </p>
      <div className='flex gap-[10px]'>
        <a href='#' className='rounded-full'>
          <Button className='border-none rounded-full aspect-square h-[46px] w-[46px] flex__center bg-white hover:bg-themePrimary text-titleColor hover:text-white'>
            <FaFacebookF />
          </Button>
        </a>
        <a href='#' className='rounded-full'>
          <Button className='border-none rounded-full aspect-square h-[46px] w-[46px] flex__center bg-white hover:bg-themePrimary text-titleColor hover:text-white'>
            <FaTwitter />
          </Button>
        </a>
        <a href='#' className='rounded-full'>
          <Button className='border-none rounded-full aspect-square h-[46px] w-[46px] flex__center bg-white hover:bg-themePrimary text-titleColor hover:text-white'>
            <FaInstagram />
          </Button>
        </a>
        <a href='#' className='rounded-full'>
          <Button className='border-none rounded-full aspect-square h-[46px] w-[46px] flex__center bg-white hover:bg-themePrimary text-titleColor hover:text-white'>
            <FaLinkedin />
          </Button>
        </a>
      </div>
    </SectionWrapper>
  )
}
