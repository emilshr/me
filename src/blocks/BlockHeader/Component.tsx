import type React from 'react'
import type { BlockHeader as BlockHeaderProps } from '@/payload-types'

export const BlockHeader: React.FC<BlockHeaderProps> = ({ header }) => {
  return (
    <div className='container p-4 relative bg-[linear-gradient(to_bottom,theme(colors.block-border)_60%,transparent_0%),linear-gradient(to_bottom,theme(colors.block-border)_60%,transparent_0%)] bg-size-[1px_18px] bg-repeat-y bg-position-[0_0,100%_0]'>
      <div className='text-2xl font-bold'>{header}</div>
    </div>
  )
}
