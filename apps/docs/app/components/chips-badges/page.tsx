"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";
import Badge from "@mui/joy/Badge";
import Avatar from "@mui/joy/Avatar";
import Stack from "@mui/joy/Stack";
import { RiCloseLine } from "@remixicon/react";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  Tag (Chip):
    Types: Simple, Dot, Flag, Avatar, Icon
    States: Default, Hover, Active, Focused, Disabled
    Sizes: xs (24px), md (28px), lg (36px)
    Has close button: True, False
    Note: NOT full-pill. Radius is 6px (xs) and 8px (md, lg)

  Badge:
    Types: Default, LeadingIcon, TrailingIcon, Dot, Flag
    Styles: Light, Outline, Solid
    Sizes: sm (24px), lg (28px)
    Colors: Neutral, Blue, Green, Amber, Danger, Purple, Fuchsia, Rose, Sky, Golden
    Show Number: true, false
*/

export default function ChipsBadgesPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Chips & Badges
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Tags/Chips are compact elements for labels, filters, or selections.
        Weaver chips use 6px radius (xs) and 8px radius (md/lg) — NOT fully
        rounded. Badges are inline pill-shaped labels with 10 color options
        across 3 styles.
      </Typography>

      <Section
        title="Tag Sizes"
        description="Figma defines three sizes: xs (24px), md (28px), lg (36px)."
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Chip size="sm">xs (24px)</Chip>
          <Chip size="md">md (28px)</Chip>
          <Chip size="lg">lg (36px)</Chip>
        </Stack>
      </Section>

      <Section
        title="Tag States"
        description="Figma states: Default, Hover, Active, Focused, Disabled."
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Chip>Default</Chip>
          <Chip disabled>Disabled</Chip>
        </Stack>
      </Section>

      <Section
        title="Tag with Close Button"
        description="Tags can have a close button (Has close button = True in Figma)."
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Chip size="sm" endDecorator={<ChipDelete><RiCloseLine size={14} /></ChipDelete>}>Tag</Chip>
          <Chip size="md" endDecorator={<ChipDelete><RiCloseLine size={16} /></ChipDelete>}>Tag</Chip>
          <Chip size="lg" endDecorator={<ChipDelete><RiCloseLine size={18} /></ChipDelete>}>Tag</Chip>
        </Stack>
      </Section>

      <Section
        title="Badge Styles"
        description="Figma defines three badge styles: Light (soft), Outline, Solid."
      >
        <Stack spacing={2}>
          <Typography level="title-sm">Light (soft)</Typography>
          <Stack direction="row" spacing={1.5}>
            <Badge badgeContent="3" color="primary" />
            <Badge badgeContent="3" color="success" />
            <Badge badgeContent="3" color="danger" />
            <Badge badgeContent="3" color="warning" />
            <Badge badgeContent="3" color="neutral" />
          </Stack>
        </Stack>
      </Section>

      <Section
        title="Badge Sizes"
        description="Two sizes from Figma: sm (24px height) and lg (28px height)."
      >
        <Stack direction="row" spacing={3}>
          <Badge badgeContent="5" size="sm">
            <Avatar size="sm">A</Avatar>
          </Badge>
          <Badge badgeContent="5" size="md">
            <Avatar>B</Avatar>
          </Badge>
        </Stack>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Chip from "@mui/joy/Chip";
import Badge from "@mui/joy/Badge";

// Tags (sizes: sm=xs, md, lg)
<Chip size="sm">Small tag</Chip>
<Chip size="md">Medium tag</Chip>
<Chip size="lg">Large tag</Chip>

// Tag with close button
<Chip endDecorator={<CloseIcon />}>Closeable</Chip>

// Badge on avatar
<Badge badgeContent="5">
  <Avatar>U</Avatar>
</Badge>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <Typography level="title-sm" sx={{ mb: 1 }}>Chip (Tag)</Typography>
        <PropsTable
          props={[
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "disabled", type: "boolean", default: "false" },
            { name: "endDecorator", type: "ReactNode", default: "-" },
            { name: "startDecorator", type: "ReactNode", default: "-" },
            { name: "children", type: "ReactNode", default: "-" },
          ]}
        />
        <Typography level="title-sm" sx={{ mt: 3, mb: 1 }}>Badge</Typography>
        <PropsTable
          props={[
            { name: "badgeContent", type: "ReactNode", default: "-" },
            { name: "size", type: '"sm" | "md"', default: '"md"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"primary"' },
            { name: "invisible", type: "boolean", default: "false" },
          ]}
        />
      </Section>
    </Box>
  );
}
