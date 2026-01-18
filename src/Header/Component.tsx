import { BlockWrapper, BlockWrapperContent } from '@/components/block-wrapper'
import { FlickeringGrid } from '@/components/ui/flickering-grid'

import type { Header as HeaderType } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { HeaderClient } from './Component.client'

export async function Header() {
  const headerData: HeaderType = await getCachedGlobal('header', 1)()

  return (
    <div className='flex flex-col'>
      <BlockWrapper>
        <BlockWrapperContent>
          <div className='max-h-50'>
            <FlickeringGrid
              className='absolute inset-0 z-0 size-full'
              squareSize={4}
              gridGap={6}
              color='#6B7280'
              maxOpacity={0.5}
              flickerChance={0.1}
            />
          </div>
        </BlockWrapperContent>
      </BlockWrapper>

      <BlockWrapper>
        <BlockWrapperContent>
          <HeaderClient data={headerData} />
        </BlockWrapperContent>
      </BlockWrapper>
    </div>
  )
}
