"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Badge from "@mui/joy/Badge";
import Avatar from "@mui/joy/Avatar";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { DemoBox } from "../demo-box";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

export default function BadgesPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 0.5 }}>
        Badge
      </Typography>
      <Typography level="body-md" sx={{ mb: 5, color: "text.secondary" }}>
        Badges are small status indicators that overlay other elements. They use
        full-pill radius, 500 font weight, and come in two sizes: sm (24px) and
        lg (28px). Figma defines 10 color options across Light, Outline, and
        Solid styles.
      </Typography>

      <Section
        title="Colors"
        description="Badges support all Joy UI semantic colors."
      >
        <DemoBox
          code={`<Badge badgeContent="3" color="primary"><Avatar>A</Avatar></Badge>
<Badge badgeContent="3" color="neutral"><Avatar>B</Avatar></Badge>
<Badge badgeContent="3" color="success"><Avatar>C</Avatar></Badge>
<Badge badgeContent="3" color="warning"><Avatar>D</Avatar></Badge>
<Badge badgeContent="3" color="danger"><Avatar>E</Avatar></Badge>`}
        >
          <Stack direction="row" spacing={3}>
            <Badge badgeContent="3" color="primary"><Avatar>A</Avatar></Badge>
            <Badge badgeContent="3" color="neutral"><Avatar>B</Avatar></Badge>
            <Badge badgeContent="3" color="success"><Avatar>C</Avatar></Badge>
            <Badge badgeContent="3" color="warning"><Avatar>D</Avatar></Badge>
            <Badge badgeContent="3" color="danger"><Avatar>E</Avatar></Badge>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Sizes"
        description="Two sizes: sm and md."
      >
        <DemoBox
          code={`<Badge badgeContent="5" size="sm"><Avatar size="sm">A</Avatar></Badge>
<Badge badgeContent="5" size="md"><Avatar>B</Avatar></Badge>`}
        >
          <Stack direction="row" spacing={3} alignItems="center">
            <Badge badgeContent="5" size="sm"><Avatar size="sm">A</Avatar></Badge>
            <Badge badgeContent="5" size="md"><Avatar>B</Avatar></Badge>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Dot Badge"
        description="Badge without content shows as a small dot indicator."
      >
        <DemoBox
          code={`<Badge color="primary"><Avatar>A</Avatar></Badge>
<Badge color="success"><Avatar>B</Avatar></Badge>
<Badge color="danger"><Avatar>C</Avatar></Badge>`}
        >
          <Stack direction="row" spacing={3}>
            <Badge color="primary"><Avatar>A</Avatar></Badge>
            <Badge color="success"><Avatar>B</Avatar></Badge>
            <Badge color="danger"><Avatar>C</Avatar></Badge>
          </Stack>
        </DemoBox>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Badge from "@mui/joy/Badge";
import Avatar from "@mui/joy/Avatar";

// Badge with count
<Badge badgeContent="5" color="danger">
  <Avatar>U</Avatar>
</Badge>

// Dot badge (no content)
<Badge color="success">
  <Avatar>U</Avatar>
</Badge>

// Hidden badge
<Badge badgeContent="0" invisible>
  <Avatar>U</Avatar>
</Badge>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "badgeContent", type: "ReactNode", default: "-" },
            { name: "size", type: '"sm" | "md"', default: '"md"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"primary"' },
            { name: "invisible", type: "boolean", default: "false" },
          ]}
        />
      </Section>
    </Box>
  );
}
