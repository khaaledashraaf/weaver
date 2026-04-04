"use client";
import * as React from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import { WeaverPagination } from "weaver-ui-joyui";
import { Section } from "../section";
import { DemoBox } from "../demo-box";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  Types: Numeric, Simple, Summary
  Styles: Ghost, Soft
  Item: 32×32px, radius 8, 15px font, 500 weight
  Active: brand bg, on-brand text
  Inactive: ghost bg, subtle text
*/

function NumericDemo() {
  const [page, setPage] = React.useState(2);
  return (
    <WeaverPagination
      page={page}
      totalPages={10}
      variant="numeric"
      onChange={setPage}
    />
  );
}

function NumericWithSummaryDemo() {
  const [page, setPage] = React.useState(1);
  return (
    <WeaverPagination
      page={page}
      totalPages={10}
      variant="numeric"
      totalItems={200}
      pageSize={10}
      onChange={setPage}
    />
  );
}

function SoftNumericDemo() {
  const [page, setPage] = React.useState(2);
  return (
    <WeaverPagination
      page={page}
      totalPages={10}
      variant="numeric"
      paginationStyle="soft"
      onChange={setPage}
    />
  );
}

function SimpleDemo() {
  const [page, setPage] = React.useState(1);
  return (
    <WeaverPagination
      page={page}
      totalPages={10}
      variant="simple"
      totalItems={20}
      onChange={setPage}
    />
  );
}

function SummaryDemo() {
  const [page, setPage] = React.useState(1);
  return (
    <WeaverPagination
      page={page}
      totalPages={10}
      variant="summary"
      totalItems={200}
      pageSize={10}
      onChange={setPage}
    />
  );
}

export default function PaginationPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 0.5 }}>
        Pagination
      </Typography>
      <Typography level="body-md" sx={{ mb: 5, color: "text.secondary" }}>
        Page navigation for paginated content. Supports numeric, simple
        (prev/next), and summary variants with ghost or soft styling.
      </Typography>

      <Section
        title="Numeric (Ghost)"
        description="Default numeric pagination with page buttons and ghost styling."
      >
        <DemoBox
          code={`<WeaverPagination
  page={2}
  totalPages={10}
  variant="numeric"
  onChange={(p) => setPage(p)}
/>`}
        >
          <NumericDemo />
        </DemoBox>
      </Section>

      <Section
        title="Numeric with summary text"
        description="Numeric pagination with a 'Showing X to Y of Z results' label."
      >
        <DemoBox
          code={`<WeaverPagination
  page={1}
  totalPages={10}
  variant="numeric"
  totalItems={200}
  pageSize={10}
  onChange={(p) => setPage(p)}
/>`}
        >
          <NumericWithSummaryDemo />
        </DemoBox>
      </Section>

      <Section
        title="Numeric (Soft)"
        description="Numeric pagination with soft-styled prev/next buttons."
      >
        <DemoBox
          code={`<WeaverPagination
  page={2}
  totalPages={10}
  variant="numeric"
  paginationStyle="soft"
  onChange={(p) => setPage(p)}
/>`}
        >
          <SoftNumericDemo />
        </DemoBox>
      </Section>

      <Section
        title="Simple"
        description="Previous and Next text buttons with summary."
      >
        <DemoBox
          code={`<WeaverPagination
  page={1}
  totalPages={10}
  variant="simple"
  totalItems={20}
  onChange={(p) => setPage(p)}
/>`}
        >
          <SimpleDemo />
        </DemoBox>
      </Section>

      <Section
        title="Summary"
        description="Prev/Next icon buttons with 'Page X of Y' text."
      >
        <DemoBox
          code={`<WeaverPagination
  page={1}
  totalPages={10}
  variant="summary"
  totalItems={200}
  onChange={(p) => setPage(p)}
/>`}
        >
          <SummaryDemo />
        </DemoBox>
      </Section>

      <Section
        title="Disabled"
        description="All pagination controls disabled."
      >
        <DemoBox
          code={`<WeaverPagination
  page={2}
  totalPages={10}
  variant="numeric"
  disabled
/>`}
        >
          <WeaverPagination page={2} totalPages={10} variant="numeric" disabled />
        </DemoBox>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import { WeaverPagination } from "weaver-ui-joyui";

const [page, setPage] = React.useState(1);

<WeaverPagination
  page={page}
  totalPages={10}
  variant="numeric"       // "numeric" | "simple" | "summary"
  paginationStyle="ghost" // "ghost" | "soft"
  totalItems={200}        // for summary text
  pageSize={10}           // items per page
  onChange={setPage}
/>`}</CodeBlock>
      </Section>
    </Box>
  );
}
