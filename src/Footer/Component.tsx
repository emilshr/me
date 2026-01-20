import Link from 'next/link'
import { BlockWrapperContent } from '@/components/block-wrapper'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import type { Footer as FooterType } from '@/payload-types'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { getCachedGlobal } from '@/utilities/getGlobals'

export async function Footer() {
  const footerData: FooterType = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer>
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
    </footer>
  )
}
