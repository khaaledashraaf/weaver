"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Chip from "@mui/joy/Chip";
import { Section } from "../section";
import { DemoBox } from "../demo-box";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  Table item types: Avatar+text, Brand logo+text, Payment, Image, Only Avatar,
                    File, Avatar stack, base(Regular), base(Leading), Subtle,
                    Rating, checkbox, Progress, Toggle, Badges, Tags, Action, Action Group
  Table item sizes: sm (48px row), lg (56px row)
  Table header item types: Checkbox, Empty, Label
  Table Example: type (Header/Row), state (Default/Hover/Selected)

  Header: 44px, 14px/500 text, subtle bg
  Cell padding: 8px
*/

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
      <Typography level="h2" sx={{ mb: 0.5 }}>
        Table
      </Typography>
      <Typography level="body-md" sx={{ mb: 5, color: "text.secondary" }}>
        Tables display data in rows and columns. Weaver table headers are 44px
        tall with 14px / 500 weight text and a subtle background. Two row
        sizes from Figma: sm (48px) and lg (56px). Cell padding is 8px.
      </Typography>

      <Section
        title="Basic Table"
        description="A data table with header and rows matching Figma Table Example component."
      >
        <DemoBox
          code={`<Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
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
      <tr>
        <td>Ahmed Hassan</td>
        <td>Designer</td>
        <td>ahmed@example.com</td>
        <td><Chip size="sm" color="success">Active</Chip></td>
      </tr>
    </tbody>
  </Table>
</Sheet>`}
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
                      <Chip size="sm" color={row.status === "Active" ? "success" : "neutral"}>
                        {row.status}
                      </Chip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Sheet>
        </DemoBox>
      </Section>

      <Section
        title="Striped Table"
        description="Alternating row backgrounds for readability."
      >
        <DemoBox
          code={`<Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
  <Table stripe="odd">
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Ahmed Hassan</td><td>Designer</td><td>ahmed@example.com</td></tr>
      <tr><td>Sara Ali</td><td>Developer</td><td>sara@example.com</td></tr>
    </tbody>
  </Table>
</Sheet>`}
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
        </DemoBox>
      </Section>

      <Section
        title="Hover Effect"
        description="Figma Table Example includes a Hover state for rows."
      >
        <DemoBox
          code={`<Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
  <Table hoverRow>
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Ahmed Hassan</td><td>Designer</td><td>ahmed@example.com</td></tr>
    </tbody>
  </Table>
</Sheet>`}
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
                {teamData.slice(0, 3).map((row) => (
                  <tr key={row.email}>
                    <td>{row.name}</td>
                    <td>{row.role}</td>
                    <td>{row.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Sheet>
        </DemoBox>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";

<Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
  <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ahmed</td>
        <td>Designer</td>
      </tr>
    </tbody>
  </Table>
</Sheet>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "stripe", type: '"odd" | "even"', default: "-" },
            { name: "hoverRow", type: "boolean", default: "false" },
            { name: "borderAxis", type: '"xBetween" | "yBetween" | "both" | "none"', default: '"xBetween"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
          ]}
        />
      </Section>
    </Box>
  );
}
