---
name: weaver-figma
description: Enforce Weaver design system rules when implementing UI from Figma designs. Use when user mentions Figma, provides Figma URLs, implements designs from Figma specs, creates components from Figma, or uses Figma MCP tools (get_design_context, get_screenshot, use_figma). Applies component mappings, variant names, color mappings, icon conventions, and styling constraints from the Weaver Joy UI theme.
user-invocable: true
---

# Weaver Design System — Figma-to-Code (Pointer Skill)

This skill is a thin pointer. The canonical Figma-to-code rules and design system catalog ship **inside the `weaver-ui-joyui` package**, so they update automatically whenever the consumer bumps the package version. Engineers do **not** need to re-copy this skill when the design system updates — only the package version.

**Before implementing any Figma design, read these two files in order, then follow them strictly:**

1. **`node_modules/weaver-ui-joyui/RULES.md`** — canonical Figma-to-code rules: component mappings (Tag→Chip, Toggle→Switch, Badge text-pill→Chip, …), 10-variant button matrix with `secondary` custom variant, color mappings, icon conventions, and the 8 mandatory rules (no `sx` on themed components, no opacity for disabled states, no focus ring on errors, no invented variants, always inspect Figma nodes, match exactly).

2. **`node_modules/weaver-ui-joyui/llms.txt`** — design system catalog: setup, full themed components list, typography levels (14 across body/heading/title), Remix Icon details, custom components (`WeaverPagination`, `WeaverDatePicker`, `WeaverCalendar`), MVP limitations.

If either file does not exist at the expected path, the consumer hasn't installed `weaver-ui-joyui` — ask them to install it before proceeding.

After reading both, translate the Figma design strictly following the rules. Match Figma exactly: pixel-accurate, no invented variants, always inspect the Figma node before implementing.
