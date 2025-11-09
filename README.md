# Xingke Frontend

A Next.js frontend-only application with server-rendered routes and SEO-friendly defaults.

## Getting Started

```bash
pnpm install
pnpm dev
```

Use your preferred package manager (`pnpm`, `npm`, or `yarn`), but be consistent per team conventions.

## Project Structure

```
app/                # App Router entrypoints, layouts, and metadata
components/         # Reusable, presentation-focused components
features/           # Domain-specific modules combining UI, hooks, services
hooks/              # Shared React hooks
context/            # Shared React context providers
lib/                # Utilities and framework helpers
services/           # Client-side data fetching and API wrappers
styles/             # Global styles and design tokens
public/             # Static assets served directly
tests/              # Unit, integration, or e2e tests
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in the values. Client-exposed variables must start with `NEXT_PUBLIC_`.

```
cp .env.local.example .env.local
```

## Scripts

- `pnpm dev` – start the development server on http://localhost:3000
- `pnpm build` – create a production build
- `pnpm start` – run the production server
- `pnpm lint` – run linting

## Tooling

- **ESLint** with Next.js defaults for linting
- **Tailwind CSS** for utility-first styling, configured in `tailwind.config.js`

Feel free to extend the tooling (tests, state management, design system) as the project grows.
