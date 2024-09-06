import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center [&_*]:pointer-events-none whitespace-normal sm:whitespace-nowrap subtitle1 transition-all focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 active:translate-y-1 shadow-xl active:shadow-none',
  {
    variants: {
      variant: {
        primary:
          'bg-themePrimary text-white shadow hover:bg-themePrimary/80 border border-themePrimary',
        secondary:
          'bg-themeSecondary text-white shadow hover:bg-themeSecondary/80 border border-themeSecondary',
        tertiary:
          'bg-themeTertiary text-white shadow hover:bg-themeTertiary/80 border border-themeTertiary',
        circularOutline:
          'bg-white border border-outline text-titleColor uppercase rounded-full aspect-square',
        dark: 'bg-titleColor text-white shadow hover:bg-titleColor/80 border border-titleColor',
        outline: 'bg-white text-white shadow hover:bg-white/80 border border-outline',
        dot: 'bg-[#D8DDE1] [&.active]:bg-themePrimary rounded-[100%] h-3 w-3 aspect-square [&.active]:ring-1 [&.active]:ring-offset-4 [&.active]:ring-themePrimary',
        link: 'bg-themePrimary text-white shadow hover:bg-themePrimary/80 border-none underline underline-offset-2'
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
