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
          <div className='sm:h-40 h-20 overflow-hidden'>
            <FlickeringGrid
              className='size-full inset-0 h-full'
              squareSize={4}
              gridGap={4}
              color='#6B7280'
              maxOpacity={0.8}
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
