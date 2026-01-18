import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'

import { BlockWrapperContent, BlockWrapper } from '@/components/block-wrapper'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()

  return (
    <BlockWrapper>
      <BlockWrapperContent>
        <HeaderClient data={headerData} />
      </BlockWrapperContent>
    </BlockWrapper>
  )
}
