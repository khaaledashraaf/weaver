"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Stack from "@mui/joy/Stack";
import { RiSearchLine, RiMailLine, RiLockLine, RiEyeLine } from "@remixicon/react";
import { Section } from "../section";
import { DemoBox } from "../demo-box";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  Input styles: Default, Soft
  Input sizes:  md, lg
  Input states: Default, Focus, Error, Disabled, Filled
  Input types:  Default, ShortCut, Add-on, Inline Add-on, Tags, Inline Tags,
                Trailing Dropdown, Leading Dropdown, Quantity, Trailing Button, Leading Button
*/

export default function InputsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 0.5 }}>
        Input
      </Typography>
      <Typography level="body-md" sx={{ mb: 5, color: "text.secondary" }}>
        Input fields let users enter and edit text. Weaver inputs use 8px
        border-radius, 15px font size, and heights of 32px (md) and 36px (lg).
        Two styles: Default (bordered) and Soft (filled background).
      </Typography>

      <Section
        title="Styles"
        description="Figma defines two input styles: Default (with border) and Soft (filled background, no visible border)."
      >
        <DemoBox
          code={`<FormControl>
  <FormLabel>Default style</FormLabel>
  <Input placeholder="Placeholder" />
</FormControl>
<FormControl>
  <FormLabel>Soft style</FormLabel>
  <Input placeholder="Placeholder" variant="soft" />
</FormControl>`}
        >
          <Stack spacing={2} sx={{ maxWidth: 400, width: "100%" }}>
            <FormControl>
              <FormLabel>Default style</FormLabel>
              <Input placeholder="Placeholder" />
            </FormControl>
            <FormControl>
              <FormLabel>Soft style</FormLabel>
              <Input placeholder="Placeholder" variant="soft" />
            </FormControl>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Sizes"
        description="Two sizes from Figma: md (32px height) and lg (36px height)."
      >
        <DemoBox
          code={`<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />`}
        >
          <Stack spacing={2} sx={{ maxWidth: 400, width: "100%" }}>
            <FormControl>
              <FormLabel>Medium (md) — 32px</FormLabel>
              <Input size="md" placeholder="Medium input" />
            </FormControl>
            <FormControl>
              <FormLabel>Large (lg) — 36px</FormLabel>
              <Input size="lg" placeholder="Large input" />
            </FormControl>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="States"
        description="Figma states: Default, Focus, Error, Disabled, Filled."
      >
        <DemoBox
          code={`<FormControl>
  <FormLabel>Default</FormLabel>
  <Input placeholder="Default state" />
  <FormHelperText>This is a hint text</FormHelperText>
</FormControl>
<FormControl error>
  <FormLabel>Error</FormLabel>
  <Input placeholder="Error state" color="danger" />
  <FormHelperText>Error message</FormHelperText>
</FormControl>
<FormControl disabled>
  <FormLabel>Disabled</FormLabel>
  <Input placeholder="Disabled state" />
  <FormHelperText>This is a hint text</FormHelperText>
</FormControl>
<FormControl>
  <FormLabel>Filled</FormLabel>
  <Input defaultValue="Filled value" />
  <FormHelperText>This is a hint text</FormHelperText>
</FormControl>`}
        >
          <Stack spacing={2} sx={{ maxWidth: 400, width: "100%" }}>
            <FormControl>
              <FormLabel>Default</FormLabel>
              <Input placeholder="Default state" />
              <FormHelperText>This is a hint text</FormHelperText>
            </FormControl>
            <FormControl error>
              <FormLabel>Error</FormLabel>
              <Input placeholder="Error state" color="danger" />
              <FormHelperText>Error message</FormHelperText>
            </FormControl>
            <FormControl disabled>
              <FormLabel>Disabled</FormLabel>
              <Input placeholder="Disabled state" startDecorator={<RiMailLine size={18} />} />
              <FormHelperText>This is a hint text</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Filled</FormLabel>
              <Input defaultValue="Filled value" />
              <FormHelperText>This is a hint text</FormHelperText>
            </FormControl>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="With Form Control"
        description="Inputs are typically used with FormLabel and FormHelperText, separated by 6px gap."
      >
        <DemoBox
          code={`<FormControl>
  <FormLabel>Label</FormLabel>
  <Input placeholder="Placeholder" />
  <FormHelperText>This is a hint text</FormHelperText>
</FormControl>
<FormControl error>
  <FormLabel>Label</FormLabel>
  <Input placeholder="Placeholder" color="danger" />
  <FormHelperText>Error message</FormHelperText>
</FormControl>`}
        >
          <Stack spacing={3} sx={{ maxWidth: 400, width: "100%" }}>
            <FormControl>
              <FormLabel>Label</FormLabel>
              <Input placeholder="Placeholder" />
              <FormHelperText>This is a hint text</FormHelperText>
            </FormControl>
            <FormControl error>
              <FormLabel>Label</FormLabel>
              <Input placeholder="Placeholder" color="danger" />
              <FormHelperText>Error message</FormHelperText>
            </FormControl>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="With Decorators"
        description="Leading and trailing icon slots."
      >
        <DemoBox
          code={`<Input startDecorator={<RiSearchLine size={18} />} placeholder="Search..." />
<Input startDecorator={<RiMailLine size={18} />} placeholder="Email address" />
<Input
  startDecorator={<RiLockLine size={18} />}
  endDecorator={<RiEyeLine size={18} />}
  placeholder="Password"
  type="password"
/>`}
        >
          <Stack spacing={2} sx={{ maxWidth: 400, width: "100%" }}>
            <Input startDecorator={<RiSearchLine size={18} />} placeholder="Search..." />
            <Input startDecorator={<RiMailLine size={18} />} placeholder="Email address" />
            <Input
              startDecorator={<RiLockLine size={18} />}
              endDecorator={<RiEyeLine size={18} />}
              placeholder="Password"
              type="password"
            />
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Textarea"
        description="Multi-line text input. Same 8px border-radius and 15px font as Input."
      >
        <DemoBox
          code={`<Textarea minRows={3} placeholder="Enter your message..." />
<Textarea minRows={3} variant="soft" placeholder="Soft style textarea" />`}
        >
          <Stack spacing={2} sx={{ maxWidth: 400, width: "100%" }}>
            <Textarea minRows={3} placeholder="Enter your message..." />
            <Textarea minRows={3} variant="soft" placeholder="Soft style textarea" />
          </Stack>
        </DemoBox>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";

// Default input with form control
<FormControl>
  <FormLabel>Label</FormLabel>
  <Input placeholder="Placeholder" />
  <FormHelperText>This is a hint text</FormHelperText>
</FormControl>

// Soft style
<Input variant="soft" placeholder="Soft input" />

// Error state
<FormControl error>
  <FormLabel>Email</FormLabel>
  <Input color="danger" placeholder="Email" />
  <FormHelperText>Invalid email address</FormHelperText>
</FormControl>

// Textarea
<Textarea minRows={3} placeholder="Message" />`}</CodeBlock>
      </Section>

      <Section title="Props">
        <Typography level="title-sm" sx={{ mb: 1 }}>Input</Typography>
        <PropsTable
          props={[
            { name: "variant", type: '"outlined" | "soft"', default: '"outlined"' },
            { name: "size", type: '"md" | "lg"', default: '"md"' },
            { name: "color", type: '"neutral" | "danger"', default: '"neutral"' },
            { name: "placeholder", type: "string", default: "-" },
            { name: "disabled", type: "boolean", default: "false" },
            { name: "startDecorator", type: "ReactNode", default: "-" },
            { name: "endDecorator", type: "ReactNode", default: "-" },
          ]}
        />
        <Typography level="title-sm" sx={{ mt: 3, mb: 1 }}>Textarea</Typography>
        <PropsTable
          props={[
            { name: "variant", type: '"outlined" | "soft"', default: '"outlined"' },
            { name: "minRows", type: "number", default: "-" },
            { name: "maxRows", type: "number", default: "-" },
            { name: "placeholder", type: "string", default: "-" },
            { name: "disabled", type: "boolean", default: "false" },
          ]}
        />
      </Section>
    </Box>
  );
}
