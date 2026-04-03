"use client";

import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Tooltip from "@mui/joy/Tooltip";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

const variants = ["solid", "soft", "outlined", "plain"] as const;
const colors = ["primary", "neutral", "danger", "success", "warning"] as const;
const placements = ["top", "bottom", "left", "right"] as const;

export default function TooltipsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Tooltip
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Tooltips display informative text when users hover over, focus on, or
        tap an element. Weaver tooltips use 6px border-radius, 12px font size
        with 500 weight, and 6px/8px padding.
      </Typography>

      <Section
        title="Placements"
        description="Tooltips can appear on any side of the trigger element."
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {placements.map((placement) => (
            <Tooltip key={placement} title={`${placement} tooltip`} placement={placement}>
              <Button variant="outlined" color="neutral">
                {placement}
              </Button>
            </Tooltip>
          ))}
        </Stack>
      </Section>

      <Section
        title="Variants"
        description="Four variants control the visual style of the tooltip surface."
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {variants.map((variant) => (
            <Tooltip key={variant} title={`${variant} tooltip`} variant={variant}>
              <Button variant="soft" color="neutral">
                {variant}
              </Button>
            </Tooltip>
          ))}
        </Stack>
      </Section>

      <Section
        title="Colors"
        description="Semantic colors for different contexts."
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {colors.map((color) => (
            <Tooltip key={color} title={`${color} tooltip`} color={color}>
              <Button variant="soft" color={color}>
                {color}
              </Button>
            </Tooltip>
          ))}
        </Stack>
      </Section>

      <Section
        title="With Arrow"
        description="Add an arrow indicator pointing to the trigger element."
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Tooltip title="Arrow tooltip" arrow placement="top">
            <Button variant="outlined" color="neutral">Top arrow</Button>
          </Tooltip>
          <Tooltip title="Arrow tooltip" arrow placement="bottom">
            <Button variant="outlined" color="neutral">Bottom arrow</Button>
          </Tooltip>
          <Tooltip title="Arrow tooltip" arrow placement="left">
            <Button variant="outlined" color="neutral">Left arrow</Button>
          </Tooltip>
          <Tooltip title="Arrow tooltip" arrow placement="right">
            <Button variant="outlined" color="neutral">Right arrow</Button>
          </Tooltip>
        </Stack>
      </Section>

      <Section
        title="Sizes"
        description="Tooltips support small, medium, and large sizes."
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Tooltip title="Small tooltip" size="sm">
            <Button variant="soft" size="sm">Small</Button>
          </Tooltip>
          <Tooltip title="Medium tooltip" size="md">
            <Button variant="soft" size="md">Medium</Button>
          </Tooltip>
          <Tooltip title="Large tooltip" size="lg">
            <Button variant="soft" size="lg">Large</Button>
          </Tooltip>
        </Stack>
      </Section>

      <Section
        title="Variant x Color Matrix"
        description="Hover over each button to see all tooltip combinations."
      >
        <Box sx={{ overflowX: "auto" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "80px repeat(5, 1fr)",
              gap: 1.5,
              minWidth: 600,
              alignItems: "center",
            }}
          >
            <Box />
            {colors.map((color) => (
              <Typography key={color} level="body-xs" fontFamily="monospace" textAlign="center">
                {color}
              </Typography>
            ))}
            {variants.map((variant) => (
              <Box key={variant} sx={{ display: "contents" }}>
                <Typography level="body-xs" fontFamily="monospace">
                  {variant}
                </Typography>
                {colors.map((color) => (
                  <Tooltip key={color} title={`${variant}/${color}`} variant={variant} color={color} arrow>
                    <Button variant="outlined" color="neutral" size="sm" fullWidth>
                      Hover
                    </Button>
                  </Tooltip>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Tooltip from "@mui/joy/Tooltip";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";

// Basic tooltip
<Tooltip title="Delete">
  <IconButton>
    <DeleteIcon />
  </IconButton>
</Tooltip>

// With placement
<Tooltip title="Settings" placement="right">
  <Button>Settings</Button>
</Tooltip>

// With arrow
<Tooltip title="Important info" arrow>
  <Button>Hover me</Button>
</Tooltip>

// Styled tooltip
<Tooltip title="Warning" variant="soft" color="warning" size="sm">
  <Button>Warning</Button>
</Tooltip>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "title", type: "ReactNode", default: "-" },
            { name: "placement", type: '"top" | "bottom" | "left" | "right" | ...', default: '"bottom"' },
            { name: "variant", type: '"solid" | "soft" | "outlined" | "plain"', default: '"solid"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"neutral"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "arrow", type: "boolean", default: "false" },
            { name: "open", type: "boolean", default: "-" },
            { name: "enterDelay", type: "number", default: "100" },
            { name: "leaveDelay", type: "number", default: "0" },
          ]}
        />
      </Section>
    </Box>
  );
}
