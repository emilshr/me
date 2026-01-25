'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

export function ProgressBarProvider() {
  return (
    <ProgressBar
      height="4px"
      color="hsl(var(--progress-bar))"
      options={{ showSpinner: false }}
      shallowRouting
    />
  )
}
