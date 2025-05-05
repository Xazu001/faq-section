import { defineConfig } from 'sanity'
import { structure } from './structure'
import { schemaTypes, singletonActions, singletonTypes } from './structure/schema-types'
import { structureTool } from 'sanity/structure'
import { media } from 'sanity-plugin-media'
import { visionTool } from '@sanity/vision'
import { getProjectId } from "./constants";

export default defineConfig({
  name: 'default',
  title: 'FAQ Section',
  projectId: getProjectId(),
  dataset: 'production',
  plugins: [
    structureTool({ structure }),
    media(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
