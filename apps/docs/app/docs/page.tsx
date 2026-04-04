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
        title="Installation"
        description="Copy the joyui package into your project root, then add it as a local dependency."
      >
        <CodeBlock>{`// package.json
{
  "dependencies": {
    "weaver-ui-joyui": "./joyui"
  }
}`}</CodeBlock>
      </Section>

      <Section
        title="Setup"
        description="Wrap your application root with WeaverProvider. All Joy UI components inside will inherit the Weaver theme."
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
        title="Usage"
        description="Use standard Joy UI components — they automatically pick up Weaver's colors, typography, spacing, and radius."
      >
        <CodeBlock>{`import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

function MyForm() {
  return (
    <>
      <Input placeholder="Enter your name" />
      <Select placeholder="Choose an option">
        <Option value="one">Option One</Option>
        <Option value="two">Option Two</Option>
      </Select>
      <Button variant="solid" color="primary">
        Save Changes
      </Button>
    </>
  );
}`}</CodeBlock>
      </Section>

      <Section
        title="What's Included"
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
        title="AI-Assisted Figma-to-Code"
        description="The package includes FIGMA_RULES.md with component mappings and anti-patterns for AI coding assistants. Add this hook to your project's .claude/settings.json to automatically enforce Weaver design rules when fetching Figma designs."
      >
        <CodeBlock>{`// .claude/settings.json
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
}`}</CodeBlock>
        <Typography level="body-sm" sx={{ mt: 1.5, color: "text.secondary" }}>
          This injects the Weaver design rules into context every time an AI
          assistant fetches a Figma design, ensuring correct component mappings
          without manual correction.
        </Typography>
      </Section>

      <Section
        title="Current Scope"
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
