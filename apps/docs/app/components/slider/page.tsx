"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Slider from "@mui/joy/Slider";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  _Slider Handle: state (Default/Hover/Focus), indicator (None/Lower Text/Upper Text/Upper Tooltip/Lower Tooltip)
  Single node slider: Type (Only line/Lower Text/Upper Text/Lower Tooltip/Upper Tooltip), Progress (0-100%)
  Double node slider: Type (Only Line/Lower Text/Upper Text/Lower Tooltip/Upper Tooltip)
  Track: 4px, Thumb: 24px
*/

export default function SliderPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Slider
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Sliders select a value from a continuous range. Weaver uses a 4px track
        and 24px thumb. Figma defines single and double node variants with
        optional text or tooltip indicators.
      </Typography>

      <Section
        title="Single Node"
        description="Figma Single node slider — basic track with one handle."
      >
        <Box sx={{ px: 2, maxWidth: 400 }}>
          <Slider defaultValue={40} />
        </Box>
      </Section>

      <Section
        title="Double Node (Range)"
        description="Figma Double node slider — two handles for selecting a range."
      >
        <Box sx={{ px: 2, maxWidth: 400 }}>
          <Slider defaultValue={[20, 60]} />
        </Box>
      </Section>

      <Section
        title="With Marks"
        description="Display tick marks along the track."
      >
        <Box sx={{ px: 2, maxWidth: 400 }}>
          <Slider defaultValue={30} step={10} marks min={0} max={100} />
        </Box>
      </Section>

      <Section
        title="States"
        description="Figma handle states: Default, Hover, Focus."
      >
        <Stack spacing={3} sx={{ px: 2, maxWidth: 400 }}>
          <Box>
            <Typography level="body-xs" sx={{ mb: 1 }}>Default</Typography>
            <Slider defaultValue={50} />
          </Box>
          <Box>
            <Typography level="body-xs" sx={{ mb: 1 }}>Disabled</Typography>
            <Slider defaultValue={50} disabled />
          </Box>
        </Stack>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Slider from "@mui/joy/Slider";

// Single node
<Slider defaultValue={50} />

// Double node (range)
<Slider defaultValue={[20, 60]} />

// With marks
<Slider step={10} marks min={0} max={100} />`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "defaultValue", type: "number | number[]", default: "-" },
            { name: "value", type: "number | number[]", default: "-" },
            { name: "onChange", type: "(event, value) => void", default: "-" },
            { name: "min", type: "number", default: "0" },
            { name: "max", type: "number", default: "100" },
            { name: "step", type: "number", default: "1" },
            { name: "marks", type: "boolean", default: "false" },
            { name: "disabled", type: "boolean", default: "false" },
          ]}
        />
      </Section>
    </Box>
  );
}
