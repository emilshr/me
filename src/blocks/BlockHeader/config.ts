import { Block } from 'payload'

export const BlockHeader: Block = {
  slug: 'block-header',
  interfaceName: 'BlockHeader',
  fields: [
    {
      name: 'header',
      type: 'text',
      label: 'Header',
      required: true,
    },
  ],
}
