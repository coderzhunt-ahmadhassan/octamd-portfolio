import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

type Props = {
  position: 'top left' | 'top right' | 'bottom left' | 'bottom right'
  image: StaticImport
  alt: string
}

export const BackgroundCornerImage = ({ position = 'top left', image, alt }: Props) => {
  return (
    <Image
      className={twMerge(
        'absolute -z-[1] pointer-events-none h-1/2 w-auto',
        position === 'top left' && 'top-0 left-0',
        position === 'top right' && 'top-0 right-0',
        position === 'bottom left' && 'bottom-0 left-0',
        position === 'bottom right' && 'bottom-0 right-0'
      )}
      src={image}
      alt={alt}
      height={1030}
      width={683}
    />
  )
}
