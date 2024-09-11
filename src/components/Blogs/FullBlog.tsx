import { Avatar, quote_icon, services_image01 } from '@/assets'
import { cn, formatNumber } from '@/lib/utils'
import Image from 'next/image'
import {
  FaCircleCheck,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaRegCalendar,
  FaRegComments,
  FaRegEnvelope,
  FaRegUser,
  FaReply,
  FaTwitter
} from 'react-icons/fa6'
import { Comment, CommentType, InputField } from '../common'
import { Button, Checkbox } from '../ui'
import { SlGlobe } from 'react-icons/sl'
import { RiPencilLine } from 'react-icons/ri'

type Props = {}

const commentsList: CommentType[] = [
  {
    picture: Avatar,
    name: 'John Doe',
    comment:
      'Your health and well-being are our top priorities. We take the time to listen to your concerns, answer your questions.',
    dateTime: new Date('2016-12-12'),
    replies: [
      {
        picture: Avatar,
        name: 'John Doe sdf',
        comment:
          'Your health and well-being are our top priorities. We take the time to listen to your concerns, answer your questions.',
        dateTime: new Date('2016-12-12')
      },
      {
        picture: Avatar,
        name: 'John Doe www',
        comment:
          'Your health and well-being are our top priorities. We take the time to listen to your concerns, answer your questions.',
        dateTime: new Date('2016-12-12')
      }
    ]
  },
  {
    picture: Avatar,
    name: 'John Doe www',
    comment:
      'Your health and well-being are our top priorities. We take the time to listen to your concerns, answer your questions.',
    dateTime: new Date('2016-12-12')
  }
]

export function FullBlog({}: Props) {
  const title = 'How Business Is Taking Over & What to Do About It'
  const author = 'Jonson'
  const date = new Date('2022-01-01')
  const comments = 4
  return (
    <>
      <div className='flex flex-col overflow-hidden rounded-[20px] shadow-cardShadow'>
        <Image
          className='h-[400px] w-full object-cover'
          src={services_image01}
          height={400}
          width={800}
          alt={title}
        />

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
          <p className='text-[#788094] font-urbanist font_14_400 my-10'>
            We offer flexible appointment scheduling options to accommodate your busy lifestyle.
            Whether you prefer to book in advance or need a same-day appointment, we strive to make
            the process as seamless as possible
          </p>
          <p className='text-[#788094] font-urbanist font_14_400'>
            Especially in light of the ongoing COVID-19 pandemic, we maintain rigorous safety
            protocols and hygiene standards to ensure the well-being of our patients and staff. Your
            health and safety are our utmost priority.
          </p>
          <div className='border py-10 my-14 relative px-[60px] border-[#D8DDE1] rounded-[30px]'>
            <div className='absolute bg-white h-10 w-10 top-0 -translate-y-1/2 left-0'>
              <Image src={quote_icon} alt='quote' />
            </div>
            <div className='absolute rounded-l-lg top-full overflow-hidden -translate-y-1/2'>
              <div className='absolute origin-top-right top-0 right-0 h-screen w-screen bg-themePrimary -skew-x-[35deg]' />
              <span className='relative font-urbanist font_20_700 p-[10px_50px_10px_20px] text-white'>
                Michel Clarck
              </span>
            </div>
            <p className='italic'>
              Dramatically develop market positioning expertise with long-term high-impact ROI.
              Authoritatively provide access to adaptive web-readiness.
            </p>
          </div>
          <div className='flex gap-[30px]'>
            <Image
              className='rounded-[20px] flex-1 h-[300px] object-cover basis-[10rem]'
              src={services_image01}
              alt='blog image random'
              height={300}
              width={341}
            />
            <Image
              className='rounded-[20px] flex-1 h-[300px] object-cover basis-[10rem]'
              src={services_image01}
              alt='blog image random'
              height={300}
              width={341}
            />
          </div>
          <h2 className='font-urbanist font_30_700 text-titleColor mt-10'>
            The medical experts transplant the heart
          </h2>
          <p className='text-[#788094] font-urbanist font_14_400 mt-10'>
            Our clinic is equipped with modern facilities and advanced medical technology to ensure
            accurate diagnoses and effective treatments. This enables us to provide you with the
            highest standard of care.
          </p>
          <ul className='flex flex-col mt-10 gap-5'>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>General Consulting</span>
            </li>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Construction Management</span>
            </li>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Modeling & Algorithm</span>
            </li>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Better Decision Making</span>
            </li>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Professional Consulting Services</span>
            </li>
          </ul>
          <p className='text-[#788094] font-urbanist font_14_400 mt-10'>
            From primary care and pediatrics to specialized services like dermatology, orthopedics,
            and women&apos;s health, we offer a wide spectrum of medical services under one roof.
          </p>
          <div className='flex justify-start gap-8 flex-wrap mt-10'>
            <div className='flex-1 flex items-center gap-5 mr-auto justify-start basis-[15rem]'>
              <span>Tags:</span>
              <div className='flex flex-wrap gap-[14px]'>
                <Button
                  className={cn(
                    'flex justify-between items-center h-10 border-none rounded-sm px-4 bg-[#F5F7FA] shadow-buttonShadow font-dm_sans font_14_400 text-[#788094] hover:bg-themePrimary hover:text-white'
                  )}
                >
                  <span>Medical</span>
                </Button>
                <Button
                  className={cn(
                    'flex justify-between items-center h-10 border-none rounded-sm px-4 bg-[#F5F7FA] shadow-buttonShadow font-dm_sans font_14_400 text-[#788094] hover:bg-themePrimary hover:text-white'
                  )}
                >
                  <span>Renovations</span>
                </Button>
              </div>
            </div>
            <div className='flex-1 flex items-center justify-start md:justify-end gap-5 basis-[15rem]'>
              <span>Share:</span>
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
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col p-10 overflow-hidden rounded-[20px] shadow-cardShadow'>
        <div className='flex items-center justify-start gap-4'>
          <FaRegComments className='text-themePrimary text-[2rem] relative top-2' />
          <h2 className='font-urbanist font_30_700 text-titleColor mt-4'>Comments ({comments})</h2>
        </div>
        <div className=''>
          {commentsList.map(comment => {
            return <Comment key={comment.comment} {...comment} />
          })}
        </div>
      </div>
      <div className='flex flex-col p-10 overflow-hidden rounded-[20px] shadow-cardShadow'>
        <div className='flex items-center justify-start gap-4'>
          <FaReply className='text-themePrimary text-[2rem] relative top-2' />
          <h2 className='font-urbanist font_30_700 text-titleColor mt-4'>Leave a Reply</h2>
        </div>
        <div className=''>
          <p className='text-[#788094] font-urbanist font_14_400 mt-[30px]'>
            Your email address will not be published. Required fields are marked
          </p>
          <form className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[30px]'>
            <InputField
              className='col-span-2 lg:col-span-1 rounded-full bg-[#F5F7FA]'
              inputClassName='rounded-full border-none pl-6 pr-10 font-urbanist font_14_400'
              type='text'
              name='name'
              placeholder='Your Name'
              icon={
                <FaRegUser className='absolute top-1/2 -translate-y-1/2 pointer-events-none opacity-50 right-6' />
              }
            />
            <InputField
              className='col-span-2 lg:col-span-1 rounded-full bg-[#F5F7FA]'
              inputClassName='rounded-full border-none pl-6 pr-10 font-urbanist font_14_400'
              type='email'
              placeholder='Your Name'
              name='email'
              icon={
                <FaRegEnvelope className='absolute top-1/2 -translate-y-1/2 pointer-events-none opacity-50 right-6' />
              }
            />
            <InputField
              className='col-span-2 rounded-full bg-[#F5F7FA]'
              inputClassName='rounded-full border-none pl-6 pr-10 font-urbanist font_14_400'
              type='text'
              placeholder='Website'
              icon={
                <SlGlobe className='absolute top-1/2 -translate-y-1/2 pointer-events-none opacity-50 right-6' />
              }
            />
            <InputField
              className='col-span-2 rounded-[30px] bg-[#F5F7FA] h-[12rem]'
              textareaClassName='rounded-[30px] border-none pl-6 pr-10 font-urbanist font_14_400'
              type='text'
              placeholder='Write Message...'
              name='message'
              textarea
              icon={
                <RiPencilLine className='absolute top-[1.75rem] -translate-y-1/2 pointer-events-none opacity-50 right-6' />
              }
            />
            <div className='col-span-2 flex justi items-center gap-4'>
              <Checkbox className='' id='terms' />
              <label htmlFor='terms' className='text-[#788094] font-urbanist font_14_400 '>
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>
            <Button
              className='rounded-full col-span-1 font-dm_sans font_14_700 h-10 border border-themePrimary w-full hover:bg-white hover:text-themePrimary'
              type='submit'
              variant={'primary'}
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
