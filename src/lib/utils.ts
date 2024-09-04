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
