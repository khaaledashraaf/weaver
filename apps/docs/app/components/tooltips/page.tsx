"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Tooltip from "@mui/joy/Tooltip";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  Tooltip Styles: Dark, Default
  Tooltip Sizes:  Small (6px radius, 12px font), Large (8px radius, 14px font)
  Pointer Positions: Top Left, Top Center, Top Right, Bottom Left, Bottom Center,
                     Bottom Right, Center Left, Center Right, None
*/

const placements = ["top", "bottom", "left", "right"] as const;

export default function TooltipsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Tooltip
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Tooltips display informative text on hover or focus. Figma defines two
        styles (Dark, Default) and two sizes (Small: 6px radius / 12px font,
        Large: 8px radius / 14px font). Nine pointer positions are available.
      </Typography>

      <Section
        title="Placements"
        description="Tooltips can appear on any side of the trigger element."
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {placements.map((placement) => (
            <Tooltip key={placement} title={`Tooltip on ${placement}`} placement={placement}>
              <Button variant="outlined" color="neutral">{placement}</Button>
            </Tooltip>
          ))}
        </Stack>
      </Section>

      <Section
        title="Styles"
        description="Figma defines Dark (dark background) and Default (light background) styles."
      >
        <Stack direction="row" spacing={2}>
          <Tooltip title="Dark tooltip (default)" variant="solid">
            <Button variant="outlined" color="neutral">Dark</Button>
          </Tooltip>
          <Tooltip title="Default tooltip" variant="outlined">
            <Button variant="outlined" color="neutral">Default</Button>
          </Tooltip>
        </Stack>
      </Section>

      <Section
        title="Sizes"
        description="Small tooltips are compact (12px font). Large tooltips support multi-line content (14px font)."
      >
        <Stack direction="row" spacing={2}>
          <Tooltip title="Small tooltip" size="sm">
            <Button variant="outlined" color="neutral">Small</Button>
          </Tooltip>
          <Tooltip title="Large tooltip with more detailed content that may span multiple lines" size="lg">
            <Button variant="outlined" color="neutral">Large</Button>
          </Tooltip>
        </Stack>
      </Section>

      <Section
        title="With Arrow"
        description="Arrow pointing to the trigger element, matching Figma pointer positions."
      >
        <Stack direction="row" spacing={2}>
          <Tooltip title="With arrow" arrow>
            <Button variant="outlined" color="neutral">Hover me</Button>
          </Tooltip>
        </Stack>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Tooltip from "@mui/joy/Tooltip";

// Basic tooltip
<Tooltip title="Helpful text">
  <Button>Hover me</Button>
</Tooltip>

// Dark style (default)
<Tooltip title="Dark tooltip" variant="solid">
  <Button>Dark</Button>
</Tooltip>

// Default (light) style
<Tooltip title="Light tooltip" variant="outlined">
  <Button>Default</Button>
</Tooltip>

// With arrow
<Tooltip title="With arrow" arrow placement="top">
  <Button>Arrow</Button>
</Tooltip>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "title", type: "ReactNode", default: "-" },
            { name: "variant", type: '"solid" | "outlined"', default: '"solid"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "placement", type: '"top" | "bottom" | "left" | "right" | ...', default: '"bottom"' },
            { name: "arrow", type: "boolean", default: "false" },
          ]}
        />
      </Section>
    </Box>
  );
}
