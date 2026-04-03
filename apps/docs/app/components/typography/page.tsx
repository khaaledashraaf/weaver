"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import Sheet from "@mui/joy/Sheet";
import Table from "@mui/joy/Table";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

const typographyScale = [
  { level: "h1", size: "3rem (48px)", weight: "Semi Bold (600)", letterSpacing: "-3%", description: "Page titles, hero headings" },
  { level: "h2", size: "2.5rem (40px)", weight: "Bold (700)", letterSpacing: "-3%", description: "Section headings" },
  { level: "h3", size: "2rem (32px)", weight: "Semi Bold (600)", letterSpacing: "-2%", description: "Sub-section headings" },
  { level: "h4", size: "1.75rem (28px)", weight: "Semi Bold (600)", letterSpacing: "-1%", description: "Card titles, smaller headings" },
  { level: "title-lg", size: "1.25rem (20px)", weight: "Semi Bold (600)", letterSpacing: "normal", description: "Large titles" },
  { level: "title-md", size: "1.0625rem (17px)", weight: "Semi Bold (600)", letterSpacing: "normal", description: "Medium titles" },
  { level: "title-sm", size: "0.9375rem (15px)", weight: "Medium (500)", letterSpacing: "normal", description: "Small titles, labels" },
  { level: "body-lg", size: "1.0625rem (17px)", weight: "Regular (400)", letterSpacing: "normal", description: "Large body text" },
  { level: "body-md", size: "0.9375rem (15px)", weight: "Regular (400)", letterSpacing: "normal", description: "Default body text" },
  { level: "body-sm", size: "0.875rem (14px)", weight: "Regular (400)", letterSpacing: "normal", description: "Secondary text, captions" },
  { level: "body-xs", size: "0.8125rem (13px)", weight: "Regular (400)", letterSpacing: "normal", description: "Labels, fine print" },
] as const;

export default function TypographyPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Typography
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        The Weaver typography scale defines consistent font sizes, weights, and
        letter-spacing across the application. All levels are available through
        the Joy UI Typography component with the Weaver theme applied.
      </Typography>

      <Section
        title="Heading Levels"
        description="Headings use tighter letter-spacing and heavier font weights for visual hierarchy."
      >
        <Stack spacing={2}>
          <Typography level="h1">Heading 1 -- 3rem (48px)</Typography>
          <Typography level="h2">Heading 2 -- 2.5rem (40px)</Typography>
          <Typography level="h3">Heading 3 -- 2rem (32px)</Typography>
          <Typography level="h4">Heading 4 -- 1.75rem (28px)</Typography>
        </Stack>
      </Section>

      <Section
        title="Title Levels"
        description="Titles bridge the gap between headings and body text."
      >
        <Stack spacing={2}>
          <Typography level="title-lg">Title Large -- 1.25rem (20px)</Typography>
          <Typography level="title-md">Title Medium -- 1.0625rem (17px)</Typography>
          <Typography level="title-sm">Title Small -- 0.9375rem (15px)</Typography>
        </Stack>
      </Section>

      <Section
        title="Body Levels"
        description="Body text levels for content at varying emphasis."
      >
        <Stack spacing={2}>
          <Divider />
          <Typography level="body-lg">
            Body Large -- The quick brown fox jumps over the lazy dog. Used for
            prominent body text and introductions.
          </Typography>
          <Divider />
          <Typography level="body-md">
            Body Medium -- The quick brown fox jumps over the lazy dog. This is
            the default body text size used throughout the application.
          </Typography>
          <Divider />
          <Typography level="body-sm">
            Body Small -- The quick brown fox jumps over the lazy dog. Used for
            secondary information, captions, and helper text.
          </Typography>
          <Divider />
          <Typography level="body-xs">
            Body Extra Small -- The quick brown fox jumps over the lazy dog.
            Used for labels, timestamps, and fine print.
          </Typography>
        </Stack>
      </Section>

      <Section
        title="Typography Scale Reference"
        description="Complete specification of every level in the Weaver type scale."
      >
        <Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
          <Table size="sm">
            <thead>
              <tr>
                <th>Level</th>
                <th>Size</th>
                <th>Weight</th>
                <th>Letter Spacing</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              {typographyScale.map((row) => (
                <tr key={row.level}>
                  <td>
                    <Typography level="body-xs" fontFamily="monospace">
                      {row.level}
                    </Typography>
                  </td>
                  <td>
                    <Typography level="body-xs">{row.size}</Typography>
                  </td>
                  <td>
                    <Typography level="body-xs">{row.weight}</Typography>
                  </td>
                  <td>
                    <Typography level="body-xs">{row.letterSpacing}</Typography>
                  </td>
                  <td>
                    <Typography level="body-xs">{row.description}</Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Sheet>
      </Section>

      <Section
        title="Colors"
        description="Typography can use semantic text colors."
      >
        <Stack spacing={1}>
          <Typography>Default text color</Typography>
          <Typography sx={{ color: "text.secondary" }}>Secondary text color</Typography>
          <Typography sx={{ color: "text.tertiary" }}>Tertiary text color</Typography>
          <Typography color="primary">Primary color text</Typography>
          <Typography color="danger">Danger color text</Typography>
          <Typography color="success">Success color text</Typography>
          <Typography color="warning">Warning color text</Typography>
        </Stack>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Typography from "@mui/joy/Typography";

// Headings
<Typography level="h1">Page Title</Typography>
<Typography level="h2">Section Title</Typography>
<Typography level="h3">Sub-section</Typography>
<Typography level="h4">Card Title</Typography>

// Titles
<Typography level="title-lg">Large Title</Typography>
<Typography level="title-md">Medium Title</Typography>
<Typography level="title-sm">Small Title</Typography>

// Body text
<Typography level="body-lg">Intro text</Typography>
<Typography level="body-md">Default body text</Typography>
<Typography level="body-sm">Secondary text</Typography>
<Typography level="body-xs">Fine print</Typography>

// With color
<Typography color="primary">Primary</Typography>
<Typography sx={{ color: "text.secondary" }}>Muted</Typography>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "level", type: '"h1" | "h2" | "h3" | "h4" | "title-lg" | "title-md" | "title-sm" | "body-lg" | "body-md" | "body-sm" | "body-xs"', default: '"body-md"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: "-" },
            { name: "variant", type: '"solid" | "soft" | "outlined" | "plain"', default: "-" },
            { name: "noWrap", type: "boolean", default: "false" },
            { name: "gutterBottom", type: "boolean", default: "false" },
            { name: "component", type: "ElementType", default: "varies by level" },
          ]}
        />
      </Section>
    </Box>
  );
}
