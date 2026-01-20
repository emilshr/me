import React from 'react'
import { formatDateTime } from 'src/utilities/formatDateTime'
import { Media } from '@/components/Media'
import type { Post } from '@/payload-types'
import { formatAuthors } from '@/utilities/formatAuthors'
import { BlockWrapper, BlockWrapperContent } from '@/components/block-wrapper'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <BlockWrapper>
      <BlockWrapperContent>
        <div className='relative flex items-end w-full'>
          <div className='z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-white'>
            <div className='col-start-1 col-span-1 md:col-start-2 md:col-span-2'>
              <div className='uppercase text-sm mb-6'>
                {categories?.map((category, index) => {
                  if (typeof category === 'object' && category !== null) {
                    const { title: categoryTitle } = category

                    const titleToUse = categoryTitle || 'Untitled category'

                    const isLast = index === categories.length - 1

                    return (
                      <React.Fragment key={index.toString()}>
                        {titleToUse}
                        {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                      </React.Fragment>
                    )
                  }
                  return null
                })}
              </div>

              <h1 className='mb-6 text-3xl md:text-5xl lg:text-6xl'>{title}</h1>

              <div className='flex flex-col md:flex-row gap-4 md:gap-16'>
                {hasAuthors && (
                  <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                      <p className='text-sm'>Author</p>

                      <p>{formatAuthors(populatedAuthors)}</p>
                    </div>
                  </div>
                )}
                {publishedAt && (
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm'>Date Published</p>

                    <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </BlockWrapperContent>
    </BlockWrapper>
  )
}
