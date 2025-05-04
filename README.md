# FAQ Section Project

A modern web application built with Astro, Sanity CMS, and Turborepo. This project provides a structured monorepo setup for developing and managing FAQ content with a headless CMS approach.

## 📋 Project Overview

This project uses:
- **Astro** for the frontend application
- **Sanity** for content management
- **Bun** as the package manager (v1.1.26+)

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) v1.1.26 or newer
- [Node.js](https://nodejs.org/) v18 or newer
- A [Sanity](https://www.sanity.io/) account

### Project Structure

```
faq-section/
├── apps/
│   ├── astro/    # Frontend Astro application
│   └── sanity/   # Sanity Studio for content management
├── package.json  # Root package with workspace configuration
└── turbo.json    # Turborepo configuration
```

## 🛠️ Setup Instructions

### 1. Clone & Install Dependencies

```sh
# Clone the repository (if you haven't already)
git clone <repository-url>
cd faq-section

# Install all dependencies
bun install
```

### 2. Configure Environment Variables

Create `.env` files in both app directories:

**For apps/astro/.env:**

```env
# Sanity Configuration
SANITY_API_TOKEN=your_sanity_api_token_here
SANITY_PROJECT_ID=your_sanity_project_id_here
```

**For apps/sanity/.env:**

```env
# Preview Configuration
SANITY_STUDIO_PREVIEW_DOMAIN=http://localhost:4321
SANITY_PROJECT_ID=your_sanity_project_id_here
```

### 3. Sanity Studio Setup

1. Create a Sanity project at [sanity.io/manage](https://www.sanity.io/manage) if you don't have one
2. Get your Project ID from the Sanity dashboard
3. Generate an API token with read and write permissions
4. Create a Sanity Studio user to access the admin panel

### 4. Configure Project Constants

Update the following files with your project-specific information:

- `apps/sanity/constants.ts` - Sanity project configuration
- `apps/astro/src/global/constants.ts` - Frontend configuration

### 5. Generate Sanity Types (Optional)

To generate TypeScript types for your Sanity schema:

```sh
bun run sanity:gen
```

## 🖥️ Development

### Start Development Environment

Run both Astro and Sanity apps in development mode:

```sh
bun run apps:dev
```

This will start:
- Astro frontend at [http://localhost:4321](http://localhost:4321)
- Sanity Studio at [http://localhost:3333](http://localhost:3333)

### Individual App Development

To run apps individually:

```sh
# For Astro frontend only
cd apps/astro && bun run dev

# For Sanity Studio only
cd apps/sanity && bun run dev
```

## 🏗️ Building for Production

Build all applications:

```sh
bun run build
```

## 📚 Available Scripts

- `bun run dev` - Start all apps in development mode
- `bun run build` - Build all apps for production
- `bun run lint` - Lint all apps
- `bun run format` - Format code with Prettier
- `bun run sanity:extract` - Extract Sanity schema
- `bun run sanity:gen` - Generate TypeScript types for Sanity schema
- `bun run apps:dev` - Run Astro and Sanity concurrently

## 👥 Authors & Credits

Based on [Astro + Sanity + Turborepo Starter](https://github.com/milewskibogumil/astro-sanity-turborepo-starter) by [@milewskibogumil](https://github.com/milewskibogumil)
