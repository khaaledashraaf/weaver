"use client";

import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import { Section } from "../components/section";
import { CodeBlock } from "../components/code-block";

export default function OverviewPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Overview
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Weaver is a Joy UI theme package that maps Figma design tokens to
        consistent component styles. Install it, wrap your app, and every Joy UI
        component automatically matches the Weaver design system.
      </Typography>

      <Section
        title="1. Install the package"
        description="Add weaver-ui-joyui to your package.json as a versioned GCS tarball, then run npm install."
      >
        <CodeBlock>{`// package.json
{
  "dependencies": {
    "weaver-ui-joyui": "https://storage.googleapis.com/noon-toolbox/perm/weaver/weaver-ui-joyui-1.0.0.tgz"
  }
}`}</CodeBlock>
        <Typography level="body-sm" sx={{ mt: 1.5, color: "text.secondary" }}>
          Find the latest version and changelog at{" "}
          <Typography
            component="a"
            href="https://github.com/fastfishio/weaver#versions"
            target="_blank"
            rel="noopener"
            sx={{ color: "primary.500" }}
          >
            fastfishio/weaver#versions
          </Typography>
          . Bump the version in the URL and re-run{" "}
          <code>npm install</code> to upgrade.
        </Typography>
      </Section>

      <Section
        title="2. Wrap your app with WeaverProvider"
        description="All Joy UI components rendered inside WeaverProvider will inherit the Weaver theme."
      >
        <CodeBlock>{`import { WeaverProvider } from "weaver-ui-joyui";

function App() {
  return (
    <WeaverProvider>
      {/* Your app content */}
    </WeaverProvider>
  );
}`}</CodeBlock>
      </Section>

      <Section
        title="3. Install the Figma-to-Code skill (Claude Code)"
        description="The package ships a Claude Code skill that auto-loads Weaver's component mappings, variant names, color tokens, and styling rules whenever you implement a design from Figma. Copy it into your project after running npm install:"
      >
        <CodeBlock>{`cp -r node_modules/weaver-ui-joyui/.claude/skills/weaver-figma .claude/skills/weaver-figma`}</CodeBlock>
        <Typography level="body-sm" sx={{ mt: 1.5, color: "text.secondary" }}>
          Once installed, Claude Code picks the skill up automatically whenever
          you mention Figma, share a Figma URL, or use the Figma MCP tools.
          Manual invocation: <code>/weaver-figma</code>.
        </Typography>
      </Section>

      <Section
        title="What's included"
        description="The theme package provides overrides for 40+ Joy UI components."
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {[
            "Button",
            "IconButton",
            "Input",
            "Textarea",
            "Select",
            "Checkbox",
            "Radio",
            "Switch",
            "Slider",
            "Alert",
            "Chip",
            "Badge",
            "Tooltip",
            "Avatar",
            "Card",
            "Modal",
            "Drawer",
            "Sheet",
            "Accordion",
            "Tabs",
            "Table",
            "Link",
            "Breadcrumbs",
            "Skeleton",
            "Snackbar",
            "Divider",
            "Progress",
            "FormControl",
            "FormLabel",
            "FormHelperText",
          ].map((name) => (
            <Chip key={name} size="sm" variant="outlined">
              {name}
            </Chip>
          ))}
        </Box>
      </Section>

      <Section
        title="Icons"
        description="Weaver uses Remix Icon as its icon library. Install it separately."
      >
        <CodeBlock>{`npm install @remixicon/react`}</CodeBlock>
        <Typography level="body-sm" sx={{ mt: 1.5, color: "text.secondary" }}>
          Browse the full icon set at{" "}
          <Typography
            component="a"
            href="https://remixicon.com"
            target="_blank"
            rel="noopener"
            sx={{ color: "primary.500" }}
          >
            remixicon.com
          </Typography>
        </Typography>
      </Section>

      <Section
        title="AI reference docs"
        description="The installed package ships canonical reference files that any AI agent can read. Bump the package version and your agent's rules update automatically — no manual sync needed. For tools that don't read Claude Code skills (Cursor, Windsurf, ChatGPT, etc.), point them directly at the files below."
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          {[
            {
              name: "CLAUDE.md",
              desc: "Package overview and quick-start setup. The entry point for any AI agent inspecting the installed package.",
            },
            {
              name: "llms.txt",
              desc: "Design system catalog: every themed component, typography level, custom component, icon convention, and MVP scope limitation.",
            },
            {
              name: "RULES.md",
              desc: "Figma-to-code rules: component mappings (Tag → Chip, Toggle → Switch, …), 10-variant button matrix, color mappings, and 8 mandatory rules.",
            },
            {
              name: ".claude/skills/weaver-figma/SKILL.md",
              desc: "Trigger skill for Claude Code. A thin pointer that loads RULES.md and llms.txt whenever a Figma design is referenced.",
            },
          ].map(({ name, desc }) => (
            <Box key={name}>
              <Typography
                level="title-sm"
                sx={{ fontFamily: "monospace", mb: 0.5 }}
              >
                {name}
              </Typography>
              <Typography level="body-sm" sx={{ color: "text.secondary" }}>
                {desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Section>

      <Section
        title="Current scope"
        description="The current release covers the following configuration."
      >
        <Box
          component="ul"
          sx={{
            pl: 2.5,
            "& li": { mb: 0.5, fontSize: "0.875rem", color: "text.secondary" },
          }}
        >
          <li>
            <strong>Theme:</strong> Blue (primary)
          </li>
          <li>
            <strong>Color mode:</strong> Light only
          </li>
          <li>
            <strong>Border radius:</strong> Default
          </li>
          <li>
            <strong>Font family:</strong> Inter
          </li>
        </Box>
      </Section>
    </Box>
  );
}
