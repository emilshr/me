import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { CollectionConfig } from 'payload'

export const Links: CollectionConfig<'links'> = {
  slug: 'links',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'label',
  },
  labels: {
    plural: 'Links',
    singular: 'Link',
  },
  trash: true,
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'alternateLabel',
      type: 'text',
      required: false,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
  ],
}
