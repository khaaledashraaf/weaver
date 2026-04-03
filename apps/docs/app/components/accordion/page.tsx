import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionSummary from "@mui/joy/AccordionSummary";
import AccordionDetails from "@mui/joy/AccordionDetails";

export default function AccordionPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 3 }}>
        Accordion
      </Typography>

      <AccordionGroup sx={{ maxWidth: 500 }}>
        <Accordion>
          <AccordionSummary>What is Weaver?</AccordionSummary>
          <AccordionDetails>
            Weaver is a custom internal design system implemented as a Joy UI
            theme. It provides consistent styling across all components.
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
            Yes, you can extend the theme using Joy UI&apos;s extendTheme function
            on top of the Weaver theme, or use sx props on individual components.
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </Box>
  );
}
