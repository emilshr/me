import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { CollectionConfig } from 'payload'

export const Companies: CollectionConfig<'companies'> = {
  slug: 'companies',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'websiteUrl',
      type: 'relationship',
      relationTo: 'links',
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      label: 'Start date',
    },
    {
      name: 'isCurrentJob',
      type: 'checkbox',
      label: 'Is current job',
    },
    {
      name: 'endDate',
      type: 'date',
      required: false,
      label: 'End date',
    },
    {
      name: 'description',
      type: 'richText',
    },
  ],
}
