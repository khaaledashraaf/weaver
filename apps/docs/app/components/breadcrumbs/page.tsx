"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import { RiHome5Line, RiDashboardLine, RiFolder3Line, RiArrowRightSLine } from "@remixicon/react";
import { Section } from "../section";
import { DemoBox } from "../demo-box";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  Types: Default (Icon+Text), Only Icon, Avatar, Overflow
  Styles: Default (transparent), Raised (bg + border)
  Separators: Chevron, Slash
  States: Default, Hover, Active, Disabled
  Text: content/subtle for links, content/default for active
*/

export default function BreadcrumbsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 0.5 }}>
        Breadcrumbs
      </Typography>
      <Typography level="body-md" sx={{ mb: 5, color: "text.secondary" }}>
        Breadcrumbs show a navigation trail of the current page location.
        Supports default and raised styles, with chevron or slash separators.
      </Typography>

      <Section
        title="Default"
        description="Transparent background with chevron separator (16px icon, 4px gap)."
      >
        <DemoBox
          code={`<Breadcrumbs separator={<RiArrowRightSLine size={16} />}>
  <Link href="#" color="neutral">Home</Link>
  <Link href="#" color="neutral">Components</Link>
  <Typography>Breadcrumbs</Typography>
</Breadcrumbs>`}
        >
          <Breadcrumbs separator={<RiArrowRightSLine size={16} />}>
            <Link href="#" color="neutral">Home</Link>
            <Link href="#" color="neutral">Components</Link>
            <Typography>Breadcrumbs</Typography>
          </Breadcrumbs>
        </DemoBox>
      </Section>

      <Section
        title="Slash separator"
        description="Using a slash as the separator character."
      >
        <DemoBox
          code={`<Breadcrumbs separator="/">
  <Link href="#" color="neutral">Home</Link>
  <Link href="#" color="neutral">Components</Link>
  <Typography>Breadcrumbs</Typography>
</Breadcrumbs>`}
        >
          <Breadcrumbs separator="/">
            <Link href="#" color="neutral">Home</Link>
            <Link href="#" color="neutral">Components</Link>
            <Typography>Breadcrumbs</Typography>
          </Breadcrumbs>
        </DemoBox>
      </Section>

      <Section
        title="Raised style"
        description="Container with background, border, and shadow."
      >
        <DemoBox
          code={`<Sheet
  variant="outlined"
  sx={{
    display: "inline-flex",
    borderRadius: "sm",
    px: 1.5,
    py: 1.5,
    boxShadow: "xs",
  }}
>
  <Breadcrumbs separator={<RiArrowRightSLine size={16} />}>
    <Link href="#" color="neutral">Home</Link>
    <Link href="#" color="neutral">Dashboard</Link>
    <Typography>Settings</Typography>
  </Breadcrumbs>
</Sheet>`}
        >
          <Sheet
            variant="outlined"
            sx={{
              display: "inline-flex",
              borderRadius: "sm",
              px: 1.5,
              py: 1.5,
              boxShadow: "xs",
            }}
          >
            <Breadcrumbs separator={<RiArrowRightSLine size={16} />}>
              <Link href="#" color="neutral">Home</Link>
              <Link href="#" color="neutral">Dashboard</Link>
              <Typography>Settings</Typography>
            </Breadcrumbs>
          </Sheet>
        </DemoBox>
      </Section>

      <Section
        title="With icons"
        description="Breadcrumb items include a 20px icon with 4px gap to text. Separator is a 16px chevron."
      >
        <DemoBox
          code={`<Breadcrumbs separator={<RiArrowRightSLine size={16} />}>
  <Link
    href="#"
    color="neutral"
    sx={{ display: "flex", alignItems: "center", gap: "4px" }}
  >
    <RiHome5Line size={20} /> Home
  </Link>
  <Link
    href="#"
    color="neutral"
    sx={{ display: "flex", alignItems: "center", gap: "4px" }}
  >
    <RiDashboardLine size={20} /> Dashboard
  </Link>
  <Typography sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
    <RiFolder3Line size={20} /> Sales
  </Typography>
</Breadcrumbs>`}
        >
          <Breadcrumbs separator={<RiArrowRightSLine size={16} />}>
            <Link
              href="#"
              color="neutral"
              sx={{ display: "flex", alignItems: "center", gap: "4px" }}
            >
              <RiHome5Line size={20} /> Home
            </Link>
            <Link
              href="#"
              color="neutral"
              sx={{ display: "flex", alignItems: "center", gap: "4px" }}
            >
              <RiDashboardLine size={20} /> Dashboard
            </Link>
            <Typography sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <RiFolder3Line size={20} /> Sales
            </Typography>
          </Breadcrumbs>
        </DemoBox>
      </Section>

      <Section
        title="Collapsed"
        description="Use an ellipsis item to indicate truncated breadcrumb paths."
      >
        <DemoBox
          code={`<Breadcrumbs separator={<RiArrowRightSLine size={16} />}>
  <Link href="#" color="neutral">Home</Link>
  <Typography>...</Typography>
  <Link href="#" color="neutral">Team</Link>
  <Typography>Settings</Typography>
</Breadcrumbs>`}
        >
          <Breadcrumbs separator={<RiArrowRightSLine size={16} />}>
            <Link href="#" color="neutral">Home</Link>
            <Typography>...</Typography>
            <Link href="#" color="neutral">Team</Link>
            <Typography>Settings</Typography>
          </Breadcrumbs>
        </DemoBox>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

<Breadcrumbs separator="›">
  <Link href="/home" color="neutral">Home</Link>
  <Link href="/components" color="neutral">Components</Link>
  <Typography>Breadcrumbs</Typography>
</Breadcrumbs>`}</CodeBlock>
      </Section>
    </Box>
  );
}
