# Weaver Design System — Joy UI Theme

This package (`weaver-ui-joyui`) is the Weaver Design System implemented as a Joy UI theme. All Joy UI components rendered inside `WeaverProvider` are automatically themed.

```tsx
import { WeaverProvider } from "weaver-ui-joyui";

function App({ children }) {
  return <WeaverProvider>{children}</WeaverProvider>;
}
```

Import all standard components from `@mui/joy`. Import `WeaverProvider` and `WeaverPagination` from `weaver-ui-joyui`.

## Setup — Figma MCP Hook (Recommended)

Add this hook to your project's `.claude/settings.json` to automatically enforce Weaver design rules every time an AI assistant fetches a Figma design:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "mcp__figma",
        "hook": "cat joyui/FIGMA_RULES.md"
      }
    ]
  }
}
```

If you already have a `.claude/settings.json`, merge the `PreToolUse` hook into your existing `hooks` config.

## Typography

Use Joy UI's `<Typography level="...">`. Available levels:

- **Body:** `body-md` (default/base), `body-sm`, `body-xs`, `body-2xs`, `body-3xs`, `body-lg`, `body-xl`
- **Heading:** `h1`, `h2`, `h3`, `h4`
- **Title:** `title-lg`, `title-md`, `title-sm`

Font family: Inter. All typography levels default to `content-default` (`#101B2E`).

## Icons

- Library: **Remix Icon** via `@remixicon/react`
- Import: `import { RiSearchLine } from "@remixicon/react"`
- Pass as `startDecorator` / `endDecorator` props
- Default icon size is 20px

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
