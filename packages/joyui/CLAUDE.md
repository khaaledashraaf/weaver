# Weaver Design System — Joy UI Theme

This package (`weaver-ui-joyui`) is the Weaver Design System implemented as a Joy UI theme. All Joy UI components rendered inside `WeaverProvider` are automatically themed — use the correct `variant`, `color`, and `size` props instead of custom `sx` styles.

```tsx
import { WeaverProvider } from "weaver-ui-joyui";

function App({ children }) {
  return <WeaverProvider>{children}</WeaverProvider>;
}
```

Import all standard components from `@mui/joy`. Import `WeaverProvider` and `WeaverPagination` from `weaver-ui-joyui`.

---

## Figma-to-Code Component Mapping

IMPORTANT: Figma component names do NOT match Joy UI component names. Always use this table when implementing Figma designs.

| Figma Component | Joy UI Code | Notes |
|---|---|---|
| Tag | `<Chip variant="outlined">` | Small label with border |
| Badge (status pill with text) | `<Chip variant="soft">` | NEVER use `<Badge>` for this |
| Badge (dot/count overlay) | `<Badge>` | Only for notification dots on avatars/icons |
| Toggle | `<Switch>` | Not `Toggle` — Joy UI calls it Switch |
| Date Picker | `<Button variant="outlined" color="neutral">` + calendar icon | No native Joy UI date picker |
| Pagination | `<WeaverPagination>` | Custom component from `weaver-ui-joyui` |
| Icon Button | `<IconButton>` | Same variant/color mapping as Button |
| Button Group | `<ButtonGroup>` | Theme handles shadow, padding, dividers |

## Button Variant Mapping

Figma uses custom variant names. Map them to Joy UI `variant` + `color` props:

| Figma Variant | `variant` | `color` |
|---|---|---|
| primary | `"solid"` | `"primary"` |
| secondary | `"outlined"` | `"neutral"` |
| soft | `"soft"` | `"primary"` |
| outline | `"outlined"` | `"neutral"` |
| ghost | `"plain"` | `"neutral"` |
| danger | `"solid"` | `"danger"` |
| ghost-primary | `"plain"` | `"primary"` |
| soft-danger | `"soft"` | `"danger"` |
| link | `"link"` | `"primary"` / `"neutral"` / `"danger"` |

Button sizes: `xs` (32px), `sm` (36px), `md` (40px), `lg` (48px).

## Semantic Color Mapping

For Chips, Alerts, and other colored components — map Figma color names to Joy UI `color` prop:

| Figma Color | Joy UI `color` |
|---|---|
| Green / Success | `"success"` |
| Red / Danger | `"danger"` |
| Amber / Warning | `"warning"` |
| Blue / Brand / Primary | `"primary"` |
| Neutral / Gray | `"neutral"` |

Extended Figma colors (purple, fuchsia, rose, sky, golden) have no direct Joy UI palette equivalent. For these, use `sx` with token values from the design tokens.

## Badge/Chip Style Mapping

Figma Badge styles map to Joy UI Chip variants:

| Figma Badge Style | Joy UI Chip |
|---|---|
| light | `variant="soft"` |
| outline | `variant="outlined"` |
| solid | `variant="solid"` |

## Icons

- Library: **Remix Icon** via `@remixicon/react`
- Figma component descriptions include the exact React import name (e.g., `RiSearchLine`, `RiArrowLeftLine`)
- Import: `import { RiSearchLine } from "@remixicon/react"`
- Pass as `startDecorator` / `endDecorator` props on Button, Input, Select, etc.
- Default icon size is 20px — do not override unless the design explicitly specifies a different size

## Typography

Use Joy UI's `<Typography level="...">`. Available levels:

- **Body:** `body-md` (default/base), `body-sm`, `body-xs`, `body-2xs`, `body-3xs`, `body-lg`, `body-xl`
- **Heading:** `h1`, `h2`, `h3`, `h4`
- **Title:** `title-lg`, `title-md`, `title-sm`

Font family: Inter. Do not import or use other fonts.

---

## IMPORTANT: Anti-patterns — Do NOT do these

1. **Do NOT use `<Badge>` for status pills.** Figma's "Badge" component (colored pill with text like "Active", "Pending") maps to `<Chip variant="soft" color="success">`, NOT Joy UI's `<Badge>` which is a small dot/count overlay on avatars.

2. **Do NOT hardcode colors, shadows, or borders via `sx`.** The theme already handles all visual styling through `variant`, `color`, and `size` props. If a component looks wrong, check your props first.

3. **Do NOT use `opacity` for disabled states.** The theme sets `opacity: 1` on disabled components and uses explicit disabled tokens for colors/backgrounds.

4. **Do NOT add focus ring styles to error-state inputs.** The Figma design does not show focus rings on error inputs.

5. **Do NOT invent variants, colors, or sizes** that don't exist in the Figma design. Only implement what Figma specifies.

6. **Do NOT wrap Joy UI components in custom styled wrappers** for things the theme already handles (shadows, border-radius, hover states, etc.).

7. **Trust the theme.** If a component's styling doesn't match Figma, the issue is likely wrong `variant`/`color`/`size` props — not missing `sx` styles.

---

## Available Themed Components

All imported from `@mui/joy` unless noted:

**Buttons:** Button, IconButton, ButtonGroup
**Inputs:** Input, Textarea, Select, Option, FormControl, FormLabel, FormHelperText
**Selection:** Checkbox, Radio, RadioGroup, Switch, Slider
**Data Display:** Chip, Badge, Avatar, AvatarGroup, Table, Divider, Tooltip
**Feedback:** Alert, LinearProgress, CircularProgress, Skeleton, Snackbar
**Surfaces:** Card, CardContent, CardOverflow, Sheet, Modal, ModalDialog, ModalClose, Drawer
**Navigation:** Tabs, TabList, Tab, Link, Breadcrumbs, List, ListItem, ListItemButton, ListDivider, ListSubheader
**Layout:** Accordion, AccordionGroup, AccordionSummary, AccordionDetails
**Dialog:** DialogTitle, DialogContent, DialogActions
**Custom** (from `weaver-ui-joyui`): WeaverPagination
