import * as React from 'react'
import { ChevronLeftIcon, ChevronRightIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'
import { Button, ButtonProps, buttonVariants } from '@/components/ui'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role='navigation'
    aria-label='pagination'
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('flex flex-row items-center gap-[10px]', className)} {...props} />
  )
)
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn('', className)} {...props} />
)
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
  isActive?: boolean
} & ButtonProps

const PaginationLink = ({ className, isActive, children, ...props }: PaginationLinkProps) => (
  <Button
    className={cn(
      'text-titleColor h-14 w-14 aspect-square rounded-[10px] hover:text-white hover:bg-themePrimary/50 font-dm_sans font_16_400 border-none',
      isActive ? 'bg-themePrimary text-white' : 'bg-[#F5F7FA]',
      className
    )}
    {...props}
  >
    {children}
  </Button>
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label='Go to previous page'
    size='default'
    className={cn('gap-1', className)}
    {...props}
  >
    <FaArrowLeft className='h-4 text-themePrimary w-4' />
  </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label='Go to next page'
    size='default'
    className={cn('gap-1', className)}
    {...props}
  >
    <FaArrowRight className='h-4 text-themePrimary w-4' />
  </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <DotsHorizontalIcon className='h-4 w-4' />
    <span className='sr-only'>More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
}
