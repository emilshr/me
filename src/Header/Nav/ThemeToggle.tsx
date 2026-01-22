'use client'

import { Moon, Sun } from 'lucide-react'
import type React from 'react'
import { useEffect, useState } from 'react'
import { useTheme } from '@/providers/Theme'

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  if (!mounted) {
    return null // Avoid hydration mismatch
  }

  return (
    <button
      type='button'
      onClick={toggleTheme}
      className='relative overflow-hidden rounded-md p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer'
      aria-label='Toggle theme'
    >
      <div className='relative h-4 w-4'>
        <Sun className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${
          theme === 'dark'
            ? 'rotate-90 scale-0 opacity-0'
            : 'rotate-0 scale-100 opacity-100'
        }`} />
        <Moon className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${
          theme === 'dark'
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-0 opacity-0'
        }`} />
      </div>
    </button>
  )
}