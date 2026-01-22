import Link from 'next/link'
import type React from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/utilities/ui'
import type { CardPostData } from '@/components/Card'

export type Props = {
  posts: CardPostData[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <div>
      {posts?.map((post, index) => {
        if (typeof post === 'object' && post !== null) {
          const { slug, title, meta } = post
          const { description } = meta || {}
          const sanitizedDescription = description?.replace(/\s/g, ' ')
          const href = `/posts/${slug}`
          const isLast = index === posts.length - 1

          return (
            <Link
              key={index.toString()}
              href={href}
              className={cn(
                'group relative block py-2 transition-all duration-200',
                !isLast &&
                  'after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-[linear-gradient(to_right,theme(colors.block-border)_60%,transparent_0%)] after:bg-size-[18px_1px] after:bg-repeat-x',
              )}
            >
              <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1 flex-1 min-w-0'>
                  {title && (
                    <h3 className='text-lg font-semibold group-hover:underline'>{title}</h3>
                  )}
                  {sanitizedDescription && (
                    <p className='text-sm text-muted-foreground line-clamp-2'>
                      {sanitizedDescription}
                    </p>
                  )}
                </div>
                <ChevronRight className='h-5 w-5 text-muted-foreground flex-shrink-0 ml-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110' />
              </div>
            </Link>
          )
        }

        return null
      })}
    </div>
  )
}
