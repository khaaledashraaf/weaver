"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Chip from "@mui/joy/Chip";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

const teamData = [
  { name: "Ahmed Hassan", role: "Designer", email: "ahmed@example.com", status: "Active" },
  { name: "Sara Ali", role: "Developer", email: "sara@example.com", status: "Active" },
  { name: "Omar Khaled", role: "PM", email: "omar@example.com", status: "Inactive" },
  { name: "Nour Ibrahim", role: "Designer", email: "nour@example.com", status: "Active" },
  { name: "Layla Mostafa", role: "Developer", email: "layla@example.com", status: "Active" },
];

export default function TablesPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Table
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Tables display sets of data organized in rows and columns. Wrap a Joy UI
        Table in a Sheet for outlined borders and overflow handling. Weaver table
        headers are 44px tall with 14px / 500 weight text and a subtle
        background. Cell padding is 8px.
      </Typography>

      <Section
        title="Basic Table"
        description="A simple data table with header and rows."
      >
        <Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {teamData.map((row) => (
                <tr key={row.email}>
                  <td>{row.name}</td>
                  <td>{row.role}</td>
                  <td>{row.email}</td>
                  <td>
                    <Chip
                      size="sm"
                      variant="soft"
                      color={row.status === "Active" ? "success" : "neutral"}
                    >
                      {row.status}
                    </Chip>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Sheet>
      </Section>

      <Section
        title="Striped Table"
        description="Alternate row shading improves readability for large datasets."
      >
        <Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
          <Table stripe="odd">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {teamData.map((row) => (
                <tr key={row.email}>
                  <td>{row.name}</td>
                  <td>{row.role}</td>
                  <td>{row.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Sheet>
      </Section>

      <Section
        title="Hover Effect"
        description="Highlight rows on hover for interactive tables."
      >
        <Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
          <Table hoverRow>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {teamData.map((row) => (
                <tr key={row.email}>
                  <td>{row.name}</td>
                  <td>{row.role}</td>
                  <td>{row.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Sheet>
      </Section>

      <Section
        title="Sizes"
        description="Tables support small, medium, and large sizes."
      >
        {(["sm", "md", "lg"] as const).map((size) => (
          <Box key={size} sx={{ mb: 3 }}>
            <Typography level="title-sm" sx={{ mb: 1 }}>
              {size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"}
            </Typography>
            <Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
              <Table size={size}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {teamData.slice(0, 2).map((row) => (
                    <tr key={row.email}>
                      <td>{row.name}</td>
                      <td>{row.role}</td>
                      <td>{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Sheet>
          </Box>
        ))}
      </Section>

      <Section
        title="Variants"
        description="Tables can be wrapped in different Sheet variants."
      >
        {(["outlined", "soft", "plain"] as const).map((variant) => (
          <Box key={variant} sx={{ mb: 3 }}>
            <Typography level="title-sm" sx={{ mb: 1, textTransform: "capitalize" }}>
              {variant} sheet
            </Typography>
            <Sheet variant={variant} sx={{ borderRadius: "md", overflow: "auto" }}>
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {teamData.slice(0, 2).map((row) => (
                    <tr key={row.email}>
                      <td>{row.name}</td>
                      <td>{row.role}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Sheet>
          </Box>
        ))}
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";

// Basic table
<Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
  <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ahmed</td>
        <td>ahmed@example.com</td>
      </tr>
    </tbody>
  </Table>
</Sheet>

// Striped
<Table stripe="odd">...</Table>

// Hover effect
<Table hoverRow>...</Table>

// Sizes
<Table size="sm">...</Table>
<Table size="lg">...</Table>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <Typography level="title-sm" sx={{ mb: 1 }}>Table</Typography>
        <PropsTable
          props={[
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "stripe", type: '"odd" | "even" | false', default: "false" },
            { name: "hoverRow", type: "boolean", default: "false" },
            { name: "stickyHeader", type: "boolean", default: "false" },
            { name: "borderAxis", type: '"xBetween" | "x" | "y" | "both" | "none"', default: '"xBetween"' },
          ]}
        />
      </Section>
    </Box>
  );
}
