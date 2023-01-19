import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {aprimoPlugin} from 'sanity-plugin-aprimo'
import { cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary'

export default defineConfig({
  name: 'default',
  title: 'V3 Aprimo Test Studio',

  projectId: '4zytiygt',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    aprimoPlugin({
      tenantName: 'partner1'
    }),
    cloudinarySchemaPlugin()

  ],

  schema: {
    types: schemaTypes,
  },
})
