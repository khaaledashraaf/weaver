# Weaver — Figma-to-Code Rules

MANDATORY: Follow these rules when implementing Figma designs with the Weaver Joy UI theme.

## Component Mapping

Figma names ≠ Joy UI names. Use this table:

| Figma | Code |
|---|---|
| Tag | `<Chip variant="outlined">` |
| Badge (text pill) | `<Chip variant="soft">` — NEVER `<Badge>` |
| Badge (dot/count) | `<Badge>` |
| Toggle | `<Switch>` |
| Pagination | `<WeaverPagination>` (from `weaver-ui-joyui`) |

## Button Variants

| Figma | `variant` | `color` |
|---|---|---|
| primary | `solid` | `primary` |
| secondary | `outlined` | `neutral` |
| soft | `soft` | `primary` |
| ghost | `plain` | `neutral` |
| danger | `solid` | `danger` |
| ghost-primary | `plain` | `primary` |
| soft-danger | `soft` | `danger` |
| link | `link` | `primary` / `neutral` / `danger` |

Sizes: `xs` (32px), `sm` (36px), `md` (40px), `lg` (48px).

## Colors

| Figma | `color` prop |
|---|---|
| Green/Success | `success` |
| Red/Danger | `danger` |
| Amber/Warning | `warning` |
| Blue/Primary | `primary` |
| Gray/Neutral | `neutral` |

Chip variants: light=`soft`, outline=`outlined`, solid=`solid`.

## Icons

`@remixicon/react` — 20px default. Use `startDecorator`/`endDecorator`.

## Rules

1. **Linked component instance → use props only.** No `sx` on themed components. Use `variant`, `color`, `size`.
2. **Detached/custom element → `sx` is allowed.**
3. **Text color is `#101B2E` (content-default), not `#000`.** Do not override with black.
4. **No opacity for disabled states.** Theme uses explicit disabled tokens.
5. **No focus ring on error inputs.**
6. **No invented variants/colors/sizes.** Only implement what Figma specifies.
