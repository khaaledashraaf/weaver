"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Alert from "@mui/joy/Alert";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

const variants = ["solid", "soft", "outlined"] as const;
const colors = ["primary", "neutral", "danger", "success", "warning"] as const;

export default function AlertsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Alert
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Alerts display brief messages that communicate status, feedback, or
        important information. Weaver alerts use 8px border-radius, 16px padding
        on all sides, 12px gap, 15px / 500 weight text, and come in three styles:
        Light, Outline, and Solid across five status colors.
      </Typography>

      <Section
        title="Colors"
        description="Semantic colors communicate the nature of the alert."
      >
        <Stack spacing={2}>
          {colors.map((color) => (
            <Alert key={color} color={color}>
              This is a {color} alert -- check it out!
            </Alert>
          ))}
        </Stack>
      </Section>

      <Section
        title="Variants"
        description="Three variants control the visual weight of alerts."
      >
        <Stack spacing={2}>
          {variants.map((variant) => (
            <Alert key={variant} variant={variant} color="primary">
              {variant.charAt(0).toUpperCase() + variant.slice(1)} alert variant
            </Alert>
          ))}
        </Stack>
      </Section>

      <Section
        title="Variant x Color Matrix"
        description="Every variant and color combination."
      >
        <Stack spacing={3}>
          {variants.map((variant) => (
            <Box key={variant}>
              <Typography level="title-sm" sx={{ mb: 1, textTransform: "capitalize" }}>
                {variant}
              </Typography>
              <Stack spacing={1}>
                {colors.map((color) => (
                  <Alert key={color} variant={variant} color={color}>
                    {variant} / {color}
                  </Alert>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Section>

      <Section
        title="With Decorators"
        description="Add icons or actions before and after the content."
      >
        <Stack spacing={2}>
          <Alert
            variant="soft"
            color="success"
            startDecorator="OK"
          >
            Operation completed successfully.
          </Alert>
          <Alert
            variant="soft"
            color="danger"
            startDecorator="X"
          >
            Something went wrong. Please try again.
          </Alert>
          <Alert
            variant="soft"
            color="warning"
            startDecorator="!"
            endDecorator={
              <Typography level="body-xs" sx={{ cursor: "pointer", textDecoration: "underline" }}>
                Dismiss
              </Typography>
            }
          >
            Your session will expire in 5 minutes.
          </Alert>
        </Stack>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Alert from "@mui/joy/Alert";

// Basic alerts
<Alert color="success">Operation completed.</Alert>
<Alert color="danger">An error occurred.</Alert>
<Alert color="warning">Heads up!</Alert>

// Variants
<Alert variant="solid" color="primary">Solid</Alert>
<Alert variant="soft" color="primary">Soft</Alert>
<Alert variant="outlined" color="primary">Outlined</Alert>

// With decorators
<Alert
  variant="soft"
  color="success"
  startDecorator={<CheckIcon />}
  endDecorator={
    <Button size="sm" variant="soft" color="success">
      Dismiss
    </Button>
  }
>
  File uploaded successfully.
</Alert>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "variant", type: '"solid" | "soft" | "outlined"', default: '"soft"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"neutral"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "startDecorator", type: "ReactNode", default: "-" },
            { name: "endDecorator", type: "ReactNode", default: "-" },
          ]}
        />
      </Section>
    </Box>
  );
}
