'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type React from 'react'
import { useEffect, useState } from 'react'
import { Logo } from '@/components/Logo/Logo'

import type { Header } from '@/payload-types'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { HeaderNav } from './Nav'
import { ThemeToggle } from './Nav/ThemeToggle'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const _pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setHeaderTheme])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme, theme])

  return (
    <header className='relative z-20' {...(theme ? { 'data-theme': theme } : {})}>
      <div className='flex justify-between'>
        <div className='flex items-center gap-1'>
          <Link href='/'>
            <Logo />
          </Link>
          <ThemeToggle />
        </div>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
