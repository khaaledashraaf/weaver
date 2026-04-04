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
  Tab Item styles: Underline, Segment, Rounded, Grey bill, Brand bill
  Tab Item states: Active, Default, Hover
  Tab Item sizes:  Default, xs, sm

  Tabs container:
    Styles: Segment, Rounded, Underline
    Sizes: md, xs, sm
    Full Width: True, False
*/

export default function TabsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 0.5 }}>
        Tabs
      </Typography>
      <Typography level="body-md" sx={{ mb: 5, color: "text.secondary" }}>
        Tabs organize content into views. Figma defines five tab styles
        (Underline, Segment, Rounded, Grey bill, Brand bill), three sizes
        (Default/md, sm, xs), and a full-width option. Active tabs use 500
        font-weight, inactive use 400.
      </Typography>

      <Section
        title="Basic Tabs"
        description="Default tab style with panel content."
      >
        <DemoBox
          code={`<Tabs defaultValue={0}>
  <TabList>
    <Tab>First</Tab>
    <Tab>Second</Tab>
    <Tab>Third</Tab>
  </TabList>
  <TabPanel value={0} sx={{ p: 2 }}>First tab content</TabPanel>
  <TabPanel value={1} sx={{ p: 2 }}>Second tab content</TabPanel>
  <TabPanel value={2} sx={{ p: 2 }}>Third tab content</TabPanel>
</Tabs>`}
        >
          <Tabs defaultValue={0}>
            <TabList>
              <Tab>First</Tab>
              <Tab>Second</Tab>
              <Tab>Third</Tab>
            </TabList>
            <TabPanel value={0} sx={{ p: 2 }}>First tab content</TabPanel>
            <TabPanel value={1} sx={{ p: 2 }}>Second tab content</TabPanel>
            <TabPanel value={2} sx={{ p: 2 }}>Third tab content</TabPanel>
          </Tabs>
        </DemoBox>
      </Section>

      <Section
        title="Tab Styles"
        description="Figma defines Underline, Segment, and Rounded styles. Joy UI maps these via TabList variant."
      >
        <DemoBox
          code={`{/* Underline (plain) */}
<Tabs defaultValue={0}>
  <TabList variant="plain">
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </TabList>
</Tabs>

{/* Segment (soft) */}
<Tabs defaultValue={0}>
  <TabList variant="soft">
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </TabList>
</Tabs>

{/* Outlined */}
<Tabs defaultValue={0}>
  <TabList variant="outlined">
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </TabList>
</Tabs>`}
        >
          <Stack spacing={3} sx={{ width: "100%" }}>
            <Box>
              <Typography level="title-sm" sx={{ mb: 1 }}>Underline (plain)</Typography>
              <Tabs defaultValue={0}>
                <TabList variant="plain">
                  <Tab>Tab 1</Tab>
                  <Tab>Tab 2</Tab>
                  <Tab>Tab 3</Tab>
                </TabList>
              </Tabs>
            </Box>
            <Box>
              <Typography level="title-sm" sx={{ mb: 1 }}>Segment (soft)</Typography>
              <Tabs defaultValue={0}>
                <TabList variant="soft">
                  <Tab>Tab 1</Tab>
                  <Tab>Tab 2</Tab>
                  <Tab>Tab 3</Tab>
                </TabList>
              </Tabs>
            </Box>
            <Box>
              <Typography level="title-sm" sx={{ mb: 1 }}>Outlined</Typography>
              <Tabs defaultValue={0}>
                <TabList variant="outlined">
                  <Tab>Tab 1</Tab>
                  <Tab>Tab 2</Tab>
                  <Tab>Tab 3</Tab>
                </TabList>
              </Tabs>
            </Box>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Sizes"
        description="Figma sizes: Default (md), sm, xs."
      >
        <DemoBox
          code={`<Tabs defaultValue={0} size="sm">
  <TabList><Tab>Tab 1</Tab><Tab>Tab 2</Tab><Tab>Tab 3</Tab></TabList>
</Tabs>
<Tabs defaultValue={0} size="md">
  <TabList><Tab>Tab 1</Tab><Tab>Tab 2</Tab><Tab>Tab 3</Tab></TabList>
</Tabs>
<Tabs defaultValue={0} size="lg">
  <TabList><Tab>Tab 1</Tab><Tab>Tab 2</Tab><Tab>Tab 3</Tab></TabList>
</Tabs>`}
        >
          <Stack spacing={2} sx={{ width: "100%" }}>
            {(["sm", "md", "lg"] as const).map((size) => (
              <Box key={size}>
                <Typography level="body-xs" sx={{ mb: 0.5 }}>{size}</Typography>
                <Tabs defaultValue={0} size={size}>
                  <TabList>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                  </TabList>
                </Tabs>
              </Box>
            ))}
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Disabled"
        description="Individual tabs can be disabled."
      >
        <DemoBox
          code={`<Tabs defaultValue={0}>
  <TabList>
    <Tab>Active</Tab>
    <Tab disabled>Disabled</Tab>
    <Tab>Active</Tab>
  </TabList>
</Tabs>`}
        >
          <Tabs defaultValue={0}>
            <TabList>
              <Tab>Active</Tab>
              <Tab disabled>Disabled</Tab>
              <Tab>Active</Tab>
            </TabList>
          </Tabs>
        </DemoBox>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";

<Tabs defaultValue={0}>
  <TabList>
    <Tab>Overview</Tab>
    <Tab>Settings</Tab>
  </TabList>
  <TabPanel value={0}>Overview content</TabPanel>
  <TabPanel value={1}>Settings content</TabPanel>
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
