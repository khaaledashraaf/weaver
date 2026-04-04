"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Switch from "@mui/joy/Switch";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { DemoBox } from "../demo-box";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  Toggle sizes:  sm, md  (NO lg)
  Toggle states: Default, Disabled, Hover, Focused
  Toggle active: False, True
  Toggle has icon: False, True
*/

export default function SwitchPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 0.5 }}>
        Switch
      </Typography>
      <Typography level="body-md" sx={{ mb: 5, color: "text.secondary" }}>
        Switches toggle a single setting on or off. Weaver uses green (#0BAE45)
        for the active track and slate gray for inactive. Two sizes: sm (32x20
        track, 14px thumb) and md (40x24 track, 18px thumb).
      </Typography>

      <Section
        title="Default"
        description="Off and on states. Active track is green, inactive is gray."
      >
        <DemoBox
          code={`<Switch />
<Switch defaultChecked />`}
        >
          <Stack direction="row" spacing={3} alignItems="center">
            <Stack spacing={0.5} alignItems="center">
              <Switch />
              <Typography level="body-xs">Off</Typography>
            </Stack>
            <Stack spacing={0.5} alignItems="center">
              <Switch defaultChecked />
              <Typography level="body-xs">On</Typography>
            </Stack>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Sizes"
        description="Figma defines two sizes: sm and md. No lg variant exists in the design."
      >
        <DemoBox
          code={`<Switch size="sm" defaultChecked />
<Switch size="lg" defaultChecked />`}
        >
          <Stack direction="row" spacing={3} alignItems="center">
            <Stack spacing={0.5} alignItems="center">
              <Switch size="sm" defaultChecked />
              <Typography level="body-xs">sm (32x20)</Typography>
            </Stack>
            <Stack spacing={0.5} alignItems="center">
              <Switch size="lg" defaultChecked />
              <Typography level="body-xs">md (40x24)</Typography>
            </Stack>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="States"
        description="Figma states: Default, Hover, Focused, Disabled."
      >
        <DemoBox
          code={`<Switch disabled />
<Switch disabled defaultChecked />`}
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
        </DemoBox>
      </Section>

      <Section
        title="With Labels"
        description="Toggle label component from Figma supports leading and trailing label placement."
      >
        <DemoBox
          code={`<Switch
  startDecorator={<Typography level="body-sm">Dark mode</Typography>}
/>
<Switch
  defaultChecked
  endDecorator={<Typography level="body-sm">Notifications</Typography>}
/>`}
        >
          <Stack spacing={2}>
            <Switch
              startDecorator={<Typography level="body-sm">Dark mode</Typography>}
            />
            <Switch
              defaultChecked
              endDecorator={<Typography level="body-sm">Notifications</Typography>}
            />
          </Stack>
        </DemoBox>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Switch from "@mui/joy/Switch";

// Basic switch
<Switch />
<Switch defaultChecked />

// Sizes (Figma: sm and md only)
<Switch size="sm" />
<Switch size="lg" />  {/* maps to Figma md */}

// With label
<Switch
  startDecorator={<Typography>Dark mode</Typography>}
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
            { name: "size", type: '"sm" | "lg"', default: '"lg"' },
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
