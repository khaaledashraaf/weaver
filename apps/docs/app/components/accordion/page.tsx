"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionSummary from "@mui/joy/AccordionSummary";
import AccordionDetails from "@mui/joy/AccordionDetails";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

export default function AccordionPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Accordion
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Accordions let users show and hide sections of related content on a
        page. Weaver accordions have two styles: Default (no border-radius) and
        Boxed (10px radius). They use 20px padding, 600 weight / 17px title text,
        and 15px body text.
      </Typography>

      <Section
        title="Basic Accordion"
        description="Click to expand and collapse content panels."
      >
        <AccordionGroup sx={{ maxWidth: 500 }}>
          <Accordion>
            <AccordionSummary>What is Weaver?</AccordionSummary>
            <AccordionDetails>
              Weaver is a custom design system implemented as a Joy UI theme. It
              provides consistent styling across all components, including
              colors, typography, spacing, and border-radius.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>How do I install it?</AccordionSummary>
            <AccordionDetails>
              Install the weaver-ui-joyui package and wrap your app with the
              WeaverProvider component. All Joy UI components will automatically
              pick up the Weaver theme.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Can I customize it further?</AccordionSummary>
            <AccordionDetails>
              Yes, you can extend the theme using Joy UI&apos;s extendTheme
              function on top of the Weaver theme, or use sx props on individual
              components.
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </Section>

      <Section
        title="Default Expanded"
        description="Accordions can be expanded by default."
      >
        <AccordionGroup sx={{ maxWidth: 500 }}>
          <Accordion defaultExpanded>
            <AccordionSummary>Expanded by default</AccordionSummary>
            <AccordionDetails>
              This accordion panel is expanded when the page first renders.
              Users can still collapse it by clicking the summary.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Collapsed by default</AccordionSummary>
            <AccordionDetails>
              This panel starts collapsed and expands when clicked.
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </Section>

      <Section
        title="Disabled"
        description="Disabled accordions cannot be expanded or collapsed."
      >
        <AccordionGroup sx={{ maxWidth: 500 }}>
          <Accordion disabled>
            <AccordionSummary>Disabled accordion</AccordionSummary>
            <AccordionDetails>
              This content is not accessible because the accordion is disabled.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Enabled accordion</AccordionSummary>
            <AccordionDetails>
              This panel works normally.
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </Section>

      <Section
        title="Variants"
        description="AccordionGroup supports outlined, soft, and plain variants."
      >
        <Stack spacing={3}>
          <Box>
            <Typography level="title-sm" sx={{ mb: 1 }}>Outlined</Typography>
            <AccordionGroup variant="outlined" sx={{ maxWidth: 500 }}>
              <Accordion>
                <AccordionSummary>Outlined accordion</AccordionSummary>
                <AccordionDetails>Content with outlined styling.</AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>Another item</AccordionSummary>
                <AccordionDetails>More content here.</AccordionDetails>
              </Accordion>
            </AccordionGroup>
          </Box>
          <Box>
            <Typography level="title-sm" sx={{ mb: 1 }}>Soft</Typography>
            <AccordionGroup variant="soft" sx={{ maxWidth: 500 }}>
              <Accordion>
                <AccordionSummary>Soft accordion</AccordionSummary>
                <AccordionDetails>Content with soft styling.</AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>Another item</AccordionSummary>
                <AccordionDetails>More content here.</AccordionDetails>
              </Accordion>
            </AccordionGroup>
          </Box>
          <Box>
            <Typography level="title-sm" sx={{ mb: 1 }}>Plain</Typography>
            <AccordionGroup variant="plain" sx={{ maxWidth: 500 }}>
              <Accordion>
                <AccordionSummary>Plain accordion</AccordionSummary>
                <AccordionDetails>Content with plain styling.</AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>Another item</AccordionSummary>
                <AccordionDetails>More content here.</AccordionDetails>
              </Accordion>
            </AccordionGroup>
          </Box>
        </Stack>
      </Section>

      <Section
        title="Sizes"
        description="AccordionGroup supports small, medium, and large sizes."
      >
        <Stack spacing={3}>
          {(["sm", "md", "lg"] as const).map((size) => (
            <Box key={size}>
              <Typography level="title-sm" sx={{ mb: 1 }}>
                {size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"}
              </Typography>
              <AccordionGroup size={size} sx={{ maxWidth: 500 }}>
                <Accordion>
                  <AccordionSummary>Accordion item</AccordionSummary>
                  <AccordionDetails>Content at {size} size.</AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>Another item</AccordionSummary>
                  <AccordionDetails>More content.</AccordionDetails>
                </Accordion>
              </AccordionGroup>
            </Box>
          ))}
        </Stack>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionSummary from "@mui/joy/AccordionSummary";
import AccordionDetails from "@mui/joy/AccordionDetails";

// Basic accordion
<AccordionGroup>
  <Accordion>
    <AccordionSummary>Section Title</AccordionSummary>
    <AccordionDetails>
      Content goes here.
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary>Another Section</AccordionSummary>
    <AccordionDetails>
      More content.
    </AccordionDetails>
  </Accordion>
</AccordionGroup>

// Default expanded
<Accordion defaultExpanded>
  <AccordionSummary>Open by default</AccordionSummary>
  <AccordionDetails>Visible on load.</AccordionDetails>
</Accordion>

// Disabled
<Accordion disabled>
  <AccordionSummary>Cannot toggle</AccordionSummary>
  <AccordionDetails>Hidden.</AccordionDetails>
</Accordion>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <Typography level="title-sm" sx={{ mb: 1 }}>AccordionGroup</Typography>
        <PropsTable
          props={[
            { name: "variant", type: '"outlined" | "soft" | "plain"', default: '"plain"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"neutral"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          ]}
        />
        <Typography level="title-sm" sx={{ mt: 3, mb: 1 }}>Accordion</Typography>
        <PropsTable
          props={[
            { name: "defaultExpanded", type: "boolean", default: "false" },
            { name: "expanded", type: "boolean", default: "-" },
            { name: "onChange", type: "(event, expanded) => void", default: "-" },
            { name: "disabled", type: "boolean", default: "false" },
          ]}
        />
      </Section>
    </Box>
  );
}
