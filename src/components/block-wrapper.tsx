import type { PropsWithChildren } from 'react'

export const BlockWrapperContent = ({ children }: PropsWithChildren) => {
  return (
    <div className='container p-4 relative bg-[linear-gradient(to_bottom,theme(colors.block-border)_60%,transparent_0%),linear-gradient(to_bottom,theme(colors.block-border)_60%,transparent_0%)] bg-size-[1px_18px] bg-repeat-y bg-position-[0_0,100%_0]'>
      {children}
    </div>
  )
}

export const BlockWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className='relative bg-[linear-gradient(to_right,theme(colors.block-border)_60%,transparent_0%)] bg-size-[18px_1px] bg-repeat-x bg-position-[0_100%] flex flex-col w-full'>
      <div className='container'>{children}</div>
    </div>
  )
}
