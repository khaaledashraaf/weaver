import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

const variants = ["solid", "soft", "outlined", "plain"] as const;
const colors = ["primary", "neutral", "danger", "success", "warning"] as const;
const sizes = ["sm", "md", "lg"] as const;

export default function ButtonsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Button
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Buttons allow users to take actions and make choices with a single tap.
        The Weaver theme applies custom border-radius, font weights, and color
        palettes to the standard Joy UI Button component.
      </Typography>

      <Section
        title="Variants"
        description="Buttons come in four variants that communicate different levels of emphasis."
      >
        <Stack spacing={2}>
          {variants.map((variant) => (
            <Box key={variant}>
              <Typography level="title-sm" sx={{ mb: 1, textTransform: "capitalize" }}>
                {variant}
              </Typography>
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                {colors.map((color) => (
                  <Button key={color} variant={variant} color={color}>
                    {color}
                  </Button>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Section>

      <Section
        title="Sizes"
        description="Three sizes are available to fit different layout densities."
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          {sizes.map((size) => (
            <Button key={size} size={size}>
              {size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"}
            </Button>
          ))}
        </Stack>
      </Section>

      <Section
        title="States"
        description="Buttons support disabled and loading states."
      >
        <Stack spacing={2}>
          <Typography level="title-sm">Disabled</Typography>
          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            <Button disabled variant="solid">Disabled Solid</Button>
            <Button disabled variant="soft">Disabled Soft</Button>
            <Button disabled variant="outlined">Disabled Outlined</Button>
            <Button disabled variant="plain">Disabled Plain</Button>
          </Stack>
          <Typography level="title-sm">Loading</Typography>
          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            <Button loading variant="solid">Loading</Button>
            <Button loading variant="soft">Loading</Button>
            <Button loading variant="outlined">Loading</Button>
          </Stack>
        </Stack>
      </Section>

      <Section
        title="Icon Buttons"
        description="Use IconButton for actions represented by a single icon."
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          {sizes.map((size) => (
            <IconButton key={size} size={size} variant="outlined" color="neutral">
              +
            </IconButton>
          ))}
          <IconButton variant="solid" color="primary">+</IconButton>
          <IconButton variant="soft" color="danger">X</IconButton>
          <IconButton variant="plain" color="success">!</IconButton>
        </Stack>
      </Section>

      <Section
        title="With Decorators"
        description="Add icons or elements before and after the label."
      >
        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          <Button startDecorator="+" variant="solid" color="primary">
            Add Item
          </Button>
          <Button endDecorator=">" variant="outlined" color="neutral">
            Next
          </Button>
          <Button startDecorator="<" endDecorator=">" variant="soft" color="neutral">
            Navigate
          </Button>
        </Stack>
      </Section>

      <Section
        title="Variant x Color Matrix"
        description="A comprehensive grid showing every variant and color combination."
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
                  <Button key={color} variant={variant} color={color} size="sm">
                    Label
                  </Button>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";

// Basic button
<Button variant="solid" color="primary">
  Save Changes
</Button>

// With decorators
<Button startDecorator={<AddIcon />} variant="soft">
  Add Item
</Button>

// Icon button
<IconButton variant="outlined" color="neutral">
  <SettingsIcon />
</IconButton>

// Disabled
<Button disabled>Cannot Click</Button>

// Loading
<Button loading>Submitting...</Button>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "variant", type: '"solid" | "soft" | "outlined" | "plain"', default: '"solid"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"primary"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "disabled", type: "boolean", default: "false" },
            { name: "loading", type: "boolean", default: "false" },
            { name: "startDecorator", type: "ReactNode", default: "-" },
            { name: "endDecorator", type: "ReactNode", default: "-" },
            { name: "fullWidth", type: "boolean", default: "false" },
          ]}
        />
      </Section>
    </Box>
  );
}
