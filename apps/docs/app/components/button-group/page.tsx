"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Stack from "@mui/joy/Stack";
import { RiAddLine, RiFilter3Line, RiSortAsc } from "@remixicon/react";
import { Section } from "../section";
import { DemoBox } from "../demo-box";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  Types: Default (text + icon), Icon only
  Sizes: md (40px), sm (36px), xs (32px)
  States: Default, Hover, Active, Disabled
  Container: border + secondary bg, radius 8
  Items: ghost styling, dividers between items
*/

export default function ButtonGroupPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 0.5 }}>
        Button Group
      </Typography>
      <Typography level="body-md" sx={{ mb: 5, color: "text.secondary" }}>
        Button groups combine related actions into a single horizontal bar.
        Items use ghost styling with dividers between them.
      </Typography>

      <Section
        title="With icons"
        description="Buttons with startDecorator for leading icons."
      >
        <DemoBox
          code={`<ButtonGroup variant="outlined">
  <Button variant="plain" startDecorator={<RiAddLine size={20} />}>Button</Button>
  <Button variant="plain" startDecorator={<RiFilter3Line size={20} />}>Button</Button>
  <Button variant="plain" startDecorator={<RiSortAsc size={20} />}>Button</Button>
</ButtonGroup>`}
        >
          <ButtonGroup variant="outlined">
            <Button variant="plain" startDecorator={<RiAddLine size={20} />}>Button</Button>
            <Button variant="plain" startDecorator={<RiFilter3Line size={20} />}>Button</Button>
            <Button variant="plain" startDecorator={<RiSortAsc size={20} />}>Button</Button>
          </ButtonGroup>
        </DemoBox>
      </Section>

      {/* <Section
        title="Icon only"
        description="Button group with icon-only buttons."
      >
        <DemoBox
          code={`<ButtonGroup variant="outlined">
  <IconButton variant="plain"><RiAddLine size={20} /></IconButton>
  <IconButton variant="plain"><RiFilter3Line size={20} /></IconButton>
  <IconButton variant="plain"><RiDownloadLine size={20} /></IconButton>
</ButtonGroup>`}
        >
          <ButtonGroup variant="outlined">
            <IconButton variant="plain"><RiAddLine size={20} /></IconButton>
            <IconButton variant="plain"><RiFilter3Line size={20} /></IconButton>
            <IconButton variant="plain"><RiDownloadLine size={20} /></IconButton>
          </ButtonGroup>
        </DemoBox>
      </Section> */}

      <Section
        title="Text only"
        description="Plain text buttons without icons."
      >
        <DemoBox
          code={`<ButtonGroup variant="outlined">
  <Button variant="plain">Button</Button>
  <Button variant="plain">Button</Button>
  <Button variant="plain">Button</Button>
</ButtonGroup>`}
        >
          <ButtonGroup variant="outlined">
            <Button variant="plain">Button</Button>
            <Button variant="plain">Button</Button>
            <Button variant="plain">Button</Button>
          </ButtonGroup>
        </DemoBox>
      </Section>

      <Section title="Sizes" description="Three sizes: sm, md, and lg.">
        <DemoBox
          code={`<Stack spacing={2}>
  <ButtonGroup variant="outlined" size="sm">
    <Button variant="plain">Button</Button>
    <Button variant="plain">Button</Button>
    <Button variant="plain">Button</Button>
  </ButtonGroup>
  <ButtonGroup variant="outlined" size="md">
    <Button variant="plain">Button</Button>
    <Button variant="plain">Button</Button>
    <Button variant="plain">Button</Button>
  </ButtonGroup>
  <ButtonGroup variant="outlined" size="lg">
    <Button variant="plain">Button</Button>
    <Button variant="plain">Button</Button>
    <Button variant="plain">Button</Button>
  </ButtonGroup>
</Stack>`}
        >
          <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
            <ButtonGroup variant="outlined" size="sm">
              <Button variant="plain">Button</Button>
              <Button variant="plain">Button</Button>
              <Button variant="plain">Button</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined" size="md">
              <Button variant="plain">Button</Button>
              <Button variant="plain">Button</Button>
              <Button variant="plain">Button</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined" size="lg">
              <Button variant="plain">Button</Button>
              <Button variant="plain">Button</Button>
              <Button variant="plain">Button</Button>
            </ButtonGroup>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Disabled"
        description="All buttons can be disabled via the group prop."
      >
        <DemoBox
          code={`<ButtonGroup variant="outlined" disabled>
  <Button variant="plain">Button</Button>
  <Button variant="plain">Button</Button>
  <Button variant="plain">Button</Button>
</ButtonGroup>`}
        >
          <ButtonGroup variant="outlined" disabled>
            <Button variant="plain">Button</Button>
            <Button variant="plain">Button</Button>
            <Button variant="plain">Button</Button>
          </ButtonGroup>
        </DemoBox>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import ButtonGroup from "@mui/joy/ButtonGroup";
import Button from "@mui/joy/Button";

<ButtonGroup variant="outlined">
  <Button variant="plain">Left</Button>
  <Button variant="plain">Center</Button>
  <Button variant="plain">Right</Button>
</ButtonGroup>`}</CodeBlock>
      </Section>
    </Box>
  );
}
