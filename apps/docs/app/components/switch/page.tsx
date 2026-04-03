"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Switch from "@mui/joy/Switch";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

const colors = ["primary", "neutral", "danger", "success", "warning"] as const;
const sizes = ["sm", "md", "lg"] as const;

export default function SwitchPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Switch
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Switches toggle a single setting on or off. Weaver uses green (#0BAE45)
        for the active track, slate gray for inactive, and white thumbs. Track
        sizes are sm (32x20, 14px thumb) and md (40x24, 18px thumb).
      </Typography>

      <Section
        title="Default"
        description="Off and on states of the switch."
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <Switch />
          <Switch defaultChecked />
        </Stack>
      </Section>

      <Section
        title="Sizes"
        description="Three sizes to fit different layout densities."
      >
        <Stack direction="row" spacing={3} alignItems="center">
          {sizes.map((size) => (
            <Switch key={size} size={size} defaultChecked />
          ))}
        </Stack>
      </Section>

      <Section
        title="Colors"
        description="Semantic colors communicate the purpose of the toggle."
      >
        <Stack direction="row" spacing={3} alignItems="center" flexWrap="wrap" useFlexGap>
          {colors.map((color) => (
            <Stack key={color} spacing={0.5} alignItems="center">
              <Switch color={color} defaultChecked />
              <Typography level="body-xs">{color}</Typography>
            </Stack>
          ))}
        </Stack>
      </Section>

      <Section
        title="States"
        description="Disabled switches cannot be toggled."
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <Stack spacing={0.5} alignItems="center">
            <Switch disabled />
            <Typography level="body-xs">Disabled off</Typography>
          </Stack>
          <Stack spacing={0.5} alignItems="center">
            <Switch disabled defaultChecked />
            <Typography level="body-xs">Disabled on</Typography>
          </Stack>
        </Stack>
      </Section>

      <Section
        title="With Decorators"
        description="Add labels or icons alongside the switch."
      >
        <Stack spacing={2}>
          <Switch
            startDecorator={<Typography level="body-sm">Off</Typography>}
            endDecorator={<Typography level="body-sm">On</Typography>}
          />
          <Switch
            defaultChecked
            startDecorator={<Typography level="body-sm">Dark mode</Typography>}
          />
        </Stack>
      </Section>

      <Section
        title="Size x Color Matrix"
        description="Every size and color combination."
      >
        <Box sx={{ overflowX: "auto" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "60px repeat(5, auto)",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Box />
            {colors.map((color) => (
              <Typography key={color} level="body-xs" fontFamily="monospace" textAlign="center">
                {color}
              </Typography>
            ))}
            {sizes.map((size) => (
              <Box key={size} sx={{ display: "contents" }}>
                <Typography level="body-xs" fontFamily="monospace">
                  {size}
                </Typography>
                {colors.map((color) => (
                  <Switch key={color} size={size} color={color} defaultChecked />
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Switch from "@mui/joy/Switch";
import Typography from "@mui/joy/Typography";

// Basic switch
<Switch />
<Switch defaultChecked />

// With size and color
<Switch size="lg" color="success" />

// With labels
<Switch
  startDecorator={<Typography level="body-sm">Off</Typography>}
  endDecorator={<Typography level="body-sm">On</Typography>}
/>

// Controlled
const [checked, setChecked] = useState(false);
<Switch
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"neutral"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "defaultChecked", type: "boolean", default: "false" },
            { name: "checked", type: "boolean", default: "-" },
            { name: "onChange", type: "(event) => void", default: "-" },
            { name: "disabled", type: "boolean", default: "false" },
            { name: "startDecorator", type: "ReactNode", default: "-" },
            { name: "endDecorator", type: "ReactNode", default: "-" },
          ]}
        />
      </Section>
    </Box>
  );
}
