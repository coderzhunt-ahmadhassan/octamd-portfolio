import React, { ReactNode } from 'react'
import { type CarouselItem, CustomCarousel } from '@/components/common/Carousel'
import Image from 'next/image'
import { dummy_user, testimonial_quote } from '@/assets'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { FaRegStar, FaStar } from 'react-icons/fa6'

type Props = {}

type StarCountType = 1 | 2 | 3 | 4 | 5

interface TestimonialType {
  id: number
  user: {
    image: string | StaticImport
    name: string
    profession: string
  }
  review: {
    stars: StarCountType
    description: string
  }
}

const testimonials: TestimonialType[] = [
  {
    id: 1,
    user: {
      image: dummy_user,
      name: 'John Doe',
      profession: 'Dentist'
    },
    review: {
      stars: 1,
      description:
        '“Objectively deploy open-source web-readiness impactful bandwidth. Compellingly coordinate business deliverables rather equity invested technologies. Phosfluorescently reinvent maintainable.”'
    }
  },
  {
    id: 2,
    user: {
      image: dummy_user,
      name: 'John Doe',
      profession: 'Dentist'
    },
    review: {
      stars: 2,
      description:
        '“Objectively deploy open-source web-readiness impactful bandwidth. Compellingly coordinate business deliverables rather equity invested technologies. Phosfluorescently reinvent maintainable.”'
    }
  },
  {
    id: 3,
    user: {
      image: dummy_user,
      name: 'John Doe',
      profession: 'Dentist'
    },
    review: {
      stars: 3,
      description:
        '“Objectively deploy open-source web-readiness impactful bandwidth. Compellingly coordinate business deliverables rather equity invested technologies. Phosfluorescently reinvent maintainable.”'
    }
  },
  {
    id: 4,
    user: {
      image: dummy_user,
      name: 'John Doe',
      profession: 'Dentist'
    },
    review: {
      stars: 4,
      description:
        '“Objectively deploy open-source web-readiness impactful bandwidth. Compellingly coordinate business deliverables rather equity invested technologies. Phosfluorescently reinvent maintainable.”'
    }
  },
  {
    id: 5,
    user: {
      image: dummy_user,
      name: 'John Doe',
      profession: 'Dentist'
    },
    review: {
      stars: 5,
      description:
        '“Objectively deploy open-source web-readiness impactful bandwidth. Compellingly coordinate business deliverables rather equity invested technologies. Phosfluorescently reinvent maintainable.”'
    }
  },
  {
    id: 6,
    user: {
      image: dummy_user,
      name: 'John Doe',
      profession: 'Dentist'
    },
    review: {
      stars: 4,
      description:
        '“Objectively deploy open-source web-readiness impactful bandwidth. Compellingly coordinate business deliverables rather equity invested technologies. Phosfluorescently reinvent maintainable.”'
    }
  },
  {
    id: 7,
    user: {
      image: dummy_user,
      name: 'John Doe',
      profession: 'Dentist'
    },
    review: {
      stars: 3,
      description:
        '“Objectively deploy open-source web-readiness impactful bandwidth. Compellingly coordinate business deliverables rather equity invested technologies. Phosfluorescently reinvent maintainable.”'
    }
  },
  {
    id: 8,
    user: {
      image: dummy_user,
      name: 'John Doe',
      profession: 'Dentist'
    },
    review: {
      stars: 2,
      description:
        '“Objectively deploy open-source web-readiness impactful bandwidth. Compellingly coordinate business deliverables rather equity invested technologies. Phosfluorescently reinvent maintainable.”'
    }
  },
  {
    id: 9,
    user: {
      image: dummy_user,
      name: 'John Doe',
      profession: 'Dentist'
    },
    review: {
      stars: 1,
      description:
        '“Objectively deploy open-source web-readiness impactful bandwidth. Compellingly coordinate business deliverables rather equity invested technologies. Phosfluorescently reinvent maintainable.”'
    }
  }
]

export const TestimonialSlider = (props: Props) => {
  const items: CarouselItem[] = testimonials.map(testimonial => ({
    id: testimonial.id,
    content: <Testimonial {...testimonial} />
  }))
  return (
    <div className='mt-14'>
      <CustomCarousel className='basis-full xl:basis-1/2' dots items={items} />
    </div>
  )
}

const Testimonial = ({ review: { description, stars }, user }: TestimonialType) => {
  return (
    <TestimonialWrapper>
      <StarsReview stars={stars} />
      <p className='urbanist font_16_400 text-[#788094]'>{description}</p>
      <UserBox {...user} />
    </TestimonialWrapper>
  )
}

const TestimonialWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className='rounded-[20px] bg-[#F5F7FA] gap-4 p-2 md:p-10 min-h-[285px] flex flex-col justify-between items-start relative'>
      <Image
        className='absolute hidden md:block bottom-10 right-10'
        src={testimonial_quote}
        height={56}
        width={56}
        alt='quote'
      />
      <>{children}</>
    </div>
  )
}

const StarsReview = ({ stars }: { stars: StarCountType }) => {
  return (
    <div className='flex gap-1'>
      {stars === 1 && (
        <>
          <FaStar className='text-[#FBA018]' />
          <FaRegStar className='text-[#FBA018]' />
          <FaRegStar className='text-[#FBA018]' />
          <FaRegStar className='text-[#FBA018]' />
          <FaRegStar className='text-[#FBA018]' />
        </>
      )}
      {stars === 2 && (
        <>
          <FaStar className='text-[#FBA018]' />
          <FaStar className='text-[#FBA018]' />
          <FaRegStar className='text-[#FBA018]' />
          <FaRegStar className='text-[#FBA018]' />
          <FaRegStar className='text-[#FBA018]' />
        </>
      )}
      {stars === 3 && (
        <>
          <FaStar className='text-[#FBA018]' />
          <FaStar className='text-[#FBA018]' />
          <FaStar className='text-[#FBA018]' />
          <FaRegStar className='text-[#FBA018]' />
          <FaRegStar className='text-[#FBA018]' />
        </>
      )}
      {stars === 4 && (
        <>
          <FaStar className='text-[#FBA018]' />
          <FaStar className='text-[#FBA018]' />
          <FaStar className='text-[#FBA018]' />
          <FaStar className='text-[#FBA018]' />
          <FaRegStar className='text-[#FBA018]' />
        </>
      )}
      {stars === 5 && (
        <>
          <FaStar className='text-[#FBA018]' />
          <FaStar className='text-[#FBA018]' />
          <FaStar className='text-[#FBA018]' />
          <FaStar className='text-[#FBA018]' />
          <FaStar className='text-[#FBA018]' />
        </>
      )}
    </div>
  )
}

const UserBox = ({ image, name, profession }: TestimonialType['user']) => {
  return (
    <div className='flex gap-4 items-center'>
      <Image
        className='h-14 w-14 object-cover rounded-[100%] aspect-square pointer-events-none'
        src={image}
        alt={name}
        height={56}
        width={56}
      />
      <div className='flex flex-col'>
        <h5 className='urbanist font_20_700 text-titleColor'>{name}</h5>
        <h6 className='urbanist font_14_400 text-[#788094]'>{profession}</h6>
      </div>
    </div>
  )
}
