import type { StaticImageData } from 'next/image'
import type React from 'react'
import { BlockWrapper, BlockWrapperContent } from '@/components/block-wrapper'
import RichText from '@/components/RichText'

import type { MediaBlock as MediaBlockProps } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { Media } from '../../components/Media'

type Props = MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
  isInRichText?: boolean
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
    disableInnerContainer,
    isInRichText = false,
  } = props

  // biome-ignore lint/suspicious/noImplicitAnyLet: Cannot determine the type here
  let caption
  if (media && typeof media === 'object') caption = media.caption

  const content = (
    <div
      className={cn(
        '',
        {
          container: enableGutter && !isInRichText,
        },
        className,
      )}
    >
      {(media || staticImage) && (
        <Media
          imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
          resource={media}
          src={staticImage}
        />
      )}
      {caption && (
        <div
          className={cn(
            'mt-6',
            {
              container: !disableInnerContainer && !isInRichText,
            },
            captionClassName,
          )}
        >
          <RichText data={caption} enableGutter={false} />
        </div>
      )}
    </div>
  )

  // In rich text context, only apply top/bottom borders
  if (isInRichText) {
    return <BlockWrapper>{content}</BlockWrapper>
  }

  // In standalone block context, apply full wrapper with all borders
  return (
    <BlockWrapper>
      <BlockWrapperContent>{content}</BlockWrapperContent>
    </BlockWrapper>
  )
}
