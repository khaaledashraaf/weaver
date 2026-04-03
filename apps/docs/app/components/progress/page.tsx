"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import LinearProgress from "@mui/joy/LinearProgress";
import CircularProgress from "@mui/joy/CircularProgress";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

const colors = ["primary", "neutral", "danger", "success", "warning"] as const;

export default function ProgressPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Progress
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Progress indicators inform users about the status of ongoing processes
        such as loading, submitting, or uploading.
      </Typography>

      <Section
        title="Linear Progress"
        description="A horizontal bar showing determinate or indeterminate progress."
      >
        <Stack spacing={3} sx={{ maxWidth: 400 }}>
          <LinearProgress determinate value={40} />
          <LinearProgress determinate value={70} />
          <LinearProgress />
        </Stack>
      </Section>

      <Section
        title="Linear Colors"
        description="Linear progress supports all semantic colors."
      >
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          {colors.map((color) => (
            <Box key={color}>
              <Typography level="body-xs" sx={{ mb: 0.5, textTransform: "capitalize" }}>
                {color}
              </Typography>
              <LinearProgress determinate value={60} color={color} />
            </Box>
          ))}
        </Stack>
      </Section>

      <Section
        title="Linear Sizes"
        description="Two thickness options for linear progress."
      >
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          {(["sm", "md", "lg"] as const).map((size) => (
            <Box key={size}>
              <Typography level="body-xs" sx={{ mb: 0.5 }}>{size}</Typography>
              <LinearProgress determinate value={50} size={size} />
            </Box>
          ))}
        </Stack>
      </Section>

      <Section
        title="Linear Variants"
        description="Different visual styles for the progress bar."
      >
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          {(["solid", "soft", "outlined", "plain"] as const).map((variant) => (
            <Box key={variant}>
              <Typography level="body-xs" sx={{ mb: 0.5 }}>{variant}</Typography>
              <LinearProgress determinate value={50} variant={variant} />
            </Box>
          ))}
        </Stack>
      </Section>

      <Section
        title="Circular Progress"
        description="A circular indicator for loading states."
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <CircularProgress size="sm" />
          <CircularProgress size="md" />
          <CircularProgress size="lg" />
        </Stack>
      </Section>

      <Section
        title="Circular Determinate"
        description="Circular progress with specific values."
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <CircularProgress determinate value={25} size="lg" />
          <CircularProgress determinate value={50} size="lg" />
          <CircularProgress determinate value={75} size="lg" />
          <CircularProgress determinate value={100} size="lg" color="success" />
        </Stack>
      </Section>

      <Section
        title="Circular Colors"
        description="Circular progress supports all semantic colors."
      >
        <Stack direction="row" spacing={3} alignItems="center">
          {colors.map((color) => (
            <CircularProgress key={color} color={color} />
          ))}
        </Stack>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import LinearProgress from "@mui/joy/LinearProgress";
import CircularProgress from "@mui/joy/CircularProgress";

// Indeterminate (loading spinner)
<LinearProgress />
<CircularProgress />

// Determinate (specific value)
<LinearProgress determinate value={60} />
<CircularProgress determinate value={75} />

// With color
<LinearProgress color="success" determinate value={100} />`}</CodeBlock>
      </Section>

      <Section title="Props">
        <Typography level="title-sm" sx={{ mb: 1 }}>LinearProgress</Typography>
        <PropsTable
          props={[
            { name: "determinate", type: "boolean", default: "false" },
            { name: "value", type: "number (0-100)", default: "-" },
            { name: "variant", type: '"solid" | "soft" | "outlined" | "plain"', default: '"soft"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"primary"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          ]}
        />
        <Typography level="title-sm" sx={{ mt: 3, mb: 1 }}>CircularProgress</Typography>
        <PropsTable
          props={[
            { name: "determinate", type: "boolean", default: "false" },
            { name: "value", type: "number (0-100)", default: "-" },
            { name: "variant", type: '"solid" | "soft" | "outlined" | "plain"', default: '"soft"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"primary"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          ]}
        />
      </Section>
    </Box>
  );
}
