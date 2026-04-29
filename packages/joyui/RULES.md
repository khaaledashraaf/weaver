# Weaver Design System — Figma-to-Code Rules

Canonical Figma-to-code rules for the Weaver Design System (`weaver-ui-joyui`). The `weaver-figma` Claude Code skill is a thin pointer to this file — these rules are loaded by reference whenever an agent translates a Figma design.

For the broader catalog (full themed components list, typography levels, icon details, custom components, limitations), read `node_modules/weaver-ui-joyui/llms.txt` alongside this file.

## Setup

All standard components come from `@mui/joy`. `WeaverProvider`, `WeaverPagination`, `WeaverDatePicker`, and `WeaverCalendar` come from `weaver-ui-joyui`.

```tsx
import { WeaverProvider } from "weaver-ui-joyui";

function App({ children }) {
  return <WeaverProvider>{children}</WeaverProvider>;
}
```

## Component Mapping

Figma names do NOT match Joy UI names. Use this table:

| Figma | Code |
|---|---|
| Tag | `<Chip variant="outlined">` |
| Badge (text pill) | `<Chip variant="soft">` — NEVER use `<Badge>` for text pills |
| Badge (dot/count overlay) | `<Badge>` |
| Toggle | `<Switch>` |
| Pagination | `<WeaverPagination>` (from `weaver-ui-joyui`) |
| Date Picker | `<WeaverDatePicker mode="single">` (from `weaver-ui-joyui`) |
| Date Range Picker | `<WeaverDatePicker mode="range">` (from `weaver-ui-joyui`) |
| Calendar (inline) | `<WeaverCalendar>` (from `weaver-ui-joyui`) — use when the calendar should always be visible |

## Button Variants

The Weaver Figma file (node `40003070:4879`) defines 10 button styles. `secondary` is a custom variant added via module augmentation — it does NOT take a `color` prop. `outlined + neutral` is the Outline variant (transparent bg + border + no shadow) and is visually different from `secondary`.

| Figma | `variant` | `color` | Notes |
|---|---|---|---|
| primary | `solid` | `primary` | — |
| secondary | `secondary` | — (no color prop) | White fill + border + component shadow |
| soft | `soft` | `neutral` | Slate-alpha fill + dark text |
| outline | `outlined` | `neutral` | Transparent bg + border (no shadow) |
| ghost | `plain` | `neutral` | — |
| ghost-primary | `plain` | `primary` | Transparent bg + blue text |
| danger | `solid` | `danger` | — |
| soft-danger | `soft` | `danger` | — |
| dashed | `outlined` | `neutral` | Stylistic override: `sx={{ borderStyle: "dashed", backgroundColor: "neutral.softBg" }}` |
| white | `plain` | `neutral` | Stylistic override: `sx={{ backgroundColor: "common.white" }}` |
| link | `link` | `primary` / `neutral` / `danger` | — |

Sizes: `xs` (32px), `sm` (36px), `md` (40px), `lg` (48px).

The same variant mapping applies to `IconButton`, including the custom `secondary` variant.

## Colors

| Figma | `color` prop |
|---|---|
| Green / Success | `success` |
| Red / Danger | `danger` |
| Amber / Warning | `warning` |
| Blue / Primary | `primary` |
| Gray / Neutral | `neutral` |

Chip variants: Figma's **Light** = `variant="soft"`, **Outline** = `variant="outlined"`, **Solid** = `variant="solid"`. Sizes: Figma's **sm** (24px) = `size="sm"`, **lg** (28px) = `size="lg"`. Joy's `md` is the default and renders at the lg spec since Figma only defines two sizes. Color → palette mapping: `primary→blue`, `success→green`, `warning→amber`, `danger→red`, `neutral→slate`.

## Icons

- Library: **Remix Icon** via `@remixicon/react`
- Import: `import { RiSearchLine } from "@remixicon/react"`
- Default size: 20px
- Pass as `startDecorator` / `endDecorator` props

## Typography

Use `<Typography level="...">` from `@mui/joy`. Font: Inter. Default text color: `content-default` (`#101B2E`).

Available levels and the full themed components list live in `node_modules/weaver-ui-joyui/llms.txt`.

## Mandatory Rules

1. **Linked component instance = props only.** Do NOT use `sx` on themed components. Use `variant`, `color`, `size` props.
2. **Detached/custom elements = `sx` is allowed.** Only use `sx` for layout, spacing, or custom visuals not covered by the theme.
3. **Text color is `#101B2E` (content-default), not `#000`.** Never override with black.
4. **No opacity for disabled states.** The theme uses explicit disabled tokens — do not add `opacity: 0.5` or similar.
5. **No focus ring on error inputs.** Error-state inputs in Figma have no focus ring — do not add one.
6. **No invented variants/colors/sizes.** Only implement what exists in the Figma design. Never add extra variants, colors, or sizes that are not specified.
7. **Always inspect the Figma node before implementing.** Use MCP tools to verify exact props, variants, and structure — do not guess from screenshots alone.
8. **Match Figma exactly.** The user expects pixel-accurate implementation. When in doubt, re-check the Figma design.
