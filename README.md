# Weaver Design System

Weaver is a custom design system maintained in Figma, shipped as a [Joy UI](https://mui.com/joy-ui/getting-started/) theme package. Wrap your app with `<WeaverProvider>` and all Joy UI components will match the Weaver designs out of the box.

## Installation

```bash
npm install weaver-ui-joyui
```

### Peer dependencies

Make sure you have these installed:

```bash
npm install @mui/joy @emotion/react @emotion/styled react react-dom
```

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

## What's included

- **Design tokens** — colors, spacing, radius, and shadows from Figma
- **Palette** — primary, neutral, danger, success, and warning color schemes
- **Typography** — Inter font with 11 type levels
- **40+ component overrides** — buttons, inputs, selects, checkboxes, alerts, modals, and more
- **Icons** — uses [Remix Icon](https://remixicon.com) (not bundled, install separately)

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
