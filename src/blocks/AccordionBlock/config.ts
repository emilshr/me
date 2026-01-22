import type { Block } from 'payload'

export const Accordion: Block = {
  slug: 'accordion',
  interfaceName: 'Accordion',
  fields: [
    {
      name: 'collapsible',
      type: 'checkbox',
      label: 'Collapsible',
      defaultValue: true,
    },
    {
      name: 'variant',
      type: 'select',
      required: true,
      defaultValue: 'single',
      options: [
        {
          label: 'Single',
          value: 'single',
        },
        {
          label: 'Multiple',
          value: 'multiple',
        },
      ],
    },
    {
      name: 'accordionItems',
      type: 'array',
      label: 'Accordion items',
      fields: [
        {
          name: 'icon',
          type: 'upload',
          label: 'Icon',
          relationTo: 'media',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'subTitle',
          type: 'text',
          label: 'Sub title',
        },
        {
          name: 'topRightTitle',
          type: 'text',
          label: 'Top Right Title',
        },
        {
          name: 'bottomRightSubTitle',
          type: 'text',
          label: 'Bottom Right Sub Title',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Accordion content',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          label: 'Value',
          required: true,
        },
      ],
    },
  ],
}
