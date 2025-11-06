# Aesthetic Tile Website - Next.js

This is the modern, rebuilt version of the Aesthetic Tile website using Next.js 14 (App Router), React 18, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (via CSS import)
- **Forms:** React Hook Form + Zod validation
- **Form Backend:** Formspree
- **Data Layer:** Drizzle ORM (schema only, no live DB)
- **Package Manager:** pnpm
- **Linting:** ESLint 9 (flat config)
- **Formatting:** Prettier
- **Testing:** Vitest (unit tests) + Playwright (E2E tests)
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (install globally: `npm install -g pnpm`)

### Installation

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm typecheck    # Run TypeScript type checking
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
pnpm test         # Run unit tests with Vitest
pnpm e2e          # Run E2E tests with Playwright
```

## Project Structure

```
aesthetic-tile-website-next/
├── app/                          # Next.js App Router pages
│   ├── _components/              # Shared React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ContactForm.tsx
│   │   └── ...
│   ├── _hooks/                   # Custom React hooks
│   │   ├── useMobileMenu.ts
│   │   ├── useScrollShadow.ts
│   │   └── ...
│   ├── about/                    # About page
│   ├── blog/                     # Blog listing & posts
│   ├── contact/                  # Contact page
│   ├── gallery/                  # Gallery page
│   ├── services/                 # Services page
│   ├── [service-pages]/          # Individual service pages
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles + Tailwind
├── public/                       # Static assets (images, fonts, etc.)
├── src/db/                       # Drizzle ORM schema
├── e2e/                          # Playwright E2E tests
├── drizzle.config.ts             # Drizzle configuration
├── eslint.config.mjs             # ESLint 9 configuration
├── prettier.config.mjs           # Prettier configuration
├── postcss.config.mjs            # PostCSS + Tailwind configuration
├── next.config.ts                # Next.js configuration
├── vitest.config.ts              # Vitest configuration
└── package.json
```

## Key Features

### Typed Routes
Next.js typed routes are enabled for type-safe navigation.

### Form Handling
- React Hook Form for form state management
- Zod for schema validation
- Formspree for backend submission (no server required)

### Styling
- Tailwind CSS v4 with CSS import method
- Custom design system with consistent colors, typography, and spacing
- Responsive design for mobile, tablet, and desktop

### Testing
- **Unit Tests:** Vitest + React Testing Library
- **E2E Tests:** Playwright for critical user flows
- Run `pnpm test` for unit tests
- Run `pnpm e2e` for E2E tests

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy!

Every PR creates a preview deployment, and merges to `main` trigger production deployments.

### Manual Build

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## Environment Variables

No environment variables are required for basic functionality. The contact form submits directly to Formspree.

If you want to customize the Formspree endpoint, update the `action` URL in `app/_components/ContactForm.tsx`.

## Drizzle ORM

The project includes a Drizzle ORM schema (`src/db/schema.ts`) as a placeholder for future database integration. Currently, no live database is connected—forms submit directly to Formspree.

To add a database:
1. Install a database driver (e.g., `@neondatabase/serverless` for Neon)
2. Add `DATABASE_URL` to `.env.local`
3. Update `drizzle.config.ts` with connection details
4. Run migrations: `pnpm drizzle-kit push`

## Migration Notes

This is a complete rebuild of the original static HTML/CSS/JS site. Key improvements:

- ✅ Modern React components with TypeScript
- ✅ Tailwind CSS for maintainable styling
- ✅ Form validation with React Hook Form + Zod
- ✅ Automated testing (unit + E2E)
- ✅ Optimized images with Next.js Image component
- ✅ SEO-friendly with proper metadata
- ✅ Vercel deployment ready

## Contact

**Aesthetic Tile**  
1195 Greenley Ave, Groveland, FL 34736  
Phone: (502) 650-7014  
Email: office@aesthetictile.com  
Website: [www.aesthetictile-florida.com](https://www.aesthetictile-florida.com)

---

Built with ❤️ by [Growvia Marketing](https://www.growviamarketing.ai/)
