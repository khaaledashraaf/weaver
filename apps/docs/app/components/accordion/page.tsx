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

/* ── Figma variants ──
  Accordion styles: Default, Boxed
  Accordion states: Default, Hover
  Expandable: True, False
*/

export default function AccordionPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Accordion
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Accordions show and hide sections of content. Figma defines two styles:
        Default (no border-radius) and Boxed (10px radius with border). They use
        20px padding, 600 weight / 17px title text, and 15px body text.
      </Typography>

      <Section
        title="Default Style"
        description="The default accordion style has no border-radius and uses divider lines between items."
      >
        <AccordionGroup>
          <Accordion>
            <AccordionSummary>What is Weaver?</AccordionSummary>
            <AccordionDetails>
              Weaver is a custom design system maintained in Figma and implemented
              as a Joy UI theme package.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>How do I install it?</AccordionSummary>
            <AccordionDetails>
              Install via npm: npm install weaver-ui-joyui, then wrap your app
              with WeaverProvider.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Can I customize the theme?</AccordionSummary>
            <AccordionDetails>
              The current MVP uses a static theme. A factory function for
              customization is planned for the future.
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </Section>

      <Section
        title="Boxed Style"
        description="Figma Boxed style: 10px border-radius with a visible border around each accordion."
      >
        <AccordionGroup variant="outlined" sx={{ borderRadius: "xl" }}>
          <Accordion>
            <AccordionSummary>Section One</AccordionSummary>
            <AccordionDetails>
              Content for the first boxed section.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Section Two</AccordionSummary>
            <AccordionDetails>
              Content for the second boxed section.
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </Section>

      <Section
        title="Default Expanded"
        description="Accordion can be expanded by default using the defaultExpanded prop."
      >
        <AccordionGroup>
          <Accordion defaultExpanded>
            <AccordionSummary>Expanded by default</AccordionSummary>
            <AccordionDetails>
              This section is open when the page loads.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Collapsed by default</AccordionSummary>
            <AccordionDetails>
              This section starts closed.
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </Section>

      <Section
        title="Disabled"
        description="Disabled accordions cannot be expanded."
      >
        <AccordionGroup>
          <Accordion>
            <AccordionSummary>Enabled</AccordionSummary>
            <AccordionDetails>This works normally.</AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary>Disabled</AccordionSummary>
            <AccordionDetails>Cannot be opened.</AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionSummary from "@mui/joy/AccordionSummary";
import AccordionDetails from "@mui/joy/AccordionDetails";

// Default style
<AccordionGroup>
  <Accordion>
    <AccordionSummary>Title</AccordionSummary>
    <AccordionDetails>Content</AccordionDetails>
  </Accordion>
</AccordionGroup>

// Boxed style
<AccordionGroup variant="outlined" sx={{ borderRadius: "xl" }}>
  <Accordion>
    <AccordionSummary>Title</AccordionSummary>
    <AccordionDetails>Content</AccordionDetails>
  </Accordion>
</AccordionGroup>`}</CodeBlock>
      </Section>

      <Section title="Props">
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
