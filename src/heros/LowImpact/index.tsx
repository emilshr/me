import React from 'react'

import type { Page } from '@/payload-types'

import RichText from '@/components/RichText'
import { BlockWrapperContent, BlockWrapper } from '@/components/block-wrapper'

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      richText?: never
    }
  | (Omit<Page['hero'], 'richText'> & {
      children?: never
      richText?: Page['hero']['richText']
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, richText }) => {
  return (
    <BlockWrapper>
      <BlockWrapperContent>
        {children || (richText && <RichText data={richText} enableGutter={false} />)}
      </BlockWrapperContent>
    </BlockWrapper>
  )
}
