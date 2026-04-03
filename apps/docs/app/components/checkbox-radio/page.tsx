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

/* ── Figma variants ──
  Checkbox: Check (True/False), Indeterminate (True/False), State (Default/Hover/Focused/Disabled)
  Checkbox Label: checkLocation (Leading/Trailing), hasSupportText (True/False)
  Single size only: 16px box, 4px radius

  Radio: isActive (True/False), State (Default/Hover/Focus/Disabled)
  Radio Label: radioLocation (Leading/Trailing), hasSupportText (True/False)
  Single size only: 16px circle
*/

export default function CheckboxRadioPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Checkbox & Radio
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Checkboxes allow multi-selection, radios allow single selection. Weaver
        checkboxes are 16px with 4px radius and 8px gap to labels. Radio buttons
        are 16px circles with 10px gap to labels. Both have a single size in Figma.
      </Typography>

      <Section
        title="Checkbox States"
        description="Figma states: Default, Hover, Focused, Disabled. Values: Unchecked, Checked, Indeterminate."
      >
        <Stack spacing={2}>
          <Stack direction="row" spacing={3}>
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked" defaultChecked />
            <Checkbox label="Indeterminate" indeterminate />
          </Stack>
          <Stack direction="row" spacing={3}>
            <Checkbox label="Disabled unchecked" disabled />
            <Checkbox label="Disabled checked" disabled defaultChecked />
          </Stack>
        </Stack>
      </Section>

      <Section
        title="Checkbox with Support Text"
        description="Figma Checkbox Label supports optional supporting text below the label."
      >
        <Stack spacing={2}>
          <Checkbox
            label={
              <Box>
                <Typography level="body-sm" fontWeight={500}>Option A</Typography>
                <Typography level="body-xs" sx={{ color: "text.tertiary" }}>
                  Supporting text for this option
                </Typography>
              </Box>
            }
          />
          <Checkbox
            label={
              <Box>
                <Typography level="body-sm" fontWeight={500}>Option B</Typography>
                <Typography level="body-xs" sx={{ color: "text.tertiary" }}>
                  Supporting text for this option
                </Typography>
              </Box>
            }
          />
        </Stack>
      </Section>

      <Section
        title="Radio States"
        description="Figma states: Default, Hover, Focus, Disabled. Active: True/False."
      >
        <RadioGroup defaultValue="active">
          <Stack spacing={1.5}>
            <Radio value="active" label="Active (selected)" />
            <Radio value="inactive" label="Inactive" />
            <Radio value="disabled" label="Disabled" disabled />
          </Stack>
        </RadioGroup>
      </Section>

      <Section
        title="Radio with Support Text"
        description="Figma Radio Label supports optional supporting text."
      >
        <RadioGroup defaultValue="opt1">
          <Stack spacing={2}>
            <Radio
              value="opt1"
              label={
                <Box>
                  <Typography level="body-sm" fontWeight={500}>Option 1</Typography>
                  <Typography level="body-xs" sx={{ color: "text.tertiary" }}>
                    Description for option 1
                  </Typography>
                </Box>
              }
            />
            <Radio
              value="opt2"
              label={
                <Box>
                  <Typography level="body-sm" fontWeight={500}>Option 2</Typography>
                  <Typography level="body-xs" sx={{ color: "text.tertiary" }}>
                    Description for option 2
                  </Typography>
                </Box>
              }
            />
          </Stack>
        </RadioGroup>
      </Section>

      <Section
        title="Horizontal Radio Group"
        description="Radio groups can be laid out horizontally."
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
<Checkbox label="Checked" defaultChecked />
<Checkbox label="Indeterminate" indeterminate />
<Checkbox label="Disabled" disabled />

// Radio group
<RadioGroup defaultValue="opt1">
  <Radio value="opt1" label="Option 1" />
  <Radio value="opt2" label="Option 2" />
</RadioGroup>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <Typography level="title-sm" sx={{ mb: 1 }}>Checkbox</Typography>
        <PropsTable
          props={[
            { name: "label", type: "ReactNode", default: "-" },
            { name: "defaultChecked", type: "boolean", default: "false" },
            { name: "checked", type: "boolean", default: "-" },
            { name: "indeterminate", type: "boolean", default: "false" },
            { name: "disabled", type: "boolean", default: "false" },
            { name: "onChange", type: "(event) => void", default: "-" },
          ]}
        />
        <Typography level="title-sm" sx={{ mt: 3, mb: 1 }}>Radio</Typography>
        <PropsTable
          props={[
            { name: "label", type: "ReactNode", default: "-" },
            { name: "value", type: "string", default: "-" },
            { name: "disabled", type: "boolean", default: "false" },
          ]}
        />
      </Section>
    </Box>
  );
}
