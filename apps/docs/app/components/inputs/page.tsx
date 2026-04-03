import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

const variants = ["outlined", "soft", "plain"] as const;
const colors = ["primary", "neutral", "danger", "success", "warning"] as const;
const sizes = ["sm", "md", "lg"] as const;

export default function InputsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Input
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Input fields let users enter and edit text. The Weaver theme customizes
        border-radius, focus rings, and color tokens for a cohesive look. Pair
        with FormControl, FormLabel, and FormHelperText for complete form fields.
      </Typography>

      <Section
        title="Variants"
        description="Inputs support outlined, soft, and plain variants."
      >
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          {variants.map((variant) => (
            <Input key={variant} variant={variant} placeholder={`${variant} variant`} />
          ))}
        </Stack>
      </Section>

      <Section
        title="Sizes"
        description="Three sizes to match the density of your layout."
      >
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          {sizes.map((size) => (
            <Input key={size} size={size} placeholder={`${size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"} input`} />
          ))}
        </Stack>
      </Section>

      <Section
        title="Colors"
        description="Apply semantic colors to communicate context."
      >
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          {colors.map((color) => (
            <Input key={color} color={color} placeholder={`${color} color`} />
          ))}
        </Stack>
      </Section>

      <Section
        title="States"
        description="Disabled and read-only states prevent user interaction."
      >
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <Input disabled placeholder="Disabled input" />
          <Input readOnly value="Read-only value" />
        </Stack>
      </Section>

      <Section
        title="With Form Control"
        description="Compose Input with FormControl, FormLabel, and FormHelperText for accessible forms."
      >
        <Stack spacing={3} sx={{ maxWidth: 400 }}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input placeholder="you@example.com" />
            <FormHelperText>We will never share your email.</FormHelperText>
          </FormControl>
          <FormControl error>
            <FormLabel>Password</FormLabel>
            <Input type="password" color="danger" placeholder="Required" />
            <FormHelperText>Password is required.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Search</FormLabel>
            <Input startDecorator="Q" placeholder="Search..." />
          </FormControl>
        </Stack>
      </Section>

      <Section
        title="With Decorators"
        description="Prefix or suffix content inside the input."
      >
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <Input startDecorator="$" placeholder="0.00" />
          <Input endDecorator="kg" placeholder="Weight" />
          <Input startDecorator="https://" endDecorator=".com" placeholder="domain" />
        </Stack>
      </Section>

      <Section
        title="Textarea"
        description="Multi-line text input for longer content."
      >
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <Textarea minRows={3} placeholder="Write something..." />
          <Textarea minRows={3} variant="soft" placeholder="Soft textarea" />
          <Textarea minRows={3} disabled placeholder="Disabled textarea" />
        </Stack>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";

// Basic input
<Input placeholder="Enter text..." />

// With form control
<FormControl>
  <FormLabel>Email</FormLabel>
  <Input placeholder="you@example.com" />
  <FormHelperText>We won't share your email.</FormHelperText>
</FormControl>

// Error state
<FormControl error>
  <FormLabel>Password</FormLabel>
  <Input type="password" color="danger" />
  <FormHelperText>Password is required.</FormHelperText>
</FormControl>

// Textarea
<Textarea minRows={3} placeholder="Long text..." />`}</CodeBlock>
      </Section>

      <Section title="Props">
        <Typography level="title-sm" sx={{ mb: 1 }}>Input</Typography>
        <PropsTable
          props={[
            { name: "variant", type: '"outlined" | "soft" | "plain"', default: '"outlined"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"neutral"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "disabled", type: "boolean", default: "false" },
            { name: "readOnly", type: "boolean", default: "false" },
            { name: "startDecorator", type: "ReactNode", default: "-" },
            { name: "endDecorator", type: "ReactNode", default: "-" },
            { name: "placeholder", type: "string", default: "-" },
          ]}
        />
        <Typography level="title-sm" sx={{ mt: 3, mb: 1 }}>Textarea</Typography>
        <PropsTable
          props={[
            { name: "variant", type: '"outlined" | "soft" | "plain"', default: '"outlined"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"neutral"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "minRows", type: "number", default: "1" },
            { name: "maxRows", type: "number", default: "-" },
            { name: "disabled", type: "boolean", default: "false" },
          ]}
        />
      </Section>
    </Box>
  );
}
