"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

const colors = ["primary", "neutral", "danger", "success", "warning"] as const;

export default function TabsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Tabs
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Tabs organize content into separate views where only one view is visible
        at a time. Weaver tabs use 15px font size, 500 font-weight, and 8px
        border-radius.
      </Typography>

      <Section
        title="Basic Tabs"
        description="A simple tab group with panel content."
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
      </Section>

      <Section
        title="Variants"
        description="Tabs support different visual styles via the TabList variant."
      >
        <Stack spacing={3}>
          <Box>
            <Typography level="title-sm" sx={{ mb: 1 }}>Plain</Typography>
            <Tabs defaultValue={0}>
              <TabList variant="plain">
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
          <Box>
            <Typography level="title-sm" sx={{ mb: 1 }}>Soft</Typography>
            <Tabs defaultValue={0}>
              <TabList variant="soft">
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
              </TabList>
            </Tabs>
          </Box>
        </Stack>
      </Section>

      <Section
        title="Colors"
        description="Tabs can use any semantic color."
      >
        <Stack spacing={2}>
          {colors.map((color) => (
            <Tabs key={color} defaultValue={0}>
              <TabList color={color} variant="soft">
                <Tab>{color}</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
              </TabList>
            </Tabs>
          ))}
        </Stack>
      </Section>

      <Section
        title="Sizes"
        description="Three size options control the tab height and text."
      >
        <Stack spacing={2}>
          {(["sm", "md", "lg"] as const).map((size) => (
            <Tabs key={size} defaultValue={0} size={size}>
              <TabList>
                <Tab>{size}</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
              </TabList>
            </Tabs>
          ))}
        </Stack>
      </Section>

      <Section
        title="Disabled"
        description="Individual tabs can be disabled."
      >
        <Tabs defaultValue={0}>
          <TabList>
            <Tab>Active</Tab>
            <Tab disabled>Disabled</Tab>
            <Tab>Active</Tab>
          </TabList>
        </Tabs>
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
            { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"' },
          ]}
        />
      </Section>
    </Box>
  );
}
