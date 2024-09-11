import { services_image01 } from '@/assets'
import { BlogPostType } from '@/components/Blogs'
import { SectionWrapper } from '@/components/common'
import { Button } from '@/components/ui'
import { capitalize, cn } from '@/lib/utils'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import { FaArrowRightLong, FaRegCalendar } from 'react-icons/fa6'

type Props = {
  children: ReactNode
}

const data: BlogPostType[] = [
  {
    banner: services_image01,
    author: 'John Doe',
    date: new Date('2022-01-01'),
    comments: 123,
    title: 'Amazing cardiology appointment',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non enim nec nisi porta dignissim. Sed in odio vel turpis dictum tincidunt at vel justo. Donec tincidunt, velit at sollicitudin scelerisque, justo velit gravida velit, vel consectetur lectus nisi ut nunc.',
    slug: 'amazing-cardiology-appointment'
  },
  {
    author: 'John Doe',
    date: new Date('2022-01-01'),
    comments: 123,
    title: 'lorem-fsdfsd-jkflsd',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non enim nec nisi porta dignissim. Sed in odio vel turpis dictum tincidunt at vel justo. Donec tincidunt, velit at sollicitudin scelerisque, justo velit gravida velit, vel consectetur lectus nisi ut nunc.',
    slug: 'lorem-fsdfsd-jkflsd'
  },
  {
    banner: services_image01,
    author: 'John Doe',
    date: new Date('2022-01-01'),
    comments: 123,
    title: 'lorem-fsdfsd-jkflsd01',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non enim nec nisi porta dignissim. Sed in odio vel turpis dictum tincidunt at vel justo. Donec tincidunt, velit at sollicitudin scelerisque, justo velit gravida velit, vel consectetur lectus nisi ut nunc.',
    slug: 'lorem-fsdfsd-jkflsd01'
  }
]

const layout = ({ children }: Props) => {
  return (
    <SectionWrapper>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 py-[66px]'>
        <div className='col-span-1 order-2 lg:order-1 lg:col-span-2'>{children}</div>
        <div className='relative order-1 lg:order-1'>
          <div className='lg:sticky lg:top-[13rem] lg:left-0 flex flex-col gap-10'>
            <div className='bg-[#F5F7FA] p-5 order-2 lg:order-1 md:p-10 w-full rounded-[20px]'>
              <h3 className='text-titleColor outfit font_24_600'>Categories</h3>
              <div className='mt-[21px] relative h-[3px] w-full overflow-hidden rounded-full bg-[#D8DDE1]'>
                <div className='absolute bg-themePrimary w-8 h-full top-0 left-0' />
              </div>
              <div className='mt-10 flex flex-col gap-[14px]'>
                {[
                  'cardiology',
                  'gastroenterologist',
                  'dental care',
                  'ophthalmology',
                  'orthopedics',
                  'plastic surgeons',
                  'neurology'
                ].map((category, idx) => {
                  let active = false
                  if (idx === 3) {
                    active = true
                  }
                  return (
                    <Button
                      className={cn(
                        'flex justify-between items-center h-14 border-none rounded-full px-8 bg-white shadow-buttonShadow urbanist font_18_600 text-titleColor hover:bg-themeSecondary/5',
                        active &&
                          'shadow-[4px_0_0_0_#3D66F5_inset] bg-themeSecondary/5 text-themeSecondary'
                      )}
                      key={category}
                    >
                      <span>{capitalize(category)}</span>
                      <FaArrowRightLong className={cn('hidden', active && 'block')} />
                    </Button>
                  )
                })}
              </div>
            </div>
            <div className='bg-[#F5F7FA] p-5 order-2 lg:order-1 md:p-10 w-full rounded-[20px]'>
              <h3 className='text-titleColor outfit font_24_600'>Recent Posts</h3>
              <div className='mt-[21px] relative h-[3px] w-full overflow-hidden rounded-full bg-[#D8DDE1]'>
                <div className='absolute bg-themePrimary w-8 h-full top-0 left-0' />
              </div>
              <div className='mt-10 flex flex-col gap-[14px]'>
                {data.map(blog => {
                  return (
                    <div key={blog.title} className='flex gap-4'>
                      <Image
                        className='rounded-lg aspect-square h-[85px] w-[85px] object-cover'
                        src={blog.banner ?? services_image01}
                        height={85}
                        width={85}
                        alt={blog.title}
                      />
                      <div className='flex flex-1 flex-col gap-4 justify-center'>
                        <h6 className='urbanist font_18_600'>{blog.title}</h6>
                        <div className='flex gap-2 items-center'>
                          <FaRegCalendar className='text-themePrimary' />
                          <span>{blog.date.toDateString()}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='bg-[#F5F7FA] p-5 order-2 lg:order-1 md:p-10 w-full rounded-[20px]'>
              <h3 className='text-titleColor outfit font_24_600'>Popular</h3>
              <div className='mt-[21px] relative h-[3px] w-full overflow-hidden rounded-full bg-[#D8DDE1]'>
                <div className='absolute bg-themePrimary w-8 h-full top-0 left-0' />
              </div>
              <div className='mt-10 flex flex-wrap gap-[14px]'>
                {['Skin Care', 'Advice', 'Solution', 'Doctors', 'Medical', 'Hospital'].map(
                  (category, idx) => {
                    return (
                      <Button
                        className={cn(
                          'flex justify-between items-center h-10 border-none rounded-sm px-4 bg-white shadow-buttonShadow dmSans font_14_400 text-[#788094] hover:bg-themePrimary hover:text-white'
                        )}
                        key={category}
                      >
                        <span>{capitalize(category)}</span>
                      </Button>
                    )
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default layout
