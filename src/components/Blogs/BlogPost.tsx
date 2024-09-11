import { formatNumber } from '@/lib/utils'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { FaRegCalendar, FaRegComments, FaRegUser } from 'react-icons/fa6'
import { Button } from '../ui'
import Link from 'next/link'

type Props = {} & BlogPostType

export interface BlogPostType {
  banner?: string | StaticImport
  author: string
  date: Date
  comments: number
  title: string
  desc: string
  slug: string
}

export function BlogPost({ banner, author, date, comments, title, desc, slug }: Props) {
  return (
    <div className='flex flex-col overflow-hidden rounded-[20px] shadow-cardShadow'>
      {banner && (
        <Image
          className='h-[400px] w-full object-cover'
          src={banner}
          height={400}
          width={800}
          alt={title}
        />
      )}
      <div className='p-10'>
        <div className='flex flex-wrap justify-start items-center gap-5 font-dm_sans font_14_400 text-[#788094]'>
          <div className='flex items-center justify-start gap-2'>
            <FaRegUser className='text-themePrimary w-4 h-4' />
            <span>By {author}</span>
          </div>
          <div className='w-0 h-6 border-l border-[#D8DDE1]' />
          <div className='flex items-center justify-start gap-2'>
            <FaRegCalendar className='text-themePrimary w-4 h-4' />
            <span>{date.toISOString()}</span>
          </div>
          <div className='w-0 h-6 border-l border-[#D8DDE1]' />
          <div className='flex items-center justify-start gap-2'>
            <FaRegComments className='text-themePrimary w-4 h-4' />
            <span>{formatNumber(comments)} Comments</span>
          </div>
        </div>
        <h2 className='font-urbanist font_30_700 text-titleColor mt-4'>{title}</h2>
        <p className='text-[#788094] font-urbanist font_14_400 mt-6 mb-10'>{desc}</p>
        <Link className='rounded-full' href={`/blog/${slug}`}>
          <Button
            className='rounded-full text-[#788094] px-8 uppercase h-[46px] font-dm_sans font_14_700'
            variant={'outline'}
          >
            Read More
          </Button>
        </Link>
      </div>
    </div>
  )
}
