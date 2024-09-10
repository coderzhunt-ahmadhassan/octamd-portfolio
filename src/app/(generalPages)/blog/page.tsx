'use client'

import { services_image01 } from '@/assets'
import { BlogPost, BlogPostType } from '@/components/Blogs'
import { CustomPagination } from '@/components/common'
import { useState } from 'react'

type Props = {}

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
  },
  {
    banner: services_image01,
    author: 'John Doe',
    date: new Date('2022-01-01'),
    comments: 123,
    title: 'lorem-fsdfsd-jkflsd02',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non enim nec nisi porta dignissim. Sed in odio vel turpis dictum tincidunt at vel justo. Donec tincidunt, velit at sollicitudin scelerisque, justo velit gravida velit, vel consectetur lectus nisi ut nunc.',
    slug: 'lorem-fsdfsd-jkflsd02'
  },
  {
    banner: services_image01,
    author: 'John Doe',
    date: new Date('2022-01-01'),
    comments: 123,
    title: 'lorem-fsdfsd-jkflsd03',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non enim nec nisi porta dignissim. Sed in odio vel turpis dictum tincidunt at vel justo. Donec tincidunt, velit at sollicitudin scelerisque, justo velit gravida velit, vel consectetur lectus nisi ut nunc.',
    slug: 'lorem-fsdfsd-jkflsd03'
  },
  {
    banner: services_image01,
    author: 'John Doe',
    date: new Date('2022-01-01'),
    comments: 123,
    title: 'lorem-fsdfsd-jkflsd04',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non enim nec nisi porta dignissim. Sed in odio vel turpis dictum tincidunt at vel justo. Donec tincidunt, velit at sollicitudin scelerisque, justo velit gravida velit, vel consectetur lectus nisi ut nunc.',
    slug: 'lorem-fsdfsd-jkflsd04'
  }
]

const servicesPageLength: number = 4
const totalItems: number = data.length

export default function Page({}: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1)

  function handlePrevious() {
    setCurrentPage(prev => (prev === 1 ? prev : prev - 1))
  }

  function handleNext() {
    setCurrentPage(prev => (prev === totalItems ? prev : prev + 1))
  }

  function handlePageClick(pageNumber: number) {
    setCurrentPage(pageNumber)
  }
  return (
    <>
      <div className='flex w-full flex-col gap-10'>
        {data.map(blog => {
          return <BlogPost key={blog.title} {...blog} />
        })}
      </div>
      <div className='mt-[60px]'>
        <CustomPagination
          currentPage={currentPage}
          totalItems={totalItems}
          pageLength={servicesPageLength}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handlePageClick={handlePageClick}
        />
      </div>
    </>
  )
}
