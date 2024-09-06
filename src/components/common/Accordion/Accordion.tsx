import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui'
import { ReactNode } from 'react'

export interface AccordionItemType {
  value: string
  trigger: ReactNode
  content: ReactNode
}

interface Props {
  items: AccordionItemType[]
  className?: string
}

export function CustomAccordion({ items }: Props) {
  const accordionItems = items.map((accordion, idx) => {
    const { value, trigger, content } = accordion
    return (
      <AccordionItem className='bg-white rounded-[20px] w-full' key={value} value={value}>
        <AccordionTrigger className='w-full py-[30px] px-[30px] '>{trigger}</AccordionTrigger>
        <AccordionContent className='w-full pb-[30px] px-[30px]'>{content}</AccordionContent>
      </AccordionItem>
    )
  })
  return (
    <Accordion type='single' defaultValue='01' className='w-full flex flex-col gap-6'>
      {accordionItems}
    </Accordion>
  )
}
