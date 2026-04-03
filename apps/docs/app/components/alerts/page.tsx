"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Alert from "@mui/joy/Alert";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  Alert styles:   Solid, Light, Outline
  Alert statuses: Danger, Success, Warning, Info, Neutral
  isExpandable:   True, False
*/

export default function AlertsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Alert
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Alerts display status messages. Weaver alerts use 8px border-radius,
        16px padding, 12px gap, and 15px / 500 weight text. Three styles
        (Solid, Light, Outline) across five statuses (Danger, Success, Warning,
        Info, Neutral).
      </Typography>

      <Section
        title="Statuses"
        description="Five status types from Figma: Danger, Success, Warning, Info, Neutral."
      >
        <Stack spacing={1.5}>
          <Alert color="danger">Danger — Something went wrong.</Alert>
          <Alert color="success">Success — Operation completed.</Alert>
          <Alert color="warning">Warning — Please review this.</Alert>
          <Alert color="primary">Info — Here is some information.</Alert>
          <Alert color="neutral">Neutral — General notice.</Alert>
        </Stack>
      </Section>

      <Section
        title="Styles"
        description="Three visual styles from Figma: Solid (filled background), Light (tinted background with border), Outline (white background with border)."
      >
        <Stack spacing={2}>
          <Typography level="title-sm">Solid</Typography>
          <Stack spacing={1}>
            <Alert variant="solid" color="danger">Solid Danger</Alert>
            <Alert variant="solid" color="success">Solid Success</Alert>
            <Alert variant="solid" color="warning">Solid Warning</Alert>
          </Stack>

          <Typography level="title-sm">Light (soft)</Typography>
          <Stack spacing={1}>
            <Alert variant="soft" color="danger">Light Danger</Alert>
            <Alert variant="soft" color="success">Light Success</Alert>
            <Alert variant="soft" color="warning">Light Warning</Alert>
          </Stack>

          <Typography level="title-sm">Outline</Typography>
          <Stack spacing={1}>
            <Alert variant="outlined" color="danger">Outline Danger</Alert>
            <Alert variant="outlined" color="success">Outline Success</Alert>
            <Alert variant="outlined" color="warning">Outline Warning</Alert>
          </Stack>
        </Stack>
      </Section>

      <Section
        title="With Decorators"
        description="Alerts support start and end decorator slots for icons and action buttons."
      >
        <Stack spacing={1.5}>
          <Alert
            variant="soft"
            color="danger"
            endDecorator={
              <Typography level="body-sm" fontWeight={500} sx={{ cursor: "pointer" }}>
                Action
              </Typography>
            }
          >
            Alert with action
          </Alert>
          <Alert variant="soft" color="success" startDecorator="✓">
            Alert with icon
          </Alert>
        </Stack>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Alert from "@mui/joy/Alert";

// Statuses
<Alert color="danger">Error message</Alert>
<Alert color="success">Success message</Alert>
<Alert color="warning">Warning message</Alert>
<Alert color="primary">Info message</Alert>
<Alert color="neutral">Neutral message</Alert>

// Styles (Figma: Solid, Light, Outline)
<Alert variant="solid" color="danger">Solid</Alert>
<Alert variant="soft" color="danger">Light</Alert>
<Alert variant="outlined" color="danger">Outline</Alert>

// With action
<Alert endDecorator={<Button size="sm">Undo</Button>}>
  Item deleted
</Alert>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "variant", type: '"solid" | "soft" | "outlined"', default: '"soft"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"neutral"' },
            { name: "startDecorator", type: "ReactNode", default: "-" },
            { name: "endDecorator", type: "ReactNode", default: "-" },
          ]}
        />
      </Section>
    </Box>
  );
}
