"use client";

import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import { tokens } from "weaver-ui-joyui";
import { Section } from "./components/section";
import { CodeBlock } from "./components/code-block";

const brandColors = [
  "blue",
  "green",
  "red",
  "amber",
  "purple",
  "slate",
  "gray",
] as const;

const shades = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "950",
];

const radiusValues = [
  { name: "xs", value: "4px" },
  { name: "sm", value: "8px" },
  { name: "md", value: "12px" },
  { name: "lg", value: "16px" },
  { name: "xl", value: "24px" },
];

export default function HomePage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Weaver Design System
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Weaver is a Joy UI theme implementation that provides consistent colors,
        typography, spacing, and border-radius across all components. Wrap your
        application with WeaverProvider and use standard Joy UI components --
        they automatically inherit the Weaver theme.
      </Typography>

      <Section
        title="Quick Start"
        description="Install the package and wrap your app."
      >
        <CodeBlock>{`import { WeaverProvider } from "weaver-ui-joyui";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";

function App() {
  return (
    <WeaverProvider>
      {/* All Joy UI components now use the Weaver theme */}
      <Button variant="solid" color="primary">
        Save Changes
      </Button>
      <Input placeholder="Search..." />
    </WeaverProvider>
  );
}`}</CodeBlock>
      </Section>

      <Section
        title="Color Palette"
        description="The Weaver brand palette. Hover over swatches to see token names and hex values."
      >
        <Stack spacing={3}>
          {brandColors.map((color) => (
            <Box key={color}>
              <Typography level="title-sm" sx={{ mb: 1, textTransform: "capitalize" }}>
                {color}
              </Typography>
              <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                {shades.map((shade) => {
                  const key = `${color}-${shade}` as keyof typeof tokens.brand;
                  const hex = tokens.brand[key];
                  if (!hex) return null;
                  return (
                    <Box key={shade} sx={{ textAlign: "center" }}>
                      <Sheet
                        sx={{
                          width: 56,
                          height: 40,
                          borderRadius: "sm",
                          bgcolor: hex,
                          border: "1px solid",
                          borderColor: "divider",
                        }}
                        title={`${key}: ${hex}`}
                      />
                      <Typography level="body-xs" sx={{ mt: 0.5, color: "text.tertiary" }}>
                        {shade}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          ))}
        </Stack>
      </Section>

      <Section
        title="Spacing Scale"
        description="Consistent spacing tokens used throughout the design system."
      >
        <Stack spacing={1.5}>
          {Object.entries(tokens.spacing)
            .slice(0, 12)
            .map(([name, value]) => (
              <Box
                key={name}
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
              >
                <Typography
                  level="body-sm"
                  fontFamily="monospace"
                  sx={{ width: 80, flexShrink: 0 }}
                >
                  {name}
                </Typography>
                <Sheet
                  sx={{
                    height: 16,
                    width: value,
                    bgcolor: "primary.400",
                    borderRadius: "xs",
                    minWidth: 4,
                  }}
                />
                <Typography level="body-xs" sx={{ color: "text.tertiary" }}>
                  {value}
                </Typography>
              </Box>
            ))}
        </Stack>
      </Section>

      <Section
        title="Border Radius Scale"
        description="The Weaver radius tokens applied to component corners."
      >
        <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
          {radiusValues.map((r) => (
            <Box key={r.name} sx={{ textAlign: "center" }}>
              <Sheet
                variant="outlined"
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: r.name,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography level="body-xs" fontFamily="monospace">
                  {r.name}
                </Typography>
              </Sheet>
              <Typography level="body-xs" sx={{ mt: 0.5, color: "text.tertiary" }}>
                {r.value}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Section>
    </Box>
  );
}
