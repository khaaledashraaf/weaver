import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

const sizes = ["sm", "md", "lg"] as const;
const variants = ["outlined", "soft", "plain"] as const;
const colors = ["primary", "neutral", "danger", "success", "warning"] as const;

export default function SelectPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Select
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Select menus let users choose a single value from a list of options. The
        Weaver theme styles the trigger, dropdown panel, and individual options
        with consistent border-radius, spacing, and color tokens.
      </Typography>

      <Section
        title="Variants"
        description="Select supports outlined, soft, and plain variants."
      >
        <Stack spacing={2} sx={{ maxWidth: 300 }}>
          {variants.map((variant) => (
            <Select key={variant} variant={variant} placeholder={`${variant} variant`}>
              <Option value="1">Option 1</Option>
              <Option value="2">Option 2</Option>
              <Option value="3">Option 3</Option>
            </Select>
          ))}
        </Stack>
      </Section>

      <Section
        title="Sizes"
        description="Three sizes to match different layout densities."
      >
        <Stack spacing={2} sx={{ maxWidth: 300 }}>
          {sizes.map((size) => (
            <Select key={size} size={size} placeholder={`${size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"}`}>
              <Option value="1">Option 1</Option>
              <Option value="2">Option 2</Option>
              <Option value="3">Option 3</Option>
            </Select>
          ))}
        </Stack>
      </Section>

      <Section
        title="Colors"
        description="Apply semantic colors to communicate context."
      >
        <Stack spacing={2} sx={{ maxWidth: 300 }}>
          {colors.map((color) => (
            <Select key={color} color={color} placeholder={`${color}`}>
              <Option value="1">Option 1</Option>
              <Option value="2">Option 2</Option>
            </Select>
          ))}
        </Stack>
      </Section>

      <Section
        title="States"
        description="Disabled state prevents user interaction."
      >
        <Select disabled placeholder="Disabled" sx={{ maxWidth: 300 }}>
          <Option value="1">Option 1</Option>
        </Select>
      </Section>

      <Section
        title="With Form Control"
        description="Compose with FormControl and FormLabel for accessible forms."
      >
        <Stack spacing={3} sx={{ maxWidth: 300 }}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder="Select a country">
              <Option value="us">United States</Option>
              <Option value="uk">United Kingdom</Option>
              <Option value="ae">United Arab Emirates</Option>
              <Option value="eg">Egypt</Option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Role</FormLabel>
            <Select placeholder="Choose role" size="sm">
              <Option value="admin">Admin</Option>
              <Option value="editor">Editor</Option>
              <Option value="viewer">Viewer</Option>
            </Select>
            <FormHelperText>Determines access level.</FormHelperText>
          </FormControl>
        </Stack>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";

// Basic select
<Select placeholder="Pick one">
  <Option value="a">Option A</Option>
  <Option value="b">Option B</Option>
</Select>

// With form control
<FormControl>
  <FormLabel>Country</FormLabel>
  <Select placeholder="Select a country">
    <Option value="us">United States</Option>
    <Option value="uk">United Kingdom</Option>
  </Select>
</FormControl>

// Controlled
const [value, setValue] = useState<string | null>(null);
<Select value={value} onChange={(_, v) => setValue(v)}>
  <Option value="a">A</Option>
</Select>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <Typography level="title-sm" sx={{ mb: 1 }}>Select</Typography>
        <PropsTable
          props={[
            { name: "variant", type: '"outlined" | "soft" | "plain"', default: '"outlined"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"neutral"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "placeholder", type: "string", default: "-" },
            { name: "disabled", type: "boolean", default: "false" },
            { name: "value", type: "string | null", default: "-" },
            { name: "defaultValue", type: "string | null", default: "-" },
            { name: "onChange", type: "(event, value) => void", default: "-" },
          ]}
        />
      </Section>
    </Box>
  );
}
