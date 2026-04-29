# Weaver Design System

> AI agents: see [llms.txt](./llms.txt) for the canonical index of components, foundations, and rules.

## What is this project?

Weaver is a custom internal design system maintained in Figma. This repo implements it as an installable Joy UI theme package so engineers can wrap their app with `<WeaverProvider>` and have all Joy UI components match the Figma designs.

## Architecture

npm workspaces monorepo with 3 packages + 1 app:

```
packages/tokens/     — Design tokens extracted from Figma (tokens.json)
packages/specs/      — Component spec JSON files (25 components)
packages/joyui/      — Joy UI theme package (weaver-ui-joyui)
apps/docs/           — Next.js app to preview themed components
```

### Reference project

This follows the architecture of **banhatten-ds** (`github.com/khaaledashraaf/banhatten-ds`). When in doubt about patterns or conventions, reference that repo.

## Key files

- `packages/tokens/src/tokens.json` — Single source of truth for all design tokens (brand, alias, shadow, radius, spacing)
- `packages/joyui/src/tokens.ts` — Token import + `resolve("{group.key}")` function for alias resolution
- `packages/joyui/src/palette.ts` — Joy UI color scheme mapping (primary, neutral, danger, success, warning)
- `packages/joyui/src/typography.ts` — Typography config (Inter font, 11 levels)
- `packages/joyui/src/theme.ts` — Static `weaverTheme` export via `extendTheme()`
- `packages/joyui/src/provider.tsx` — `WeaverProvider` (CssVarsProvider + CssBaseline)
- `packages/joyui/src/components/` — Per-component styleOverrides (button, input, select, etc.)
- `packages/joyui/src/augmentations.ts` — TypeScript module augmentations for custom variants
- `packages/specs/src/*.json` — Component specs documenting variants, sizes, states, props, slots

## Current MVP scope

- **Theme:** Blue only (Figma has 4: Blue, Gray, Brown, Yellow)
- **Color mode:** Light only (Figma has Light + Dark)
- **Radius:** Default only (Figma has Default, Rounded, Sharp)
- **Font family:** Inter only (Figma has Inter, Geist, Mono, Alexandria)
- **RTL:** Skipped entirely
- **Icons:** Not bundled — uses Remix Icon (remixicon-react) as external dependency

## Figma file

- **File:** "Weaver Design system (Copy)" (fileKey: `YiS0OyrJAwxI1VRl9bTuDN`)
- **59 pages** covering 40+ UI components
- **675 variables** across 7 collections (base, Theme, Color mode, Numbers, Radius, Font Family, Highcharts Core)
- **Icon library:** Remix Icon (remixicon.com)
- The Icons page was deleted from Figma to keep exports clean

## Token structure

Follows a 2-tier system (like banhatten-ds):
- `brand` — Raw primitive colors (295 values: gray, slate, blue, red, green, amber, etc. with shades 50-950)
- `alias` — Semantic tokens referencing resolved values (223 values: bg-*, content-*, border-*, interactive-*)
- `shadow`, `radius`, `spacing` — Foundation tokens

Token references in specs use `{alias.token-name}`, `{brand.color-shade}`, `{radius.size}`, `{spacing.size}`, `{shadow.size}`.

## Commands

```bash
# Install dependencies
npm install

# Build the Joy UI theme package
cd packages/joyui && npx tsup

# Run the docs app
cd apps/docs && npx next dev

# Full build
npm run build
```

## Component overrides implemented

40+ Joy UI components overridden in `packages/joyui/src/components/`:
- button.ts (JoyButton, JoyIconButton)
- input.ts (JoyInput, JoyTextarea, JoyFormControl, JoyFormLabel, JoyFormHelperText)
- select.ts (JoySelect, JoyOption)
- checkbox.ts, radio.ts, switch.ts
- alert.ts, chip.ts, badge.ts, tooltip.ts
- progress.ts, slider.ts, divider.ts, avatar.ts
- surfaces.ts (JoyCard, JoyModal, JoyDrawer, JoySheet, JoyDialog*)
- accordion.ts
- misc.ts (JoyLink, JoyTabs, JoyTable, JoySkeleton, JoySnackbar, JoyList*, JoyBreadcrumbs)

## Future work

- Add Dark mode support (Color mode collection has Light + Dark)
- Add additional theme modes (Gray, Brown, Yellow)
- Add radius modes (Rounded, Sharp)
- Add font family switching (Geist, Mono, Alexandria)
- Convert static theme to `createWeaverTheme(options)` factory function
- Add CLI for auto-setup (`weaver-ui-joyui init`)
- Refine component overrides by comparing screenshots with Figma
- Add MUI adapter package (like banhatten-ds has)
