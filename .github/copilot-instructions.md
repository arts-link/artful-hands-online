# Copilot Instructions for Artful Hands Online

## Project Architecture

This is a **Lovable-generated React + Vite + TypeScript** application showcasing artist portfolios. Built with **shadcn/ui**, **Tailwind CSS**, and **Radix UI** primitives.

### Core Stack
- **Build Tool**: Vite with React SWC plugin and development-only Lovable component tagger
- **Styling**: Tailwind CSS with HSL-based design system (see `src/index.css` for color variables)
- **UI Components**: shadcn/ui with custom variants (`warm`, `soft` buttons) and Radix UI primitives
- **State**: TanStack Query for server state, React hooks for local state
- **Routing**: React Router DOM (simple SPA structure)

### File Structure Patterns

```
src/
├── components/          # Feature components (Hero, Navigation, etc.)
│   └── ui/             # shadcn/ui components (button, card, etc.)
├── hooks/              # Custom React hooks (use-mobile, use-toast)
├── lib/                # Utilities (cn function for className merging)
└── pages/              # Route components (Index, NotFound)
```

## Development Workflows

### Local Development
```bash
npm run dev              # Start dev server on :8080
npm run build           # Production build
npm run build:dev       # Development build
npm run lint            # ESLint check
npm run preview         # Preview production build
```

### Lovable Integration
- Changes made via [Lovable Project](https://lovable.dev) auto-commit to this repo
- Local changes pushed to git reflect in Lovable
- The `componentTagger()` plugin only runs in development mode

## Project-Specific Conventions

### Component Patterns
- **Page Components**: Located in `src/pages/`, contain layout sections (see `Index.tsx`)
- **Feature Components**: Direct children of `src/components/` (Hero, Navigation, etc.)
- **UI Components**: In `src/components/ui/`, follow shadcn/ui patterns with CVA variants

### Styling Conventions
- **Design System**: HSL colors defined in `:root` of `src/index.css` (artistic palette theme)
- **Custom Button Variants**: `warm` (gradient primary), `soft` (card-style with border)
- **Typography**: `font-display` for headings, `font-body` for text (defined in Tailwind config)
- **Responsive**: Mobile-first with `md:` breakpoint at 768px (see `use-mobile` hook)

### State Management
- **Server State**: TanStack Query client configured in `App.tsx`
- **Responsive Logic**: Use `useIsMobile()` hook (768px breakpoint)
- **Toasts**: Dual setup with shadcn/ui Toaster and Sonner

## Key Integration Points

### Asset Handling
- Static assets in `public/` (robots.txt)
- Component assets imported directly (see Hero component's image import)
- Vite handles asset optimization and bundling

### Path Aliases
```typescript
"@/*" → "src/*"           # All imports use @ alias
```

### Custom Utilities
- `cn()` function in `lib/utils.ts` for className merging (clsx + tailwind-merge)
- Components.json configures shadcn/ui aliases and style preferences

## Adding New Features

### New UI Components
1. Use `npx shadcn-ui@latest add [component]` for new shadcn components
2. Custom variants go in the CVA config (see button.tsx example)
3. Import with `@/components/ui/[component]`

### New Pages
1. Create in `src/pages/`
2. Add route to `App.tsx` Routes (above the catch-all "*" route)
3. Follow the pattern of importing feature components

### New Sections
1. Create feature component in `src/components/`
2. Import and use in page component
3. Follow responsive patterns (container, padding, grid/flex layouts)

### Styling New Components
- Use CSS variables from the design system (`hsl(var(--primary))`)
- Leverage existing utility classes before creating new ones
- Maintain the artistic/warm aesthetic with gradients and soft shadows

## Common Gotchas

- **Route Order**: Custom routes MUST be above the `*` catch-all route in `App.tsx`
- **Mobile Hook**: `useIsMobile()` returns `undefined` on first render (SSR safety)
- **Asset Imports**: Use ES6 imports for assets, not public folder references
- **Lovable Compatibility**: Avoid complex build configurations that might break Lovable's auto-deployment