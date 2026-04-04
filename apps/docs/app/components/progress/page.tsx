"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import LinearProgress from "@mui/joy/LinearProgress";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { DemoBox } from "../demo-box";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  Progress bar: Progress (0-100%), Size (lg/sm)
  _Progress line colors: Default, Green, Golden, Amber, Red, Purple, Sky, Neutral
  Progress + Label types: Top Label, Bottom Label, Only Helper Text, Inline indicator
  _Progress Indicator types: Loading, Completed, Error, Custom icon
*/

export default function ProgressPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 0.5 }}>
        Progress
      </Typography>
      <Typography level="body-md" sx={{ mb: 5, color: "text.secondary" }}>
        Progress bars show the status of ongoing processes. Figma defines two
        sizes (sm and lg), 8 line colors, and label placement options (Top, Bottom,
        Inline, Helper text only).
      </Typography>

      <Section
        title="Basic Progress"
        description="Determinate progress at various values."
      >
        <DemoBox
          code={`<LinearProgress determinate value={20} />
<LinearProgress determinate value={50} />
<LinearProgress determinate value={80} />
<LinearProgress determinate value={100} />`}
        >
          <Stack spacing={2} sx={{ maxWidth: 400, width: "100%" }}>
            <LinearProgress determinate value={20} />
            <LinearProgress determinate value={50} />
            <LinearProgress determinate value={80} />
            <LinearProgress determinate value={100} />
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Indeterminate"
        description="Loading indicator when progress is unknown."
      >
        <DemoBox
          code={`<LinearProgress />`}
        >
          <Box sx={{ maxWidth: 400, width: "100%" }}>
            <LinearProgress />
          </Box>
        </DemoBox>
      </Section>

      <Section
        title="Sizes"
        description="Figma defines two sizes: sm and lg."
      >
        <DemoBox
          code={`<LinearProgress determinate value={60} size="sm" />
<LinearProgress determinate value={60} size="lg" />`}
        >
          <Stack spacing={2} sx={{ maxWidth: 400, width: "100%" }}>
            <Box>
              <Typography level="body-xs" sx={{ mb: 0.5 }}>sm</Typography>
              <LinearProgress determinate value={60} size="sm" />
            </Box>
            <Box>
              <Typography level="body-xs" sx={{ mb: 0.5 }}>lg</Typography>
              <LinearProgress determinate value={60} size="lg" />
            </Box>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Colors"
        description="Figma defines 8 progress line colors: Default, Green, Golden, Amber, Red, Purple, Sky, Neutral."
      >
        <DemoBox
          code={`<LinearProgress determinate value={60} color="primary" />
<LinearProgress determinate value={60} color="success" />
<LinearProgress determinate value={60} color="warning" />
<LinearProgress determinate value={60} color="danger" />
<LinearProgress determinate value={60} color="neutral" />`}
        >
          <Stack spacing={2} sx={{ maxWidth: 400, width: "100%" }}>
            <LinearProgress determinate value={60} color="primary" />
            <LinearProgress determinate value={60} color="success" />
            <LinearProgress determinate value={60} color="warning" />
            <LinearProgress determinate value={60} color="danger" />
            <LinearProgress determinate value={60} color="neutral" />
          </Stack>
        </DemoBox>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import LinearProgress from "@mui/joy/LinearProgress";

// Determinate
<LinearProgress determinate value={60} />

// Indeterminate (loading)
<LinearProgress />

// With size
<LinearProgress determinate value={60} size="sm" />
<LinearProgress determinate value={60} size="lg" />`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "determinate", type: "boolean", default: "false" },
            { name: "value", type: "number (0-100)", default: "-" },
            { name: "size", type: '"sm" | "lg"', default: '"md"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"primary"' },
          ]}
        />
      </Section>
    </Box>
  );
}
