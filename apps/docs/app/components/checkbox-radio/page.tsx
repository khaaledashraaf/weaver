"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

const colors = ["primary", "neutral", "danger", "success", "warning"] as const;
const sizes = ["sm", "md", "lg"] as const;

export default function CheckboxRadioPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Checkbox & Radio
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Checkboxes allow users to select one or more items from a set, while
        radio buttons let users select exactly one option from a group. Weaver
        checkboxes are 16px with 4px radius and 8px gap to labels. Radio buttons
        are 16px circles with 10px gap to labels.
      </Typography>

      {/* Checkbox sections */}
      <Section
        title="Checkbox Variants"
        description="Checkboxes in different states."
      >
        <Stack spacing={1.5}>
          <Checkbox label="Default checkbox" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Disabled checked" disabled defaultChecked />
          <Checkbox label="Indeterminate" indeterminate />
        </Stack>
      </Section>

      <Section
        title="Checkbox Sizes"
        description="Three sizes available for different densities."
      >
        <Stack direction="row" spacing={3}>
          {sizes.map((size) => (
            <Checkbox key={size} size={size} label={size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"} defaultChecked />
          ))}
        </Stack>
      </Section>

      <Section
        title="Checkbox Colors"
        description="Semantic colors for different contexts."
      >
        <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
          {colors.map((color) => (
            <Checkbox key={color} color={color} label={color} defaultChecked />
          ))}
        </Stack>
      </Section>

      <Section
        title="Checkbox Variants"
        description="Checkboxes support solid, soft, outlined, and plain variants."
      >
        <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
          <Checkbox variant="solid" label="Solid" defaultChecked />
          <Checkbox variant="soft" label="Soft" defaultChecked />
          <Checkbox variant="outlined" label="Outlined" defaultChecked />
          <Checkbox variant="plain" label="Plain" defaultChecked />
        </Stack>
      </Section>

      {/* Radio sections */}
      <Section
        title="Radio Group"
        description="Radio buttons are grouped using RadioGroup to ensure single selection."
      >
        <RadioGroup defaultValue="option1">
          <Radio value="option1" label="Option 1" />
          <Radio value="option2" label="Option 2" />
          <Radio value="option3" label="Option 3" />
          <Radio value="disabled" label="Disabled option" disabled />
        </RadioGroup>
      </Section>

      <Section
        title="Radio Sizes"
        description="Three sizes match checkbox sizing."
      >
        <Stack direction="row" spacing={3}>
          {sizes.map((size) => (
            <Radio key={size} size={size} label={size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"} defaultChecked />
          ))}
        </Stack>
      </Section>

      <Section
        title="Radio Colors"
        description="Semantic colors applied to radio buttons."
      >
        <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
          {colors.map((color) => (
            <Radio key={color} color={color} label={color} defaultChecked />
          ))}
        </Stack>
      </Section>

      <Section
        title="Horizontal Radio Group"
        description="Layout radio options in a row."
      >
        <RadioGroup orientation="horizontal" defaultValue="a">
          <Radio value="a" label="Option A" />
          <Radio value="b" label="Option B" />
          <Radio value="c" label="Option C" />
        </RadioGroup>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Checkbox from "@mui/joy/Checkbox";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";

// Checkbox
<Checkbox label="Accept terms" />
<Checkbox defaultChecked label="Subscribed" />
<Checkbox indeterminate label="Partial" />

// Radio group
<RadioGroup defaultValue="small">
  <Radio value="small" label="Small" />
  <Radio value="medium" label="Medium" />
  <Radio value="large" label="Large" />
</RadioGroup>

// Horizontal radio group
<RadioGroup orientation="horizontal" defaultValue="a">
  <Radio value="a" label="A" />
  <Radio value="b" label="B" />
</RadioGroup>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <Typography level="title-sm" sx={{ mb: 1 }}>Checkbox</Typography>
        <PropsTable
          props={[
            { name: "label", type: "ReactNode", default: "-" },
            { name: "variant", type: '"solid" | "soft" | "outlined" | "plain"', default: '"solid"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"primary"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "defaultChecked", type: "boolean", default: "false" },
            { name: "checked", type: "boolean", default: "-" },
            { name: "indeterminate", type: "boolean", default: "false" },
            { name: "disabled", type: "boolean", default: "false" },
          ]}
        />
        <Typography level="title-sm" sx={{ mt: 3, mb: 1 }}>Radio</Typography>
        <PropsTable
          props={[
            { name: "label", type: "ReactNode", default: "-" },
            { name: "value", type: "string", default: "-" },
            { name: "variant", type: '"solid" | "soft" | "outlined" | "plain"', default: '"outlined"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"primary"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "disabled", type: "boolean", default: "false" },
          ]}
        />
        <Typography level="title-sm" sx={{ mt: 3, mb: 1 }}>RadioGroup</Typography>
        <PropsTable
          props={[
            { name: "defaultValue", type: "string", default: "-" },
            { name: "value", type: "string", default: "-" },
            { name: "onChange", type: "(event) => void", default: "-" },
            { name: "orientation", type: '"vertical" | "horizontal"', default: '"vertical"' },
          ]}
        />
      </Section>
    </Box>
  );
}
