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

### 2. Set Up Environment Variables and Sanity Project

This project uses a hardcoded Sanity project ID in constants files rather than environment variables. Here's what you need to configure:

#### Environment Variables

Create a `.env` file in the Astro app directory:

```env
# Required for Sanity API access (apps/astro/.env)
SANITY_API_TOKEN=your_sanity_api_token_here
```

- **SANITY_API_TOKEN**: Generate this token from your Sanity project settings under API section.

#### Constants Configuration

The project uses hardcoded constants for the Sanity project ID in both apps:

1. **Astro Constants** (`apps/astro/src/global/constants.ts`):
   ```typescript
   export const PROJECT_ID: string = "vp4m23g3";
   ```
   
   This constant is used in `apps/astro/src/utils/sanity.fetch.ts` to configure the Sanity client.

2. **Sanity Constants** (`apps/sanity/constants.ts`):
   ```typescript
   export const PROJECT_ID: string = "vp4m23g3";
   ```
   
   This constant is used in both `sanity.config.ts` and `sanity.cli.ts`.

> **NOTE**: If you want to use a different Sanity project, you must update the `PROJECT_ID` constant in both files to match your project ID.

### 3. Development

To run both Astro and Sanity apps in development mode concurrently:

```sh
bun run apps:dev
```

This will start:
- Astro frontend at: http://localhost:5173
- Sanity Studio at: http://localhost:3333

### 4. Sanity Schema Generation

After modifying fields in Sanity Studio, you need to regenerate the TypeScript types for the schema by running:

```sh
bun run sanity:gen
```

## Authors

Based on [Astro + Sanity + Turborepo Starter](https://github.com/milewskibogumil/astro-sanity-turborepo-starter) by [@milewskibogumil](https://github.com/milewskibogumil)
