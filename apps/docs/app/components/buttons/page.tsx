"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import { RiAddLine, RiArrowRightLine, RiDeleteBinLine, RiSettings3Line, RiSearchLine, RiEditLine, RiDownloadLine } from "@remixicon/react";
import { Section } from "../section";
import { DemoBox } from "../demo-box";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  Button styles: Primary, Secondary, Soft, Outline, Ghost, Ghost Primary, Danger, Soft Danger, White, Dashed
  Button sizes:  xs (32), sm (36), md (40), lg (48)
  Button states: Default, Hover, Pressed, Focused, Disabled

  IconButton styles: Primary, Soft, Secondary, Outline, Ghost, Ghost Primary, Danger, Danger Ghost
  IconButton sizes:  2xs (28), xs (32), sm (36), md (40), lg (48)
  IconButton forms:  Default, Pill
*/

const sizes = ["sm", "md", "lg"] as const;

export default function ButtonsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 0.5 }}>
        Button
      </Typography>
      <Typography level="body-md" sx={{ mb: 5, color: "text.secondary" }}>
        Buttons trigger actions. Weaver buttons use 8px border-radius, 15px font
        size across all sizes, and heights of 36px (sm), 40px (md), and 48px (lg).
        Figma defines 10 button styles and 4 sizes.
      </Typography>

      <Section title="Styles" description="The Figma design system defines 10 button styles mapped to Joy UI variant + color combinations.">
        <DemoBox
          code={`<Button variant="solid" color="primary">Primary</Button>
<Button variant="outlined" color="neutral">Secondary</Button>
<Button variant="soft" color="neutral">Soft</Button>
<Button variant="plain" color="neutral">Ghost</Button>
<Button variant="plain" color="primary">Ghost Primary</Button>
<Button variant="solid" color="danger">Danger</Button>
<Button variant="soft" color="danger">Soft Danger</Button>`}
        >
          <Stack spacing={1.5} sx={{ width: "100%" }}>
            <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
              <Button variant="solid" color="primary">Primary</Button>
              <Button variant="outlined" color="neutral">Secondary</Button>
              <Button variant="soft" color="neutral">Soft</Button>
              <Button variant="outlined" color="neutral">Outline</Button>
              <Button variant="plain" color="neutral">Ghost</Button>
            </Stack>
            <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
              <Button variant="plain" color="primary">Ghost Primary</Button>
              <Button variant="solid" color="danger">Danger</Button>
              <Button variant="soft" color="danger">Soft Danger</Button>
              <Button variant="outlined" color="neutral" sx={{ borderStyle: "dashed" }}>Dashed</Button>
            </Stack>
          </Stack>
        </DemoBox>
      </Section>

      <Section title="Sizes" description="Four sizes: xs (32px), sm (36px), md (40px), lg (48px).">
        <DemoBox
          code={`<Button size="sm">Small 36</Button>
<Button size="md">Medium 40</Button>
<Button size="lg">Large 48</Button>`}
        >
          {sizes.map((size) => (
            <Button key={size} size={size}>
              {size === "sm" ? "Small 36" : size === "md" ? "Medium 40" : "Large 48"}
            </Button>
          ))}
        </DemoBox>
      </Section>

      <Section title="Disabled" description="Disabled uses 0.4 opacity as defined in Figma.">
        <DemoBox
          code={`<Button disabled>Disabled</Button>
<Button variant="outlined" color="neutral" disabled>Disabled Secondary</Button>
<Button variant="solid" color="danger" disabled>Disabled Danger</Button>`}
        >
          <Button disabled>Disabled</Button>
          <Button variant="outlined" color="neutral" disabled>Disabled Secondary</Button>
          <Button variant="solid" color="danger" disabled>Disabled Danger</Button>
        </DemoBox>
      </Section>

      <Section title="Icon Buttons" description="Icon buttons come in Default (8px radius) and Pill (full round) forms.">
        <DemoBox
          code={`<IconButton variant="solid" color="primary"><RiAddLine size={20} /></IconButton>
<IconButton variant="outlined" color="neutral"><RiSearchLine size={20} /></IconButton>
<IconButton variant="plain" color="neutral"><RiEditLine size={20} /></IconButton>
<IconButton variant="solid" color="danger"><RiDeleteBinLine size={20} /></IconButton>`}
        >
          <Stack spacing={2} sx={{ width: "100%" }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              {sizes.map((size) => (
                <IconButton key={size} size={size} variant="outlined" color="neutral">
                  <RiAddLine size={size === "sm" ? 16 : size === "md" ? 20 : 24} />
                </IconButton>
              ))}
            </Stack>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <IconButton variant="solid" color="primary"><RiAddLine size={20} /></IconButton>
              <IconButton variant="soft" color="neutral"><RiSettings3Line size={20} /></IconButton>
              <IconButton variant="outlined" color="neutral"><RiSearchLine size={20} /></IconButton>
              <IconButton variant="plain" color="neutral"><RiEditLine size={20} /></IconButton>
              <IconButton variant="solid" color="danger"><RiDeleteBinLine size={20} /></IconButton>
            </Stack>
            <Typography level="body-xs" sx={{ color: "text.tertiary" }}>Pill form</Typography>
            <Stack direction="row" spacing={1.5} alignItems="center">
              {sizes.map((size) => (
                <IconButton key={size} size={size} variant="outlined" color="neutral" sx={{ borderRadius: "9999px" }}>
                  <RiAddLine size={size === "sm" ? 16 : size === "md" ? 20 : 24} />
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </DemoBox>
      </Section>

      <Section title="With Decorators" description="Buttons support leading and trailing icon slots.">
        <DemoBox
          code={`<Button startDecorator={<RiAddLine size={18} />}>Add Item</Button>
<Button endDecorator={<RiArrowRightLine size={18} />} variant="outlined" color="neutral">Next</Button>
<Button startDecorator={<RiDownloadLine size={18} />} variant="outlined" color="neutral">Download</Button>
<Button startDecorator={<RiDeleteBinLine size={18} />} color="danger">Delete</Button>`}
        >
          <Button startDecorator={<RiAddLine size={18} />} variant="solid" color="primary">Add Item</Button>
          <Button endDecorator={<RiArrowRightLine size={18} />} variant="outlined" color="neutral">Next</Button>
          <Button startDecorator={<RiDownloadLine size={18} />} variant="outlined" color="neutral">Download</Button>
          <Button startDecorator={<RiDeleteBinLine size={18} />} variant="solid" color="danger">Delete</Button>
        </DemoBox>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import { RiAddLine, RiDeleteBinLine } from "@remixicon/react";

// Primary button with icon
<Button startDecorator={<RiAddLine size={18} />}>
  Add Item
</Button>

// Icon button
<IconButton variant="outlined" color="neutral">
  <RiAddLine size={20} />
</IconButton>

// Pill icon button
<IconButton sx={{ borderRadius: "9999px" }}>
  <RiAddLine size={20} />
</IconButton>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "variant", type: '"solid" | "soft" | "outlined" | "plain"', default: '"solid"' },
            { name: "color", type: '"primary" | "neutral" | "danger"', default: '"primary"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "disabled", type: "boolean", default: "false" },
            { name: "startDecorator", type: "ReactNode", default: "-" },
            { name: "endDecorator", type: "ReactNode", default: "-" },
          ]}
        />
      </Section>
    </Box>
  );
}
