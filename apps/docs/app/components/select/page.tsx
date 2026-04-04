"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { DemoBox } from "../demo-box";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  Select styles: Default, Soft
  Select sizes:  md, lg
  Select states: Default, Focus, Filled, Error, Disabled
  Select types:  Default, Avatar, Multi-select, Tags
*/

export default function SelectPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 0.5 }}>
        Select
      </Typography>
      <Typography level="body-md" sx={{ mb: 5, color: "text.secondary" }}>
        Select menus let users choose from a list of options. Weaver selects use
        8px border-radius, 15px font size, and heights of 32px (md) and 36px (lg),
        matching the Input component. Two styles: Default and Soft.
      </Typography>

      <Section
        title="Styles"
        description="Two styles from Figma: Default (bordered) and Soft (filled)."
      >
        <DemoBox
          code={`<FormControl>
  <FormLabel>Default style</FormLabel>
  <Select placeholder="Choose an option...">
    <Option value="opt1">Option 1</Option>
    <Option value="opt2">Option 2</Option>
    <Option value="opt3">Option 3</Option>
  </Select>
</FormControl>
<FormControl>
  <FormLabel>Soft style</FormLabel>
  <Select variant="soft" placeholder="Choose an option...">
    <Option value="opt1">Option 1</Option>
    <Option value="opt2">Option 2</Option>
    <Option value="opt3">Option 3</Option>
  </Select>
</FormControl>`}
        >
          <Stack spacing={2} sx={{ maxWidth: 400, width: "100%" }}>
            <FormControl>
              <FormLabel>Default style</FormLabel>
              <Select placeholder="Choose an option...">
                <Option value="opt1">Option 1</Option>
                <Option value="opt2">Option 2</Option>
                <Option value="opt3">Option 3</Option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Soft style</FormLabel>
              <Select variant="soft" placeholder="Choose an option...">
                <Option value="opt1">Option 1</Option>
                <Option value="opt2">Option 2</Option>
                <Option value="opt3">Option 3</Option>
              </Select>
            </FormControl>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Sizes"
        description="Two sizes: md (32px) and lg (36px)."
      >
        <DemoBox
          code={`<Select size="md" placeholder="Medium select">
  <Option value="a">Option A</Option>
  <Option value="b">Option B</Option>
</Select>
<Select size="lg" placeholder="Large select">
  <Option value="a">Option A</Option>
  <Option value="b">Option B</Option>
</Select>`}
        >
          <Stack spacing={2} sx={{ maxWidth: 400, width: "100%" }}>
            <FormControl>
              <FormLabel>Medium (md) — 32px</FormLabel>
              <Select size="md" placeholder="Medium select">
                <Option value="a">Option A</Option>
                <Option value="b">Option B</Option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Large (lg) — 36px</FormLabel>
              <Select size="lg" placeholder="Large select">
                <Option value="a">Option A</Option>
                <Option value="b">Option B</Option>
              </Select>
            </FormControl>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="States"
        description="Figma states: Default, Focus, Filled, Error, Disabled."
      >
        <DemoBox
          code={`<FormControl>
  <FormLabel>Default</FormLabel>
  <Select placeholder="Choose...">
    <Option value="a">Option A</Option>
  </Select>
</FormControl>
<FormControl error>
  <FormLabel>Error</FormLabel>
  <Select placeholder="Choose..." color="danger">
    <Option value="a">Option A</Option>
  </Select>
  <FormHelperText>Please select an option</FormHelperText>
</FormControl>
<FormControl disabled>
  <FormLabel>Disabled</FormLabel>
  <Select placeholder="Choose..." disabled>
    <Option value="a">Option A</Option>
  </Select>
</FormControl>`}
        >
          <Stack spacing={2} sx={{ maxWidth: 400, width: "100%" }}>
            <FormControl>
              <FormLabel>Default</FormLabel>
              <Select placeholder="Choose...">
                <Option value="a">Option A</Option>
              </Select>
            </FormControl>
            <FormControl error>
              <FormLabel>Error</FormLabel>
              <Select placeholder="Choose..." color="danger">
                <Option value="a">Option A</Option>
              </Select>
              <FormHelperText>Please select an option</FormHelperText>
            </FormControl>
            <FormControl disabled>
              <FormLabel>Disabled</FormLabel>
              <Select placeholder="Choose..." disabled>
                <Option value="a">Option A</Option>
              </Select>
            </FormControl>
          </Stack>
        </DemoBox>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";

// Default select
<FormControl>
  <FormLabel>Country</FormLabel>
  <Select placeholder="Choose a country...">
    <Option value="eg">Egypt</Option>
    <Option value="sa">Saudi Arabia</Option>
    <Option value="ae">UAE</Option>
  </Select>
</FormControl>

// Soft style
<Select variant="soft" placeholder="Choose..." />

// Error state
<FormControl error>
  <FormLabel>Required field</FormLabel>
  <Select color="danger" placeholder="Select..." />
</FormControl>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "variant", type: '"outlined" | "soft"', default: '"outlined"' },
            { name: "size", type: '"md" | "lg"', default: '"md"' },
            { name: "color", type: '"neutral" | "danger"', default: '"neutral"' },
            { name: "placeholder", type: "string", default: "-" },
            { name: "disabled", type: "boolean", default: "false" },
            { name: "defaultValue", type: "string", default: "-" },
            { name: "value", type: "string", default: "-" },
            { name: "onChange", type: "(event, value) => void", default: "-" },
          ]}
        />
      </Section>
    </Box>
  );
}
