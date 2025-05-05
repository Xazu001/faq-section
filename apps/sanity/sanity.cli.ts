import { defineCliConfig } from 'sanity/cli'
import { getProjectId } from "./constants";

export default defineCliConfig({
  api: {
    projectId: getProjectId(),
    dataset: 'production'
  },
  studioHost: 'faq-section'
})
