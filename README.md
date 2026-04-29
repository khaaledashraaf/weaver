# Weaver Design System

Weaver is a custom design system maintained in Figma, shipped as a [Joy UI](https://mui.com/joy-ui/getting-started/) theme package. Wrap your app with `<WeaverProvider>` and all Joy UI components will match the Weaver designs out of the box.

## Installation

The package is published as a tarball to Google Cloud Storage on every build (see `cloudbuild.yaml`). Add it to your `package.json` dependencies using the versioned URL:

```json
{
  "dependencies": {
    "weaver-ui-joyui": "https://storage.googleapis.com/noon-toolbox/perm/weaver/weaver-ui-joyui-0.1.9.tgz"
  }
}
```

Then run `npm install`. Bump the version in the URL to pick up a new release.

### Versions

Each published tarball is tied to the commit that bumped `packages/joyui/package.json`.

| Version | Notes |
|---|---|
| 0.1.9 | Current — (1) `Chip` rewritten to match the Figma Badge component (`165:5043`): full-pill radius (was 6/8px rounded-rect), two sizes — sm = 24px / `body-3xs` (11/500/14) / px-8 / gap-4 and lg = 28px / `body-2xs` (12/500/16) / px-10 / gap-4 (Joy `md` mapped to `lg` since Figma has only two sizes); three variants matching Figma's Light / Outline / Solid → Joy `soft` / `outlined` / `solid`; per-color token mapping — Joy `primary→blue`, `success→green`, `warning→amber`, `danger→red`, `neutral→slate` — drives `bg-accent-*-subtle` + `content-accent-*-default` (Light), `border-accent-*-subtle` + transparent bg (Outline), `bg-accent-*-default` + `content-on-color` (Solid). Plain variant left to Joy default. (2) New `JoyChipDelete` override: transparent bg, no hover fill, color inherits from chip — matches Figma where the close button is just an icon, not a filled circle. (3) `WeaverDatePicker` trigger hover now matches `<Button variant="secondary">` — bg shifts to `interactive-outlined-hover` alongside the existing border darken, plus a new active state with `interactive-outlined-pressed`. (4) `ButtonGroup` root bg changed from `interactive-secondary-default` (slate-50, off-white) to `interactive-input-default` (true white via `base-white`) so it sits flush next to a `secondary` `Button` in the same row. (5) Token cleanup sweep across 14 component files plus `date-picker.tsx`: every hardcoded spacing/radius/typography literal replaced with the equivalent token reference (`tokens.spacing.*`, `tokens.radius.*`, `font[level].fontSize/lineHeight`). New internal `font` export from `typography.ts` exposes typography metrics (fontSize/lineHeight/fontWeight) without the color field, so component overrides can pull type-level metrics without dragging the inherited Joy palette color along. No visual changes — all swaps are value-preserving (e.g. `1.5rem` → `font["body-md"].lineHeight` = `24px`, identical at default 16px root). (6) Docs Chip page rewritten with Light/Outline/Solid variants demo, sm + lg sizes demo, and updated terminology ("Chips (Badges/Tags in Figma)"). |
| 0.1.8 | (1) `Select`: `--Select-decoratorColor` now resolves to `{alias.content-subtle}` so `startDecorator` / `endDecorator` icons render at `#4E596E` (Figma `content/subtle`) instead of Joy's washed-out default. (2) `Table` override aligned to Figma: header bg now reads `{alias.interactive-table-header}` (was hardcoded `rgba(88,123,140,0.07)`); hover bg driven by `--TableRow-hoverBackground = {alias.interactive-ghost-hover}` (Joy-idiomatic, fixes specificity race vs. Joy's own `hoverRow` rule); broken `--TableRow-hoverBackground` with the wrong alpha removed; header `height: 44` → `minHeight: 44`; body `td` now sets `color: {alias.content-default}` explicitly; per-size row heights — sm/md = 48px and lg = 56px to match Figma "Table item" spec. **Outer border + radius + overflow-hidden removed** — the table renders flush per Figma; consumers wrap in `<Sheet variant="outlined">` for a card frame (breaking visual change for consumers that relied on the old card framing). Last-row bottom-border now `none !important` so it doesn't reappear on hover/selected. (3) Spec `packages/specs/src/table.json` synced to Figma — `headerBg` → `interactive-table-header`, `headerText` → `content-subtle`, selected `rowBg` corrected to `interactive-ghost-hover` (was wrongly `bg-brand-subtle`), row sizes restated as sm = 48 / lg = 56. (4) Docs Tables page: updated intro copy, new Sizes / Selected Row / Flush (no card) demos. |
| 0.1.7 | AI-readiness layer restructured. (1) New canonical `RULES.md` at the package root containing the Figma-to-code rules (component mappings, 10-variant button matrix, color mappings, 8 mandatory rules) — updates with every release. (2) New bundled `llms.txt` design system catalog (themed components list, typography levels, icons, custom components, MVP limitations). (3) The `weaver-figma` Claude Code skill is now a thin **pointer** that reads `RULES.md` + `llms.txt` from `node_modules/weaver-ui-joyui/` at runtime, so engineers no longer need to re-copy the skill on rule changes — only when the skill's trigger description itself changes. (4) Removed legacy `packages/joyui/FIGMA_RULES.md` (was a stale duplicate of the skill content, missing 4 button variants and 2 mandatory rules). (5) Slimmed `packages/joyui/CLAUDE.md` to a thin pointer to `RULES.md` + `llms.txt`. (6) Rewrote the docs app's "AI-Assisted Figma-to-Code" section and this README's section to teach the new architecture, including a path for non–Claude-Code agents (Cursor / Windsurf / ChatGPT). (7) Tarball no longer ships `README.md` (was unused dead weight; `RULES.md` + `llms.txt` cover the consumer-facing AI surface). (8) Typography count corrected from 18 to 14 (7 body + 4 heading + 3 title) |
| 0.1.6 | Dummy version for testing new cloud build |
| 0.1.5 | (1) `WeaverDatePicker`: new `calendarPos` prop controlling popover placement (`top-left` / `top-center` / `top-right` / `bottom-left` / `bottom-center` / `bottom-right`, defaults to `bottom-center`); new `todayLabel?: string` prop that swaps the formatted trigger date for a literal label (e.g. `"Today"`) when the selected value matches today's date; day-cell hover now uses `bg-brand-subtle` (was neutral-ghost) and a new active/press state flips to `bg-brand-default` with inverse text. (2) `Input`: `startDecorator` / `endDecorator` child `svg` icons are now forced to 20×20 via slot overrides, so consumers no longer need `size={20}` on every decorator icon. (3) Button / IconButton: new custom `secondary` variant added via module augmentation (white fill + border + component shadow — matches the Figma Secondary style that couldn't be expressed by `variant + color` alone); `soft + neutral` bg realigned to `interactive-soft-default` (slate-alpha-100) to match Figma Soft; `outlined + neutral` reverted to the Joy default (transparent + border, no shadow) so it matches Figma Outline distinctly from Secondary. (4) Palette: exposed `bg-neutral-soft` alias (translucent `slate-alpha-200` / `#587B8C21`) as `neutral.softAlphaBg` via `PaletteNeutralOverrides` augmentation, so consumers can reference it from `sx={{ bgcolor: 'neutral.softAlphaBg' }}` or `var(--joy-palette-neutral-softAlphaBg)` instead of inlining raw rgba/hex. (5) `weaver-figma` skill: rewrote the Button Variants table with all 10 Figma styles, corrected the Soft mapping (`soft + neutral`, not `soft + primary`), added `secondary` as its own variant with no color prop, and documented Outline / Dashed / White as stylistic variations |
| 0.1.4 | Infra verification release (dummy version bump from the cloudbuild branch-aware GCS publish guard). No user-facing changes |
| 0.1.3 | Added `WeaverDatePicker` / `WeaverCalendar` (custom component matching the Figma Calendar / Date Picker spec). Single or range mode via the `mode` prop, xs/sm/md sizes matching Weaver Input/Button, explicit placeholder/hover/focused/filled/disabled states, native date math with no new deps, month/year picker view, min/max bounds, today dot marker, range Left/Middle/Right cell styling |
| 0.1.2 | Published to GCS via `cloudbuild.yaml` |
| 0.1.1 | Replaced the Figma MCP hook with the `weaver-figma` Claude Code skill |
| 0.1.0 | Initial release — Joy UI theme, 40+ component overrides, `CLAUDE.md` for AI context |

## Usage

Wrap your app root with `WeaverProvider`:

```tsx
import { WeaverProvider } from "weaver-ui-joyui";

export default function App({ children }) {
  return <WeaverProvider>{children}</WeaverProvider>;
}
```

Then use Joy UI components as usual — they'll pick up Weaver's tokens, palette, typography, and component overrides automatically:

```tsx
import { Button, Input, Checkbox } from "@mui/joy";

function Example() {
  return (
    <>
      <Button variant="solid" color="primary">Save</Button>
      <Input placeholder="Enter your name" />
      <Checkbox label="I agree" />
    </>
  );
}
```

## AI-Assisted Figma-to-Code

Three files inside the installed package give any AI agent — Claude Code, Cursor, Windsurf, ChatGPT — accurate context for translating Figma designs into Weaver-compliant code:

- `node_modules/weaver-ui-joyui/RULES.md` — canonical Figma-to-code rules: component mappings (Tag→Chip, Toggle→Switch, …), button variant matrix (10 variants × 4 sizes), color mappings, icon conventions, and 8 mandatory rules. **Updates with every package version.**
- `node_modules/weaver-ui-joyui/llms.txt` — design system catalog: setup, full themed components list, typography levels, Remix Icon details, custom components (`WeaverPagination`, `WeaverDatePicker`, `WeaverCalendar`), MVP limitations.
- `node_modules/weaver-ui-joyui/.claude/skills/weaver-figma/SKILL.md` — a thin Claude Code trigger skill that points the agent at the two files above.

### Claude Code

Install the trigger skill once per consumer project:

```bash
cp -r node_modules/weaver-ui-joyui/.claude/skills/weaver-figma .claude/skills/weaver-figma
```

After that, mentioning Figma, sharing a Figma URL, or using the Figma MCP tools auto-loads the skill. Manual invocation: `/weaver-figma`.

Because the skill is a **pointer** (not a snapshot of the rules), bumping `weaver-ui-joyui` to a newer version is enough to pick up rule updates — no `cp -r` re-copy needed. The only time you'd re-copy is if the skill's trigger description itself changes, which is rare.

### Cursor / Windsurf / ChatGPT / other agents

Point your agent at `node_modules/weaver-ui-joyui/RULES.md` and `node_modules/weaver-ui-joyui/llms.txt` directly — for example by referencing them in your tool's project rules file (`.cursorrules`, `.windsurfrules`) or by pasting them into context at the start of a session.

## What's included

- **Design tokens** — colors, spacing, radius, and shadows from Figma
- **Palette** — primary, neutral, danger, success, and warning color schemes
- **Typography** — Inter font with 14 type levels (7 body, 4 heading, 3 title), all defaulting to `content-default` (`#101B2E`)
- **40+ component overrides** — buttons, inputs, selects, checkboxes, alerts, modals, and more
- **Custom components** — `WeaverPagination`, `WeaverDatePicker` / `WeaverCalendar` (single-date and range, native date math with no extra deps)
- **Icons** — uses [Remix Icon](https://remixicon.com) (not bundled, install separately)
- **AI-readiness layer** — `RULES.md` (canonical Figma-to-code rules), `llms.txt` (design system catalog), and a thin `weaver-figma` Claude Code trigger skill — all ship inside the package and update with every release

## Repo structure

```
packages/tokens/   — Design tokens extracted from Figma
packages/specs/    — Component spec JSON files
packages/joyui/    — Joy UI theme package (this is what you install)
apps/docs/         — Next.js docs app to preview components
```

## Development

```bash
npm install
cd packages/joyui && npx tsup    # build the theme package
cd apps/docs && npx next dev     # run the docs app
```
