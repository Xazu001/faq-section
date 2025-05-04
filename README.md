# FAQ Section Project

This is a monorepo project using Turborepo with Astro and Sanity, designed to create and manage FAQ sections for websites.

## Project Structure

```
faq-section/
├── apps/
│   ├── astro/        # Frontend Astro application
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

1. **`apps/sanity/sanity.config.ts`** (line 12):
   ```typescript
   projectId: '', // Replace with your Sanity project ID
   ```

2. **`apps/sanity/sanity.cli.ts`** (line 6):
   ```typescript
   projectId: '', // Replace with your Sanity project ID
   ```

3. **`apps/astro/src/utils/sanity.fetch.ts`** (line 13):
   ```typescript
   projectId: '', // Replace with your Sanity project ID
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

# Domain for Sanity Studio preview
SANITY_STUDIO_PREVIEW_DOMAIN=http://localhost:4321
```

#### For Sanity (`apps/sanity/.env`):

```env
# Your Sanity project ID (same as in config files)
SANITY_STUDIO_PROJECT_ID=your_project_id_here

# Your Sanity dataset name
SANITY_STUDIO_DATASET=production
```

- **SANITY_API_TOKEN**: Generate this token from your Sanity project settings under API section.
- **SANITY_STUDIO_PREVIEW_DOMAIN**: This should point to your Astro app's domain for previewing content.

### 4. Sanity Studio Setup

1. Create a Sanity Studio user to login to the studio
2. Fill in the required data in Sanity Studio to start the project

### 5. Development

To run both Astro and Sanity apps in development mode concurrently:

```sh
bun run apps:dev
```

This will start:
- Astro frontend at: http://localhost:4321
- Sanity Studio at: http://localhost:3333

### 6. Building for Production

```sh
bun run build
```

## Troubleshooting

- If you encounter issues with Sanity Studio, ensure you've created a user and are logged in
- For API connection issues, verify your project ID is correctly set in all files and your API token is valid

---

## Authors

Based on [Astro + Sanity + Turborepo Starter](https://github.com/milewskibogumil/astro-sanity-turborepo-starter) by [@milewskibogumil](https://github.com/milewskibogumil)
