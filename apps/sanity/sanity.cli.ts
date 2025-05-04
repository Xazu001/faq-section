import { defineCliConfig } from 'sanity/cli'
import { projectId } from './sanity.config'

// Change projectId here

export default defineCliConfig({
  api: {
    projectId: projectId(),
    dataset: 'production'
  },
  studioHost: 'faq-section'
})
