"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import Chip from "@mui/joy/Chip";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  Divider: Direction (Horizontal/Vertical), Type (Solid/Dotted)
  Content Divider: Type (Text/Button), Border style (Solid/Dotted)
*/

export default function DividerPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Divider
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Dividers separate content. Figma defines two directions (Horizontal,
        Vertical) and two types (Solid, Dotted). Content dividers can contain
        text or buttons.
      </Typography>

      <Section
        title="Horizontal"
        description="Solid and dotted horizontal dividers."
      >
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <Typography level="body-sm">Solid divider</Typography>
          <Divider />
          <Typography level="body-sm">Dotted divider</Typography>
          <Divider sx={{ borderStyle: "dotted" }} />
          <Typography level="body-sm">Content below</Typography>
        </Stack>
      </Section>

      <Section
        title="Vertical"
        description="Vertical dividers separate inline content."
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
        title="Content Divider"
        description="Figma Content divider supports Text and Button types with Solid or Dotted border."
      >
        <Stack spacing={3} sx={{ maxWidth: 400 }}>
          <Divider>OR</Divider>
          <Divider>
            <Chip size="sm" variant="soft">Section</Chip>
          </Divider>
        </Stack>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Divider from "@mui/joy/Divider";

// Horizontal (default)
<Divider />

// Dotted
<Divider sx={{ borderStyle: "dotted" }} />

// Vertical
<Divider orientation="vertical" />

// With content (Content divider)
<Divider>OR</Divider>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"' },
            { name: "children", type: "ReactNode", default: "-" },
          ]}
        />
      </Section>
    </Box>
  );
}
