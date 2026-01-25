'use client'
import { CheckIcon } from '@payloadcms/ui/icons/Check'
import { CopyIcon } from '@payloadcms/ui/icons/Copy'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className='flex justify-end align-middle'>
      <Button
        className='cursor-pointer transition-all duration-200'
        variant={'secondary'}
        onClick={handleCopy}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </Button>
    </div>
  )
}
