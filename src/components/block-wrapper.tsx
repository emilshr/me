import type { PropsWithChildren } from 'react'
import { cn } from '@/utilities/ui'

interface BlockWrapperContentProps extends PropsWithChildren {
  className?: string
}

export const BlockWrapperContent = ({ children, className }: BlockWrapperContentProps) => {
  return (
    <div
      className={cn(
        'container p-4 relative',
        'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[linear-gradient(to_bottom,theme(colors.block-border)_60%,transparent_0%)] before:bg-[length:1px_18px] before:bg-repeat-y',
        'after:absolute after:right-0 after:top-0 after:bottom-0 after:w-px after:bg-[linear-gradient(to_bottom,theme(colors.block-border)_60%,transparent_0%)] after:bg-[length:1px_18px] after:bg-repeat-y',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const BlockWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className='relative px-2 sm:px-0 bg-[linear-gradient(to_right,theme(colors.block-border)_60%,transparent_0%)] bg-size-[18px_1px] bg-repeat-x bg-position-[0_100%] flex flex-col w-full'>
      {children}
    </div>
  )
}
