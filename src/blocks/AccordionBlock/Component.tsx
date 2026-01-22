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
import { Media } from '@/components/Media'

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
            {accordionItems?.map(
              ({
                title,
                id,
                value,
                content,
                icon,
                subTitle,
                topRightTitle,
                bottomRightSubTitle,
              }) => {
                return (
                  <AccordionItem key={id} value={value}>
                    <AccordionTrigger className='relative justify-start group'>
                      <div className='flex items-start gap-3 w-2/3'>
                        {icon && (
                          <Media
                            resource={icon}
                            className='w-6 h-6 flex-shrink-0 mt-0.5'
                            imgClassName='w-6 h-6 object-contain'
                          />
                        )}
                        <div className='flex flex-col items-start'>
                          <div className='font-semibold group-hover:underline'>{title}</div>
                          {subTitle && (
                            <div className='text-sm text-muted-foreground mt-1'>{subTitle}</div>
                          )}
                        </div>
                      </div>
                      <div className='flex flex-col items-end text-right text-sm text-muted-foreground ml-auto w-1/3 pr-4'>
                        {topRightTitle && <div className='mb-1'>{topRightTitle}</div>}
                        {bottomRightSubTitle && <div>{bottomRightSubTitle}</div>}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <RichText data={content} />
                    </AccordionContent>
                  </AccordionItem>
                )
              },
            )}
          </Accordion>
        </div>
      </BlockWrapperContent>
    </BlockWrapper>
  )
}
