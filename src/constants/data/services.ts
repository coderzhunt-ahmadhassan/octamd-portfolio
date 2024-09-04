import {
  CosmeticDentistry,
  OralSurgery,
  OrthodonticsService,
  PediatricDentistry,
  RootCanal
} from '@/assets'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type Services = {
  idx: number
  image: StaticImport
  title: string
  color: 'blueishGray' | 'brownishYellow' | 'white'
  content: {
    desc: string
    points: string[]
  }
}

export const services: Services[] = [
  {
    idx: 1,
    image: CosmeticDentistry,
    title: 'Cosmetic Dentistry',
    color: 'blueishGray',
    content: {
      desc: 'Based on the evaluation and examination, our medical team formulates a precise diagnosis and develops.',
      points: [
        'Many years of experience',
        '24/7 care for mother and baby',
        'Qualified team of professors',
        'Modern apparatus'
      ]
    }
  },
  {
    idx: 2,
    image: OrthodonticsService,
    title: 'Orthodontics Service',
    color: 'brownishYellow',
    content: {
      desc: 'Based on the evaluation and examination, our medical team formulates a precise diagnosis and develops.',
      points: [
        'Many years of experience',
        '24/7 care for mother and baby',
        'Qualified team of professors',
        'Modern apparatus'
      ]
    }
  },
  {
    idx: 3,
    image: OralSurgery,
    title: 'Oral Surgery',
    color: 'white',
    content: {
      desc: 'Based on the evaluation and examination, our medical team formulates a precise diagnosis and develops.',
      points: [
        'Many years of experience',
        '24/7 care for mother and baby',
        'Qualified team of professors',
        'Modern apparatus'
      ]
    }
  },
  {
    idx: 4,
    image: RootCanal,
    title: 'Root Canal Therapy',
    color: 'blueishGray',
    content: {
      desc: 'Based on the evaluation and examination, our medical team formulates a precise diagnosis and develops.',
      points: [
        'Many years of experience',
        '24/7 care for mother and baby',
        'Qualified team of professors',
        'Modern apparatus'
      ]
    }
  },
  {
    idx: 5,
    image: PediatricDentistry,
    title: 'Pediatric Dentistry',
    color: 'brownishYellow',
    content: {
      desc: 'Based on the evaluation and examination, our medical team formulates a precise diagnosis and develops.',
      points: [
        'Many years of experience',
        '24/7 care for mother and baby',
        'Qualified team of professors',
        'Modern apparatus'
      ]
    }
  }
]
