import Link from 'next/link'
import { BlockWrapper, BlockWrapperContent } from '@/components/block-wrapper'
import { FlickeringGrid } from '@/components/ui/flickering-grid'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import type { Footer as FooterType } from '@/payload-types'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { getCachedGlobal } from '@/utilities/getGlobals'

export async function Footer() {
  const footerData: FooterType = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <div className='flex flex-col'>
      <BlockWrapper>
        <BlockWrapperContent>
          <div className='flex flex-col md:flex-row md:justify-between'>
            <Link href='/'>
              <Logo />
            </Link>

            <div className='flex flex-col-reverse items-start md:flex-row gap-4 md:items-center'>
              <ThemeSelector />
              <nav className='flex flex-col md:flex-row gap-4'>
                {navItems.map(({ link }, i) => {
                  return <CMSLink className='text-white' key={i.toString()} {...link} />
                })}
              </nav>
            </div>
          </div>
        </BlockWrapperContent>
      </BlockWrapper>

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
    </div>
  )
}
