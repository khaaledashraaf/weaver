"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";
import Stack from "@mui/joy/Stack";
import { RiCloseLine } from "@remixicon/react";
import { Section } from "../section";
import { DemoBox } from "../demo-box";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

export default function ChipsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 0.5 }}>
        Chips
      </Typography>
      <Typography level="body-md" sx={{ mb: 5, color: "text.secondary" }}>
        Chips (Tags) are compact elements for labels, filters, or selections.
        Weaver chips use 6px radius (xs) and 8px radius (md/lg) — not fully
        rounded. Three sizes and four variants available.
      </Typography>

      <Section
        title="Variants"
        description="Joy UI chip variants using Weaver token colors."
      >
        <DemoBox
          code={`<Chip variant="soft">Soft</Chip>
<Chip variant="solid">Solid</Chip>
<Chip variant="outlined">Outlined</Chip>
<Chip variant="plain">Plain</Chip>`}
        >
          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap alignItems="center">
            <Chip variant="soft">Soft</Chip>
            <Chip variant="solid">Solid</Chip>
            <Chip variant="outlined">Outlined</Chip>
            <Chip variant="plain">Plain</Chip>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Colors"
        description="Chips inherit Weaver's color tokens across all Joy UI color options."
      >
        <DemoBox
          code={`<Chip color="primary">Primary</Chip>
<Chip color="neutral">Neutral</Chip>
<Chip color="success">Success</Chip>
<Chip color="warning">Warning</Chip>
<Chip color="danger">Danger</Chip>`}
        >
          <Stack spacing={2}>
            <Typography level="body-xs" sx={{ color: "text.tertiary" }}>Soft</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip variant="soft" color="primary">Primary</Chip>
              <Chip variant="soft" color="neutral">Neutral</Chip>
              <Chip variant="soft" color="success">Success</Chip>
              <Chip variant="soft" color="warning">Warning</Chip>
              <Chip variant="soft" color="danger">Danger</Chip>
            </Stack>
            <Typography level="body-xs" sx={{ color: "text.tertiary" }}>Solid</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip variant="solid" color="primary">Primary</Chip>
              <Chip variant="solid" color="neutral">Neutral</Chip>
              <Chip variant="solid" color="success">Success</Chip>
              <Chip variant="solid" color="warning">Warning</Chip>
              <Chip variant="solid" color="danger">Danger</Chip>
            </Stack>
            <Typography level="body-xs" sx={{ color: "text.tertiary" }}>Outlined</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip variant="outlined" color="primary">Primary</Chip>
              <Chip variant="outlined" color="neutral">Neutral</Chip>
              <Chip variant="outlined" color="success">Success</Chip>
              <Chip variant="outlined" color="warning">Warning</Chip>
              <Chip variant="outlined" color="danger">Danger</Chip>
            </Stack>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Sizes"
        description="Three sizes: sm (24px), md (28px), lg (36px)."
      >
        <DemoBox
          code={`<Chip size="sm">Small (24px)</Chip>
<Chip size="md">Medium (28px)</Chip>
<Chip size="lg">Large (36px)</Chip>`}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Chip size="sm">Small (24px)</Chip>
            <Chip size="md">Medium (28px)</Chip>
            <Chip size="lg">Large (36px)</Chip>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="States"
        description="Default and Disabled states."
      >
        <DemoBox
          code={`<Chip>Default</Chip>
<Chip disabled>Disabled</Chip>`}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Chip>Default</Chip>
            <Chip disabled>Disabled</Chip>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="With Close Button"
        description="Chips can have a close/delete action."
      >
        <DemoBox
          code={`<Chip size="sm" endDecorator={<ChipDelete><RiCloseLine size={14} /></ChipDelete>}>Tag</Chip>
<Chip size="md" endDecorator={<ChipDelete><RiCloseLine size={16} /></ChipDelete>}>Tag</Chip>
<Chip size="lg" endDecorator={<ChipDelete><RiCloseLine size={18} /></ChipDelete>}>Tag</Chip>`}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Chip size="sm" endDecorator={<ChipDelete><RiCloseLine size={14} /></ChipDelete>}>Tag</Chip>
            <Chip size="md" endDecorator={<ChipDelete><RiCloseLine size={16} /></ChipDelete>}>Tag</Chip>
            <Chip size="lg" endDecorator={<ChipDelete><RiCloseLine size={18} /></ChipDelete>}>Tag</Chip>
          </Stack>
        </DemoBox>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";
import { RiCloseLine } from "@remixicon/react";

// Basic chip
<Chip>Label</Chip>

// With variant and color
<Chip variant="soft" color="success">Success</Chip>
<Chip variant="solid" color="danger">Danger</Chip>

// With close button
<Chip endDecorator={<ChipDelete><RiCloseLine size={16} /></ChipDelete>}>
  Closeable
</Chip>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "variant", type: '"soft" | "solid" | "outlined" | "plain"', default: '"soft"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"primary"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "disabled", type: "boolean", default: "false" },
            { name: "endDecorator", type: "ReactNode", default: "-" },
            { name: "startDecorator", type: "ReactNode", default: "-" },
          ]}
        />
      </Section>
    </Box>
  );
}
