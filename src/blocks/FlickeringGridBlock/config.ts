import type { Block } from 'payload'

export const FlickeringGridBlock: Block = {
  slug: 'flickering-grid',
  interfaceName: 'FlickeringGrid',
  fields: [
    {
      name: 'squareSize',
      type: 'number',
      label: 'Square size',
      defaultValue: 4,
    },
    {
      name: 'gridCap',
      type: 'number',
      defaultValue: 6,
      label: 'Grid Cap',
    },
    {
      name: 'flickerChance',
      type: 'number',
      defaultValue: 0.3,
      label: 'Flicker change',
    },
    {
      name: 'width',
      type: 'number',
      label: 'Width',
    },
    {
      name: 'height',
      type: 'number',
      label: 'Height',
    },
    {
      name: 'maxOpacity',
      type: 'number',
      label: 'Maximum opacity',
      min: 0,
      max: 1,
    },
  ],
}
