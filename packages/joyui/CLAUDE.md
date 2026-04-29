# Weaver Design System — Joy UI Theme

This package (`weaver-ui-joyui`) is the Weaver Design System implemented as a Joy UI theme. All Joy UI components rendered inside `WeaverProvider` are automatically themed.

```tsx
import { WeaverProvider } from "weaver-ui-joyui";

function App({ children }) {
  return <WeaverProvider>{children}</WeaverProvider>;
}
```

Import all standard components from `@mui/joy`. Import `WeaverProvider`, `WeaverPagination`, `WeaverDatePicker`, and `WeaverCalendar` from `weaver-ui-joyui`.

## Setup — Figma Design Rules Skill (Recommended)

This package includes a Claude Code skill that automatically enforces Weaver design rules when implementing Figma designs. To enable it, copy the skill into your project:

```bash
cp -r node_modules/weaver-ui-joyui/.claude/skills/weaver-figma .claude/skills/weaver-figma
```

Once installed, Claude Code will automatically apply Weaver component mappings, variant names, color mappings, and styling constraints whenever you implement designs from Figma. You can also invoke it manually with `/weaver-figma`.

## Canonical references

- **Design system catalog** — `node_modules/weaver-ui-joyui/llms.txt` (setup, themed components list, typography levels, icons, custom components, limitations).
- **Figma-to-code rules** — `node_modules/weaver-ui-joyui/RULES.md` (component mappings, button variant matrix, color mappings, 8 mandatory rules). Updates with every package version.
- **Trigger skill** — `node_modules/weaver-ui-joyui/.claude/skills/weaver-figma/SKILL.md` is a thin pointer to the two files above. Engineers copy it once into `<their-project>/.claude/skills/` via the `cp -r` command. Because the skill points to the package files (not embeds them), bumping the package version automatically refreshes the rules; the copied skill itself rarely needs to be re-copied.
