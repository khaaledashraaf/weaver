"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Alert from "@mui/joy/Alert";
import Stack from "@mui/joy/Stack";
import { RiErrorWarningFill, RiCheckboxCircleFill, RiAlertFill, RiInformationFill, RiIndeterminateCircleFill } from "@remixicon/react";
import { Section } from "../section";
import { DemoBox } from "../demo-box";
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
      <Typography level="h2" sx={{ mb: 0.5 }}>
        Alert
      </Typography>
      <Typography level="body-md" sx={{ mb: 5, color: "text.secondary" }}>
        Alerts display status messages. Weaver alerts use 8px border-radius,
        16px padding, 12px gap, and 15px / 500 weight text. Three styles
        (Solid, Light, Outline) across five statuses (Danger, Success, Warning,
        Info, Neutral).
      </Typography>

      <Section
        title="Statuses"
        description="Five status types from Figma: Danger, Success, Warning, Info, Neutral."
      >
        <DemoBox
          code={`<Alert color="danger" startDecorator={<RiErrorWarningFill size={20} />}>Danger — Something went wrong.</Alert>
<Alert color="success" startDecorator={<RiCheckboxCircleFill size={20} />}>Success — Operation completed.</Alert>
<Alert color="warning" startDecorator={<RiAlertFill size={20} />}>Warning — Please review this.</Alert>
<Alert color="primary" startDecorator={<RiInformationFill size={20} />}>Info — Here is some information.</Alert>
<Alert color="neutral" startDecorator={<RiIndeterminateCircleFill size={20} />}>Neutral — General notice.</Alert>`}
        >
          <Stack spacing={1.5} sx={{ width: "100%" }}>
            <Alert color="danger" startDecorator={<RiErrorWarningFill size={20} />}>Danger — Something went wrong.</Alert>
            <Alert color="success" startDecorator={<RiCheckboxCircleFill size={20} />}>Success — Operation completed.</Alert>
            <Alert color="warning" startDecorator={<RiAlertFill size={20} />}>Warning — Please review this.</Alert>
            <Alert color="primary" startDecorator={<RiInformationFill size={20} />}>Info — Here is some information.</Alert>
            <Alert color="neutral" startDecorator={<RiIndeterminateCircleFill size={20} />}>Neutral — General notice.</Alert>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Styles"
        description="Three visual styles from Figma: Solid (filled background), Light (tinted background with border), Outline (white background with border)."
      >
        <DemoBox
          code={`// Solid
<Alert variant="solid" color="danger">Solid Danger</Alert>
<Alert variant="solid" color="success">Solid Success</Alert>
<Alert variant="solid" color="warning">Solid Warning</Alert>

// Light (soft)
<Alert variant="soft" color="danger">Light Danger</Alert>
<Alert variant="soft" color="success">Light Success</Alert>
<Alert variant="soft" color="warning">Light Warning</Alert>

// Outline
<Alert variant="outlined" color="danger">Outline Danger</Alert>
<Alert variant="outlined" color="success">Outline Success</Alert>
<Alert variant="outlined" color="warning">Outline Warning</Alert>`}
        >
          <Stack spacing={2} sx={{ width: "100%" }}>
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
        </DemoBox>
      </Section>

      <Section
        title="With Decorators"
        description="Alerts support start and end decorator slots for icons and action buttons."
      >
        <DemoBox
          code={`<Alert
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
<Alert variant="soft" color="success" startDecorator="\u2713">
  Alert with icon
</Alert>`}
        >
          <Stack spacing={1.5} sx={{ width: "100%" }}>
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
        </DemoBox>
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
