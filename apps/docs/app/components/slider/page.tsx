"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Slider from "@mui/joy/Slider";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

const colors = ["primary", "neutral", "danger", "success", "warning"] as const;

export default function SliderPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Slider
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Sliders allow users to select a value from a continuous range. Weaver
        uses a 4px track and 24px thumb with subtle shadow.
      </Typography>

      <Section
        title="Basic"
        description="A simple slider with default settings."
      >
        <Box sx={{ px: 2, maxWidth: 400 }}>
          <Slider defaultValue={40} />
        </Box>
      </Section>

      <Section
        title="Range"
        description="Select a range by providing an array value."
      >
        <Box sx={{ px: 2, maxWidth: 400 }}>
          <Slider defaultValue={[20, 60]} />
        </Box>
      </Section>

      <Section
        title="Colors"
        description="Sliders support all semantic colors."
      >
        <Stack spacing={3} sx={{ px: 2, maxWidth: 400 }}>
          {colors.map((color) => (
            <Box key={color}>
              <Typography level="body-xs" sx={{ mb: 1, textTransform: "capitalize" }}>
                {color}
              </Typography>
              <Slider defaultValue={50} color={color} />
            </Box>
          ))}
        </Stack>
      </Section>

      <Section
        title="Sizes"
        description="Three size options."
      >
        <Stack spacing={3} sx={{ px: 2, maxWidth: 400 }}>
          {(["sm", "md", "lg"] as const).map((size) => (
            <Box key={size}>
              <Typography level="body-xs" sx={{ mb: 1 }}>{size}</Typography>
              <Slider defaultValue={50} size={size} />
            </Box>
          ))}
        </Stack>
      </Section>

      <Section
        title="With Marks"
        description="Display tick marks along the track."
      >
        <Box sx={{ px: 2, maxWidth: 400 }}>
          <Slider
            defaultValue={30}
            step={10}
            marks
            min={0}
            max={100}
          />
        </Box>
      </Section>

      <Section
        title="Disabled"
        description="A disabled slider cannot be interacted with."
      >
        <Box sx={{ px: 2, maxWidth: 400 }}>
          <Slider defaultValue={40} disabled />
        </Box>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Slider from "@mui/joy/Slider";

// Basic slider
<Slider defaultValue={50} />

// Range slider
<Slider defaultValue={[20, 60]} />

// With marks and steps
<Slider step={10} marks min={0} max={100} />

// Controlled
<Slider value={value} onChange={(e, val) => setValue(val)} />`}</CodeBlock>
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
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"primary"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          ]}
        />
      </Section>
    </Box>
  );
}
