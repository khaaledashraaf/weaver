"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import Chip from "@mui/joy/Chip";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

export default function DividerPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Divider
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Dividers separate content into clear groups. They support horizontal and
        vertical orientations.
      </Typography>

      <Section
        title="Horizontal"
        description="A horizontal line separating stacked content."
      >
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <Typography>Content above</Typography>
          <Divider />
          <Typography>Content below</Typography>
        </Stack>
      </Section>

      <Section
        title="Vertical"
        description="A vertical line separating inline content."
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ height: 40 }}>
          <Typography>Left</Typography>
          <Divider orientation="vertical" />
          <Typography>Center</Typography>
          <Divider orientation="vertical" />
          <Typography>Right</Typography>
        </Stack>
      </Section>

      <Section
        title="With Content"
        description="A divider can contain text or chips."
      >
        <Stack spacing={3} sx={{ maxWidth: 400 }}>
          <Divider>OR</Divider>
          <Divider>
            <Chip size="sm" variant="soft">Section</Chip>
          </Divider>
        </Stack>
      </Section>

      <Section
        title="Inset"
        description="Use inset to add indentation from either side."
      >
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <Typography>Full width divider</Typography>
          <Divider />
          <Typography>Context inset divider</Typography>
          <Divider inset="context" />
        </Stack>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Divider from "@mui/joy/Divider";

// Horizontal (default)
<Divider />

// Vertical
<Divider orientation="vertical" />

// With content
<Divider>OR</Divider>

// With inset
<Divider inset="startContent" />`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"' },
            { name: "inset", type: '"none" | "context" | "startDecorator" | "startContent"', default: '"none"' },
            { name: "children", type: "ReactNode", default: "-" },
          ]}
        />
      </Section>
    </Box>
  );
}
