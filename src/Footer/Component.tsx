import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { BlockWrapperContent, BlockWrapper } from '@/components/block-wrapper'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer>
      <div className="container">
        <BlockWrapperContent>
          <div className="flex flex-col md:flex-row md:justify-between">
            <Link href="/">
              <Logo />
            </Link>

            <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
              <ThemeSelector />
              <nav className="flex flex-col md:flex-row gap-4">
                {navItems.map(({ link }, i) => {
                  return <CMSLink className="text-white" key={i} {...link} />
                })}
              </nav>
            </div>
          </div>
        </BlockWrapperContent>
      </div>
    </footer>
  )
}
