# Gumon Gaming Hub - Antlia Landing

Next.js static site for the Gumon Gaming Hub / Antlia Minecraft Server public landing page.

## What This App Does

- Presents the Antlia Minecraft Server landing page.
- Shows Java and Bedrock join information.
- Links players into Discord for registration, rules, and updates.
- Displays a live Minecraft server status widget.
- Serves optimized social preview metadata and static image assets.
- Deploys as a static export to GitHub Pages.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Pages static export

## Project Layout

- `app/`: Next.js app route, metadata, layout, and global styles.
- `components/`: UI and interaction components.
- `lib/`: SEO constants, site URL helper, and gallery image metadata.
- `public/`: static logo, hero, gallery, Open Graph, sitemap, and robots assets.
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow.
- `env.template`: public environment variable template.

## Environment Variables

Copy `env.template` to `.env.local` for local development.

```sh
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_MC_HOST=
NEXT_PUBLIC_MC_JAVA_PORT=
NEXT_PUBLIC_MC_BEDROCK_PORT=
NEXT_PUBLIC_MC_TYPE=java
NEXT_PUBLIC_DISCORD_INVITE=
NEXT_PUBLIC_GA_ID=
```

Notes:

- All variables are `NEXT_PUBLIC_*`, so they are embedded into the client bundle.
- Do not put private secrets in this app.
- GitHub Pages deployment reads these values from the `github-pages` environment variables.

## Development

```sh
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```sh
npm run lint
npm run build
```

`next.config.ts` is configured with `output: "export"`, so production build output is written to `out/`.

## Deployment

Deployment is handled by GitHub Actions on pushes to `main`.

The workflow:

1. Installs dependencies with `npm ci`.
2. Builds the static export with GitHub environment variables.
3. Uploads `out/` as a GitHub Pages artifact.
4. Deploys to GitHub Pages.

## Workspace Relationship

This repository is used as the `gaming-hub/` submodule in `game-mc-antlia`.

When changing this project from the workspace:

1. Commit and push changes inside `gaming-hub/`.
2. Return to the workspace root.
3. Commit the updated `gaming-hub` submodule pointer.
