# FAQ Section Project

This is a monorepo project with Astro and Sanity, made just for my personal use.

## Project Structure

```
faq-section/
├── apps/
│   ├── astro/        # Frontend Astro application
│   │   └── src/
│   │       └── global/
│   │           └── constants.ts  # Global constants configuration
│   └── sanity/       # Sanity CMS backend
├── packages/         # Shared packages
└── ...
```

## Getting Started

### 1. Install Dependencies

Make sure you have [bun](https://bun.sh/) installed (version 1.1.26 or newer recommended).

```sh
bun install
```

This will install all dependencies for the monorepo and its apps.

### 2. Configure Sanity Project ID

You need to update the Sanity project ID in the following files:

1. **`apps/astro/src/global/constants.ts`** (line 13):
   ```typescript
   defaultValue = '', // Replace with your Sanity project ID
   ```

2. **`apps/sanity/constans.ts`** (line 6):
   ```typescript
   defaultValue = '', // Replace with your Sanity project ID
   ```

You can create a new Sanity project by running:
```sh
cd apps/sanity
bun sanity init
```

### 3. Set Up Environment Variables

Create a `.env` file in the relevant app directories:

#### For Astro (`apps/astro/.env`):

```env
# Required for Sanity API access
SANITY_API_TOKEN=your_sanity_api_token_here

# Sanity Project ID (overrides the defaultValue in constants.ts)
SANITY_PROJECT_ID=your_project_id_here
```

#### For Sanity (`apps/sanity/.env`):

```env
# Your Sanity project ID (same as in config files)
SANITY_PROJECT_ID=your_project_id_here
```

- **SANITY_API_TOKEN**: Generate this token from your Sanity project settings under API section.
- **SANITY_PROJECT_ID**: Your Sanity project ID that will override the default value in constants.ts.

### 4. Development

To run both Astro and Sanity apps in development mode concurrently:

```sh
bun run apps:dev
```

This will start:
- Astro frontend at: http://localhost:5173
- Sanity Studio at: http://localhost:3333

## Authors

Based on [Astro + Sanity + Turborepo Starter](https://github.com/milewskibogumil/astro-sanity-turborepo-starter) by [@milewskibogumil](https://github.com/milewskibogumil)
