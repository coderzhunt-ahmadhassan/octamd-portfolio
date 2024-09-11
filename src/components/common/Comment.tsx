import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
import { FaRegComments, FaReply } from 'react-icons/fa6'
import { Button } from '../ui'

type Props = {
  canReply?: boolean
} & CommentType

export interface CommentType {
  picture: string | StaticImport
  name: string
  comment: string
  dateTime: Date
  replies?: CommentType[]
}

export function Comment({ comment, picture, dateTime, name, replies, canReply = true }: Props) {
  return (
    <>
      <div className='flex flex-wrap gap-5 py-10 border-b border-b-[#D8DDE1]'>
        <Image className='h-20 w-20' src={picture} alt={name} height={80} width={80} />
        <div className='flex flex-col gap-[20px] flex-1 md:basis-[30rem]'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col'>
              <h4>{name}</h4>
              <p>{dateTime.toDateString()}</p>
            </div>
            {canReply && (
              <Button className='bg-transparent flex gap-2 border-none shadow-none hover:bg-transparent text-themePrimary hover:text-themePrimary'>
                <FaReply />
                <span>Reply</span>
              </Button>
            )}
          </div>
          <p className='text-[#788094] font-urbanist font_14_400'>{comment}</p>
        </div>
      </div>
      {replies && (
        <div className='ml-5 md:ml-10 lg:ml-14 xl:ml-20'>
          {replies.map(reply => {
            return <Comment key={reply.name} canReply={false} {...reply} />
          })}
        </div>
      )}
    </>
  )
}
