# Weaver Design System

Weaver is a custom design system maintained in Figma, shipped as a [Joy UI](https://mui.com/joy-ui/getting-started/) theme package. Wrap your app with `<WeaverProvider>` and all Joy UI components will match the Weaver designs out of the box.

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

The package includes built-in support for AI coding assistants (Claude Code, Cursor, etc.):

- **`CLAUDE.md`** — General package context, read automatically at conversation start. Includes setup instructions, available components, typography levels, and icons.
- **`FIGMA_RULES.md`** — Strict Figma-to-code mapping rules (component names, button variants, color tokens, anti-patterns). Injected automatically via a hook every time an AI assistant fetches a Figma design.

### Setup the Figma MCP Hook

Add this to your project's `.claude/settings.json` (or merge into existing settings):

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "mcp__figma",
        "hooks": [
          {
            "type": "command",
            "command": "cat joyui/FIGMA_RULES.md"
          }
        ]
      }
    ]
  }
}
```

This ensures the AI assistant reads the Weaver design rules every time it fetches a Figma design, producing correct component mappings without manual correction.

## What's included

- **Design tokens** — colors, spacing, radius, and shadows from Figma
- **Palette** — primary, neutral, danger, success, and warning color schemes
- **Typography** — Inter font with 18 type levels, all defaulting to `content-default` (`#101B2E`)
- **40+ component overrides** — buttons, inputs, selects, checkboxes, alerts, modals, and more
- **Icons** — uses [Remix Icon](https://remixicon.com) (not bundled, install separately)
- **AI rules** — `CLAUDE.md` and `FIGMA_RULES.md` for accurate Figma-to-code generation

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
