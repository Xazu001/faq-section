/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly SANITY_API_TOKEN: string;
  readonly SANITY_PROJECT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
