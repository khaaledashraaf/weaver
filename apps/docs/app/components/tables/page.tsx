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

/* ── Figma reference ──
  Header: min-h 44px, body-sm/medium (14/500/20), color content/subtle, bg interactive/table/header
  Row sizes: sm = 48px, lg = 56px (Joy md ≈ sm in Figma terms)
  Cell padding-X: 8px (space/md-8); cell text: body-sm/regular (14/400/20), color content/default
  Hover bg = Selected bg = interactive/ghost/hover (#587b8c12)
  Bottom border on every row: border/subtle (#37537a21)
  Table itself has NO outer border or radius — wrap in Sheet for a card frame.
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
        Tables display data in rows and columns. The Weaver theme styles header,
        body, hover, and selected states to match Figma — but the table itself
        renders with no outer border or radius. Wrap in a {`<Sheet variant="outlined">`}
        when you want a card frame, or render flush in your own layout container.
        Header is 44px (min) with body-sm/medium text on a subtle bg; rows are
        48px (sm/md) or 56px (lg).
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

      <Section
        title="Sizes"
        description="sm and md render at 48px row height; lg renders at 56px (Figma values)."
      >
        <DemoBox
          code={`<Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
  <Table size="sm">{/* 48px rows */}</Table>
</Sheet>

<Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto", mt: 2 }}>
  <Table size="lg">{/* 56px rows */}</Table>
</Sheet>`}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
              <Table size="sm">
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
            <Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
              <Table size="lg">
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
          </Box>
        </DemoBox>
      </Section>

      <Section
        title="Selected Row"
        description="Apply aria-selected on a <tr> to highlight it. Selected uses the same bg as hover per Figma."
      >
        <DemoBox
          code={`<Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
  <Table hoverRow>
    <thead>
      <tr><th>Name</th><th>Role</th><th>Email</th></tr>
    </thead>
    <tbody>
      <tr><td>Ahmed Hassan</td><td>Designer</td><td>ahmed@example.com</td></tr>
      <tr aria-selected="true"><td>Sara Ali</td><td>Developer</td><td>sara@example.com</td></tr>
      <tr><td>Omar Khaled</td><td>PM</td><td>omar@example.com</td></tr>
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
                {teamData.slice(0, 3).map((row, i) => (
                  <tr key={row.email} aria-selected={i === 1 ? true : undefined}>
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
        title="Flush (no card)"
        description="Render the table without a Sheet wrapper. Matches Figma's minimal example — just stacked rows."
      >
        <DemoBox
          code={`<Box sx={{ overflowX: "auto" }}>
  <Table>...</Table>
</Box>`}
        >
          <Box sx={{ overflowX: "auto" }}>
            <Table>
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
          </Box>
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
