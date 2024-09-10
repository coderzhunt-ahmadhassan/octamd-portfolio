import { BlogPost, FullBlog } from '@/components/Blogs'
import { SectionWrapper } from '@/components/common'
import { Button } from '@/components/ui'
import { capitalize, cn } from '@/lib/utils'
import { FaArrowRightLong } from 'react-icons/fa6'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='flex w-full flex-col gap-10'>
      <FullBlog />
    </div>
  )
}
