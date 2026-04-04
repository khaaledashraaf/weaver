"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { DemoBox } from "../demo-box";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  Styles: Underline, Segment, Rounded
  Sizes: md, sm, xs
  Full Width: True, False
  Active tab: 500 weight, content/default
  Inactive tab: 400 weight, content/subtle
*/

export default function TabsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 0.5 }}>
        Tabs
      </Typography>
      <Typography level="body-md" sx={{ mb: 5, color: "text.secondary" }}>
        Tabs organize content into views. Figma defines three styles (Underline,
        Segment, Rounded), three sizes (md, sm, xs), and a full-width option.
        Active tabs use 500 font-weight with content/default color, inactive
        use 400 with content/subtle.
      </Typography>

      <Section
        title="Underline"
        description="Bottom border with active indicator. Maps to TabList variant='plain'."
      >
        <DemoBox
          code={`<Tabs defaultValue={0}>
  <TabList variant="plain">
    <Tab variant="plain">Tab item</Tab>
    <Tab variant="plain">Tab item</Tab>
    <Tab variant="plain">Tab item</Tab>
  </TabList>
</Tabs>`}
        >
          <Stack spacing={3} sx={{ width: "100%" }}>
            <Tabs defaultValue={0}>
              <TabList variant="plain">
                <Tab variant="plain">Tab item</Tab>
                <Tab variant="plain">Tab item</Tab>
                <Tab variant="plain">Tab item</Tab>
                <Tab variant="plain">Tab item</Tab>
                <Tab variant="plain">Tab item</Tab>
              </TabList>
            </Tabs>
            <Typography level="body-xs" sx={{ color: "text.tertiary" }}>Full width</Typography>
            <Tabs defaultValue={0}>
              <TabList variant="plain" sx={{ flexGrow: 1, "& .MuiTab-root": { flex: 1 } }}>
                <Tab variant="plain">Tab item</Tab>
                <Tab variant="plain">Tab item</Tab>
                <Tab variant="plain">Tab item</Tab>
                <Tab variant="plain">Tab item</Tab>
                <Tab variant="plain">Tab item</Tab>
              </TabList>
            </Tabs>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Segment"
        description="Pill-shaped container with active tab highlighted. Maps to TabList variant='soft'."
      >
        <DemoBox
          code={`<Tabs defaultValue={0}>
  <TabList variant="soft">
    <Tab variant="soft">Tab item</Tab>
    <Tab variant="soft">Tab item</Tab>
    <Tab variant="soft">Tab item</Tab>
  </TabList>
</Tabs>`}
        >
          <Stack spacing={3} sx={{ width: "100%" }}>
            <Tabs defaultValue={0}>
              <TabList variant="soft">
                <Tab variant="soft">Tab item</Tab>
                <Tab variant="soft">Tab item</Tab>
                <Tab variant="soft">Tab item</Tab>
                <Tab variant="soft">Tab item</Tab>
                <Tab variant="soft">Tab item</Tab>
              </TabList>
            </Tabs>
            <Typography level="body-xs" sx={{ color: "text.tertiary" }}>Full width</Typography>
            <Tabs defaultValue={0}>
              <TabList variant="soft" sx={{ "& .MuiTab-root": { flex: 1 } }}>
                <Tab variant="soft">Tab item</Tab>
                <Tab variant="soft">Tab item</Tab>
                <Tab variant="soft">Tab item</Tab>
                <Tab variant="soft">Tab item</Tab>
                <Tab variant="soft">Tab item</Tab>
              </TabList>
            </Tabs>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Rounded"
        description="Rounded rectangle container with 8px radius. Maps to TabList variant='outlined'."
      >
        <DemoBox
          code={`<Tabs defaultValue={0}>
  <TabList variant="outlined">
    <Tab variant="outlined">Tab item</Tab>
    <Tab variant="outlined">Tab item</Tab>
    <Tab variant="outlined">Tab item</Tab>
  </TabList>
</Tabs>`}
        >
          <Stack spacing={3} sx={{ width: "100%" }}>
            <Tabs defaultValue={0}>
              <TabList variant="outlined">
                <Tab variant="outlined">Tab item</Tab>
                <Tab variant="outlined">Tab item</Tab>
                <Tab variant="outlined">Tab item</Tab>
                <Tab variant="outlined">Tab item</Tab>
                <Tab variant="outlined">Tab item</Tab>
              </TabList>
            </Tabs>
            <Typography level="body-xs" sx={{ color: "text.tertiary" }}>Full width</Typography>
            <Tabs defaultValue={0}>
              <TabList variant="outlined" sx={{ "& .MuiTab-root": { flex: 1 } }}>
                <Tab variant="outlined">Tab item</Tab>
                <Tab variant="outlined">Tab item</Tab>
                <Tab variant="outlined">Tab item</Tab>
                <Tab variant="outlined">Tab item</Tab>
                <Tab variant="outlined">Tab item</Tab>
              </TabList>
            </Tabs>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="With Tab Panels"
        description="Tabs with content panels."
      >
        <DemoBox
          code={`<Tabs defaultValue={0}>
  <TabList variant="plain">
    <Tab variant="plain">Overview</Tab>
    <Tab variant="plain">Settings</Tab>
    <Tab variant="plain">Activity</Tab>
  </TabList>
  <TabPanel value={0}>Overview content</TabPanel>
  <TabPanel value={1}>Settings content</TabPanel>
  <TabPanel value={2}>Activity content</TabPanel>
</Tabs>`}
        >
          <Box sx={{ width: "100%" }}>
            <Tabs defaultValue={0}>
              <TabList variant="plain">
                <Tab variant="plain">Overview</Tab>
                <Tab variant="plain">Settings</Tab>
                <Tab variant="plain">Activity</Tab>
              </TabList>
              <TabPanel value={0} sx={{ p: 2 }}>Overview content</TabPanel>
              <TabPanel value={1} sx={{ p: 2 }}>Settings content</TabPanel>
              <TabPanel value={2} sx={{ p: 2 }}>Activity content</TabPanel>
            </Tabs>
          </Box>
        </DemoBox>
      </Section>

      <Section
        title="Disabled"
        description="Individual tabs can be disabled."
      >
        <DemoBox
          code={`<Tabs defaultValue={0}>
  <TabList variant="plain">
    <Tab variant="plain">Active</Tab>
    <Tab variant="plain" disabled>Disabled</Tab>
    <Tab variant="plain">Active</Tab>
  </TabList>
</Tabs>`}
        >
          <Tabs defaultValue={0}>
            <TabList variant="plain">
              <Tab variant="plain">Active</Tab>
              <Tab variant="plain" disabled>Disabled</Tab>
              <Tab variant="plain">Active</Tab>
            </TabList>
          </Tabs>
        </DemoBox>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";

// Underline style
<Tabs defaultValue={0}>
  <TabList variant="plain">
    <Tab variant="plain">Overview</Tab>
    <Tab variant="plain">Settings</Tab>
  </TabList>
  <TabPanel value={0}>Overview content</TabPanel>
  <TabPanel value={1}>Settings content</TabPanel>
</Tabs>

// Segment style (pill)
<Tabs defaultValue={0}>
  <TabList variant="soft">
    <Tab variant="soft">Tab 1</Tab>
    <Tab variant="soft">Tab 2</Tab>
  </TabList>
</Tabs>

// Rounded style
<Tabs defaultValue={0}>
  <TabList variant="outlined">
    <Tab variant="outlined">Tab 1</Tab>
    <Tab variant="outlined">Tab 2</Tab>
  </TabList>
</Tabs>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "defaultValue", type: "number | string", default: "-" },
            { name: "value", type: "number | string", default: "-" },
            { name: "onChange", type: "(event, value) => void", default: "-" },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          ]}
        />
      </Section>
    </Box>
  );
}
