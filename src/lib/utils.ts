import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toMaxNumber(num: number, limit: 9 | 99 | 999): string {
  if (num <= limit) return `${num}`
  else if (num > limit) return `${limit}+`
  else return ''
}

export const formatNumber: (number: number) => string = number =>
  Math.abs(number) < 10 ? (number >= 0 ? '0' : '-0') + Math.abs(number) : number.toString()

export const capitalize: (str: string) => string = str =>
  str
    .trim()
    .split(' ')
    .map(oldstr => oldstr[0].toUpperCase() + oldstr.slice(1).toLowerCase())
    .join(' ')
