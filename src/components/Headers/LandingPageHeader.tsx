import { LandingPageHeaderLogo } from '@/components/Logos'
import HeaderWrapper from './HeaderWrapper'
import {
  PhoneNumber,
  Email,
  Facebook,
  FacebookHover,
  Twitter,
  TwitterHover,
  Instagram,
  InstagramHover,
  Behance,
  BehanceHover,
  Youtube,
  YoutubeHover,
  Search,
  Cart,
  Hamburger
} from '@/assets'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { cn, toMaxNumber } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import Link from 'next/link'
import { headers } from 'next/headers'
import { Button } from '@/components/ui'

type Props = {}

type SocialIconType = {
  icon: StaticImport
  hoverIcon: StaticImport
  link?: string
}

const contacts: { icon: string | StaticImport; label: string; value: string; link?: string }[] = [
  {
    icon: PhoneNumber,
    label: 'Phone',
    value: '+163-654-3569',
    link: 'wa.me/1636543569'
  },
  {
    icon: Email,
    label: 'Email',
    value: 'info@mediax.com',
    link: 'mailto:info@mediax.com'
  }
]

const socialLinks: SocialIconType[] = [
  {
    icon: Facebook,
    hoverIcon: FacebookHover,
    link: ''
  },
  {
    icon: Twitter,
    hoverIcon: TwitterHover,
    link: ''
  },
  {
    icon: Instagram,
    hoverIcon: InstagramHover,
    link: ''
  },
  {
    icon: Behance,
    hoverIcon: BehanceHover,
    link: ''
  },
  {
    icon: Youtube,
    hoverIcon: YoutubeHover,
    link: ''
  }
]

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

export const LandingPageHeader = (props: Props) => {
  return (
    <HeaderWrapper type='landingPage'>
      <div className='h-[150px] shadow-lg flex rounded-b-10 overflow-hidden'>
        <LandingPageHeaderLogo />
        <div className='flex flex-1 flex-col'>
          <TopSocialNav className='sm:hidden xl:flex' />
          <MainNav />
        </div>
      </div>
    </HeaderWrapper>
  )
}

const TopSocialNav = ({
  className
}: {
  className?: HTMLAttributes<HTMLDivElement>['className']
}) => {
  return (
    <div
      className={cn(
        'flex__center bg-themePrimary [&_*]:whitespace-normal sm:whitespace-nowrap text-white h-[50px] px-[30px]',
        className
      )}
    >
      <div className='flex__center gap-[30px] mr-auto'>
        {contacts.map(contact => (
          <a
            className='flex flex-row items-center gap-[10px]'
            key={contact.label}
            target='_blank'
            href={contact.link || '#'}
          >
            <Image
              className='h-9 w-9 aspect-square'
              src={contact.icon}
              alt={contact.label}
              width={36}
              height={36}
            />
            <p>
              <span>{contact.label}</span>: &nbsp;
              <span>{contact.value}</span>
            </p>
          </a>
        ))}
      </div>
      <div className='flex__center gap-[20px] ml-auto'>
        <div className='w-[1px] h-6 bg-white' />
        <span>Follow Us On:</span>
        {socialLinks.map((socialLink, idx) => (
          <SocialIcon key={idx} {...socialLink} />
        ))}
      </div>
    </div>
  )
}

const SocialIcon = ({ icon, hoverIcon, link }: SocialIconType) => {
  return (
    <a
      href={link ?? '#'}
      target={link != null ? '_blank' : '_self'}
      className='[&_.activeImage]:block [&_.hoverImage]:hidden [&:hover_.activeImage]:hidden [&:hover_.hoverImage]:block'
    >
      <Image
        className='h-[14px] w-[14px] aspect-square activeImage'
        src={icon}
        alt='social media icon'
        width={14}
        height={14}
      />
      <Image
        className='h-[14px] w-[14px] aspect-square hoverImage'
        src={hoverIcon}
        alt='social media icon'
        width={14}
        height={14}
      />
    </a>
  )
}

const MainNav = () => {
  const headersList = headers()
  let path = headersList.get('x-invoke-path') || ''
  path = '/' + path

  const orderCount = 19

  const parsedOrderCount = toMaxNumber(orderCount, 9)

  return (
    <nav className='flex__center px-[30px] flex-1'>
      <ul className='flex gap-10 mr-auto text-titleColor'>
        {NavList.map((nav, idx) => (
          <li
            key={idx}
            className={cn(`hover:text-themeTertiary`, path === nav.link && 'text-themePrimary')}
          >
            <Link href={nav.link}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      <div className='flex__center flex-row gap-[30px]'>
        <div className='flex gap-[10px]'>
          <Button className='flex__center p-0 h-14 w-14' variant='circularOutline'>
            <Image src={Search} alt='search' height={20} width={20} />
          </Button>
          <Button className='flex__center relative p-0 h-14 w-14' variant='circularOutline'>
            <span className='absolute flex__center bg-themePrimary h-5 w-5 aspect-square rounded-full top-1 right-1 text-white text-xs'>
              {parsedOrderCount}
            </span>
            <Image src={Cart} alt='cart' height={20} width={20} />
          </Button>
        </div>
        <Button className='uppercase rounded-[10rem] text-sm h-14 w-[200px]' variant='secondary'>
          Appointment now
        </Button>
        <Button className='flex__center p-0 h-14 w-14' variant='circularOutline'>
          <Image src={Hamburger} alt='hamberger menu' height={20} width={20} />
        </Button>
      </div>
    </nav>
  )
}
