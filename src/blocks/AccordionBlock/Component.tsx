import type { FC } from 'react'
import { BlockWrapper, BlockWrapperContent } from '@/components/block-wrapper'
import type { Accordion as AccordionBlockProps } from '@/payload-types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import RichText from '@/components/RichText'

export const AccordionBlock: FC<AccordionBlockProps> = ({
  accordionItems = [],
  collapsible,
  variant,
}) => {
  return (
    <BlockWrapper>
      <BlockWrapperContent className='!p-0'>
        <div className='px-4'>
          <Accordion type={variant} collapsible={!!collapsible}>
            {accordionItems?.map(({ title, id, value, content }) => {
              return (
                <AccordionItem key={id} value={value}>
                  <AccordionTrigger>{title}</AccordionTrigger>
                  <AccordionContent>
                    <RichText data={content} />
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </BlockWrapperContent>
    </BlockWrapper>
  )
}
