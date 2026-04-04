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
  // Display
  { level: "display-xl", figma: "Display-xl", size: "6rem (96px)", weight: "Semi Bold (600)", lineHeight: "104px", letterSpacing: "-3%", description: "Hero headings, splash screens" },
  { level: "display-lg", figma: "Display-lg", size: "5.25rem (84px)", weight: "Bold (700)", lineHeight: "92px", letterSpacing: "-3%", description: "Large display headings" },
  { level: "display-md", figma: "Display-md", size: "4.5rem (72px)", weight: "Bold (700)", lineHeight: "80px", letterSpacing: "-3%", description: "Medium display headings" },
  { level: "display-sm", figma: "Display-sm", size: "3.75rem (60px)", weight: "Semi Bold (600)", lineHeight: "68px", letterSpacing: "-3%", description: "Small display headings" },
  // Heading
  { level: "h1", figma: "heading-3xl", size: "3rem (48px)", weight: "Bold (700)", lineHeight: "56px", letterSpacing: "-2%", description: "Page titles" },
  { level: "h2", figma: "heading-2xl", size: "2.5rem (40px)", weight: "Bold (700)", lineHeight: "48px", letterSpacing: "-2%", description: "Section headings" },
  { level: "h3", figma: "heading-xl", size: "2rem (32px)", weight: "Bold (700)", lineHeight: "36px", letterSpacing: "-2%", description: "Sub-section headings" },
  { level: "h4", figma: "heading-lg", size: "1.75rem (28px)", weight: "Semi Bold (600)", lineHeight: "32px", letterSpacing: "-1%", description: "Card titles, smaller headings" },
  { level: "heading-md", figma: "heading-md", size: "1.5rem (24px)", weight: "Semi Bold (600)", lineHeight: "28px", letterSpacing: "0", description: "Sub-headings" },
  // Title
  { level: "title-lg", figma: "heading-sm", size: "1.25rem (20px)", weight: "Semi Bold (600)", lineHeight: "24px", letterSpacing: "0", description: "Large titles" },
  { level: "title-md", figma: "heading-xs", size: "1.0625rem (17px)", weight: "Semi Bold (600)", lineHeight: "22px", letterSpacing: "0", description: "Medium titles" },
  { level: "title-sm", figma: "—", size: "0.9375rem (15px)", weight: "Medium (500)", lineHeight: "24px", letterSpacing: "0", description: "Small titles, labels" },
  // Body
  { level: "body-xl", figma: "body-xl", size: "1.25rem (20px)", weight: "Regular (400)", lineHeight: "30px", letterSpacing: "0", description: "Large body text, intros" },
  { level: "body-lg", figma: "body-lg", size: "1.0625rem (17px)", weight: "Regular (400)", lineHeight: "28px", letterSpacing: "0", description: "Prominent body text" },
  { level: "body-md", figma: "body-md (base)", size: "0.9375rem (15px)", weight: "Regular (400)", lineHeight: "24px", letterSpacing: "0", description: "Default body text" },
  { level: "body-sm", figma: "body-sm", size: "0.875rem (14px)", weight: "Regular (400)", lineHeight: "20px", letterSpacing: "0", description: "Secondary text, captions" },
  { level: "body-xs", figma: "body-xs", size: "0.8125rem (13px)", weight: "Regular (400)", lineHeight: "20px", letterSpacing: "0", description: "Labels, fine print" },
  { level: "body-2xs", figma: "body-2xs", size: "0.75rem (12px)", weight: "Regular (400)", lineHeight: "16px", letterSpacing: "0", description: "Badges, tags" },
  { level: "body-3xs", figma: "body-3xs", size: "0.6875rem (11px)", weight: "Regular (400)", lineHeight: "14px", letterSpacing: "0", description: "Micro labels" },
] as const;

type TypographyLevel =
  | "display-xl" | "display-lg" | "display-md" | "display-sm"
  | "h1" | "h2" | "h3" | "h4" | "heading-md"
  | "title-lg" | "title-md" | "title-sm"
  | "body-xl" | "body-lg" | "body-md" | "body-sm" | "body-xs" | "body-2xs" | "body-3xs";

export default function TypographyPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Typography
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        The Weaver typography scale maps all Figma text styles to Joy UI
        typography levels. It covers 4 display sizes, 5 heading sizes, 3 title
        sizes, and 7 body sizes — 19 levels total.
      </Typography>

      <Section
        title="Display Levels"
        description="Large display styles for hero sections and splash screens."
      >
        <Stack spacing={2}>
          <Typography level="display-xl">Display XL — 96px</Typography>
          <Typography level="display-lg">Display LG — 84px</Typography>
          <Typography level="display-md">Display MD — 72px</Typography>
          <Typography level="display-sm">Display SM — 60px</Typography>
        </Stack>
      </Section>

      <Section
        title="Heading Levels"
        description="Headings use tighter letter-spacing and heavier font weights for visual hierarchy."
      >
        <Stack spacing={2}>
          <Typography level="h1">Heading 1 — 48px</Typography>
          <Typography level="h2">Heading 2 — 40px</Typography>
          <Typography level="h3">Heading 3 — 32px</Typography>
          <Typography level="h4">Heading 4 — 28px</Typography>
          <Typography level="heading-md">Heading MD — 24px</Typography>
        </Stack>
      </Section>

      <Section
        title="Title Levels"
        description="Titles bridge the gap between headings and body text."
      >
        <Stack spacing={2}>
          <Typography level="title-lg">Title Large — 20px</Typography>
          <Typography level="title-md">Title Medium — 17px</Typography>
          <Typography level="title-sm">Title Small — 15px</Typography>
        </Stack>
      </Section>

      <Section
        title="Body Levels"
        description="Body text levels for content at varying emphasis."
      >
        <Stack spacing={2}>
          <Divider />
          <Typography level="body-xl">
            Body XL — The quick brown fox jumps over the lazy dog. Used for
            large body text and introductions.
          </Typography>
          <Divider />
          <Typography level="body-lg">
            Body Large — The quick brown fox jumps over the lazy dog. Used for
            prominent body text.
          </Typography>
          <Divider />
          <Typography level="body-md">
            Body Medium — The quick brown fox jumps over the lazy dog. This is
            the default body text size.
          </Typography>
          <Divider />
          <Typography level="body-sm">
            Body Small — The quick brown fox jumps over the lazy dog. Used for
            secondary information and captions.
          </Typography>
          <Divider />
          <Typography level="body-xs">
            Body XS — The quick brown fox jumps over the lazy dog. Used for
            labels and fine print.
          </Typography>
          <Divider />
          <Typography level="body-2xs">
            Body 2XS — The quick brown fox jumps over the lazy dog. Used for
            badges and tags.
          </Typography>
          <Divider />
          <Typography level="body-3xs">
            Body 3XS — The quick brown fox jumps over the lazy dog. Used for
            micro labels.
          </Typography>
        </Stack>
      </Section>

      <Section
        title="Typography Scale Reference"
        description="Complete specification of every level in the Weaver type scale, with Figma style mapping."
      >
        <Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
          <Table size="sm">
            <thead>
              <tr>
                <th>Level</th>
                <th>Figma Style</th>
                <th>Size</th>
                <th>Weight</th>
                <th>Line Height</th>
                <th>Letter Spacing</th>
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
                    <Typography level="body-xs" sx={{ color: "text.tertiary" }}>
                      {row.figma}
                    </Typography>
                  </td>
                  <td>
                    <Typography level="body-xs">{row.size}</Typography>
                  </td>
                  <td>
                    <Typography level="body-xs">{row.weight}</Typography>
                  </td>
                  <td>
                    <Typography level="body-xs">{row.lineHeight}</Typography>
                  </td>
                  <td>
                    <Typography level="body-xs">{row.letterSpacing}</Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Sheet>
      </Section>

      <Section
        title="Weight Variants"
        description="Figma defines multiple weight variants per body size. Use the fontWeight prop to access them."
      >
        <Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
          <Table size="sm">
            <thead>
              <tr>
                <th>Level</th>
                <th>Regular (400)</th>
                <th>Medium (500)</th>
                <th>Semi Bold (600)</th>
              </tr>
            </thead>
            <tbody>
              {(["body-xl", "body-lg", "body-md", "body-sm", "body-xs", "body-2xs", "body-3xs"] as TypographyLevel[]).map((level) => (
                <tr key={level}>
                  <td>
                    <Typography level="body-xs" fontFamily="monospace">
                      {level}
                    </Typography>
                  </td>
                  <td>
                    <Typography level={level} fontWeight={400}>
                      The quick brown fox
                    </Typography>
                  </td>
                  <td>
                    <Typography level={level} fontWeight={500}>
                      The quick brown fox
                    </Typography>
                  </td>
                  <td>
                    <Typography level={level} fontWeight={600}>
                      The quick brown fox
                    </Typography>
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

// Display
<Typography level="display-xl">Splash</Typography>
<Typography level="display-lg">Hero</Typography>
<Typography level="display-md">Feature</Typography>
<Typography level="display-sm">Promo</Typography>

// Headings
<Typography level="h1">Page Title</Typography>
<Typography level="h2">Section Title</Typography>
<Typography level="h3">Sub-section</Typography>
<Typography level="h4">Card Title</Typography>
<Typography level="heading-md">Sub-heading</Typography>

// Titles
<Typography level="title-lg">Large Title</Typography>
<Typography level="title-md">Medium Title</Typography>
<Typography level="title-sm">Small Title</Typography>

// Body text
<Typography level="body-xl">Intro text</Typography>
<Typography level="body-md">Default body text</Typography>
<Typography level="body-sm">Secondary text</Typography>
<Typography level="body-2xs">Badge label</Typography>
<Typography level="body-3xs">Micro label</Typography>

// With weight variant
<Typography level="body-md" fontWeight={600}>Semi Bold</Typography>

// With color
<Typography color="primary">Primary</Typography>
<Typography sx={{ color: "text.secondary" }}>Muted</Typography>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "level", type: '"display-xl" | "display-lg" | "display-md" | "display-sm" | "h1" | "h2" | "h3" | "h4" | "heading-md" | "title-lg" | "title-md" | "title-sm" | "body-xl" | "body-lg" | "body-md" | "body-sm" | "body-xs" | "body-2xs" | "body-3xs"', default: '"body-md"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: "-" },
            { name: "fontWeight", type: "number", default: "varies by level" },
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
