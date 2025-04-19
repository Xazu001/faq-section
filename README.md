# Project Setup Guide

This repository is a monorepo managed with [Turborepo](https://turbo.build/) and uses [Astro](https://astro.build/) and [Sanity](https://www.sanity.io/) as its main apps. The project uses [bun](https://bun.sh/) as the package manager and [concurrently](https://www.npmjs.com/package/concurrently) to run commands in parallel.

## Getting Started

### 1. Install Dependencies

Make sure you have [bun](https://bun.sh/) installed (version 1.1.26 or newer recommended).

```sh
bun install
```

This will install all dependencies for the monorepo and its apps.

### 2. Set Up Environment Variables

Create a `.env` file in the root of the repository (or in the relevant app directories) and set the following environment variables:

```env
# Required for Sanity API access
SANITY_API_TOKEN=your_sanity_api_token_here

# Domain for Sanity Studio preview (e.g., http://localhost:4321 or your deployed Astro domain)
SANITY_STUDIO_PREVIEW_DOMAIN=http://localhost:4321
```

- `SANITY_API_TOKEN`: You can generate this token from your Sanity project settings.
- `SANITY_STUDIO_PREVIEW_DOMAIN`: This should point to your Astro app's domain for previewing content.

### 3. Development

To run both Astro and Sanity apps in development mode concurrently:

```sh
bun run apps:dev
```

This will start both apps using concurrently.

---

## Authors

Based on [Astro + Sanity + Turborepo Starter](https://github.com/milewskibogumil/astro-sanity-turborepo-starter) by [@milewskibogumil](https://github.com/milewskibogumil)
