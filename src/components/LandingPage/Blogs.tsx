import React, { ReactNode } from 'react'
import { SectionTitle, SectionWrapper } from '@/components/common'
import { blog_banner, ServicesIcon } from '@/assets'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { FaRegCalendar, FaRegUser } from 'react-icons/fa6'

type Props = {}

export interface BlogType {
  banner?: string | StaticImport
  author?: string
  date: Date
  title: string
  slug?: string
  desc?: ReactNode
}

const blogs: BlogType[] = []

export function Blogs({}: Props) {
  return (
    <SectionWrapper className='py-[120px] bg-[#F5F8FD]'>
      <div className='flex justify-between gap-y-8 items-center flex-col md:flex-row'>
        <div className='flex flex-col items-center md:items-start'>
          <SectionTitle
            image={ServicesIcon}
            title='our blogs'
            heading={{
              title: 'Our Latest News & Blogs',
              className: '!text-center !md:text-left'
            }}
          />
        </div>
        <Link href='/blog' className='rounded-full my-auto'>
          <Button className='font-dm_sans font_14_700 h-10 rounded-full w-[192px]'>
            View All Posts
          </Button>
        </Link>
      </div>
      <div className='grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-14'>
        {[1, 2, 3].map(i => (
          <BlogCard key={i} title={`Blog Title ${i}`} />
        ))}
      </div>
    </SectionWrapper>
  )
}

const BlogCard = ({ title, slug }: Partial<BlogType>) => {
  return (
    <div className='p-[30px] shadow-blogCard bg-white flex flex-col gap-4 sm:gap-[30px] rounded-[20px]'>
      <Image
        className='w-full h-[190px] rounded-[10px] object-cover'
        src={blog_banner}
        height={442}
        width={483}
        alt={title ?? 'Untitled Blog Banner'}
      />
      <div className='flex gap-2 sm:gap-5 flex-col sm:flex-row'>
        <p className='flex items-center gap-1 whitespace-nowrap'>
          <FaRegUser className='text-themePrimary' />
          &nbsp;
          <span>By {'Jonson'}</span>
        </p>
        <div className='border-l hidden sm:block border-[#D8DDE1]'></div>
        <p className='flex items-center gap-1 whitespace-nowrap'>
          <FaRegCalendar className='text-themePrimary' />
          &nbsp;
          <span>08 Nov, 2023</span>
        </p>
      </div>
      <h3 className='font-outfit font_24_500 text-titleColor'>
        How Business Is Taking Over & What to Do About It
      </h3>
      <Link className='self-start rounded-full w-full' href={`/blog/${slug ?? ''}`}>
        <Button
          variant='outline'
          className='rounded-full uppercase py-7 w-full text-[#788094] font-dm_sans font_14_700'
        >
          read more
        </Button>
      </Link>
    </div>
  )
}
