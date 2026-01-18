/** biome-ignore-all lint/suspicious/noExplicitAny: Unable to determine types */
import type {
  DefaultNodeTypes,
  DefaultTypedEditorState,
  SerializedBlockNode,
  SerializedLinkNode,
} from '@payloadcms/richtext-lexical'
import {
  RichText as ConvertRichText,
  type JSXConvertersFunction,
  LinkJSXConverter,
} from '@payloadcms/richtext-lexical/react'
import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { CodeBlock, type CodeBlockProps } from '@/blocks/Code/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import type {
  BannerBlock as BannerBlockProps,
  CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
} from '@/payload-types'
import { cn } from '@/utilities/ui'

// Utility to sanitize rich text content and prevent nested block elements
const sanitizeRichText = (data: DefaultTypedEditorState): DefaultTypedEditorState => {
  if (!data?.root?.children) return data

  const processChildren = (children: any[]): any[] => {
    const result: any[] = []

    for (const child of children) {
      if (child.type === 'paragraph' && child.children) {
        // Check if this paragraph contains other block elements
        const hasNestedBlocks = child.children.some(
          (nestedChild: any) =>
            nestedChild.type === 'paragraph' ||
            nestedChild.type === 'heading' ||
            nestedChild.type === 'list' ||
            nestedChild.type === 'blockquote',
        )

        if (hasNestedBlocks) {
          // Split nested blocks into separate top-level elements
          const flattened: any[] = []

          for (const nestedChild of child.children) {
            if (
              nestedChild.type === 'paragraph' ||
              nestedChild.type === 'heading' ||
              nestedChild.type === 'list' ||
              nestedChild.type === 'blockquote'
            ) {
              // If we have content before this block, add it as a paragraph first
              if (flattened.length > 0) {
                result.push({
                  type: 'paragraph',
                  children: flattened.splice(0), // Move accumulated content to a new paragraph
                  format: '',
                  indent: 0,
                  textFormat: 0,
                  version: 1,
                })
              }
              // Add the block element at root level
              result.push(nestedChild)
            } else {
              // Accumulate inline content
              flattened.push(nestedChild)
            }
          }

          // Add any remaining accumulated content as a paragraph
          if (flattened.length > 0) {
            result.push({
              type: 'paragraph',
              children: flattened,
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            })
          }
        } else {
          // No nested blocks, process children normally
          result.push({
            ...child,
            children: processChildren(child.children),
          })
        }
      } else if (child.children) {
        result.push({
          ...child,
          children: processChildren(child.children),
        })
      } else {
        result.push(child)
      }
    }

    return result
  }

  return {
    ...data,
    root: {
      ...data.root,
      children: processChildren(data.root.children),
    },
  }
}

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps>

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  return relationTo === 'posts' ? `/posts/${slug}` : `/${slug}`
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    banner: ({ node }) => <BannerBlock className='col-start-2 mb-4' {...node.fields} />,
    mediaBlock: ({ node }) => (
      <MediaBlock
        className='col-start-1 col-span-3'
        imgClassName='m-0'
        {...node.fields}
        captionClassName='mx-auto max-w-3xl'
        enableGutter={false}
        disableInnerContainer={true}
      />
    ),
    code: ({ node }) => <CodeBlock className='col-start-2' {...node.fields} />,
    cta: ({ node }) => <CallToActionBlock {...node.fields} />,
  },
})

type Props = {
  data: DefaultTypedEditorState
  enableGutter?: boolean
  enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, data, ...rest } = props

  // Sanitize the rich text data to prevent nested block elements
  const sanitizedData = sanitizeRichText(data)

  return (
    <ConvertRichText
      converters={jsxConverters}
      className={cn(
        'payload-richtext',
        {
          container: enableGutter,
          'max-w-none': !enableGutter,
          'mx-auto prose md:prose-md dark:prose-invert prose-p:my-2': enableProse,
        },
        className,
      )}
      data={sanitizedData}
      {...rest}
    />
  )
}
