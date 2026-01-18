import type React from 'react'
import { BlockWrapper, BlockWrapperContent } from '@/components/block-wrapper'

import RichText from '@/components/RichText'
import type { Page } from '@/payload-types'

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
