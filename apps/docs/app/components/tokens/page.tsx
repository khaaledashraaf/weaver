"use client";

import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import { tokens } from "weaver-ui-joyui";
import { Section } from "../section";

/* ── Brand color grouping ──────────────────────────────────── */

type BrandKey = keyof typeof tokens.brand;

/** Group brand tokens by their color family prefix. */
function groupBrandColors() {
  const groups: Record<string, { key: string; shade: string; hex: string }[]> =
    {};

  for (const [key, hex] of Object.entries(tokens.brand)) {
    // keys like "blue-500", "gray-dark-alpha-50", "base-white"
    // find the last numeric-ish segment as the shade
    const parts = key.split("-");
    let shade = parts[parts.length - 1];
    let group = parts.slice(0, -1).join("-");

    // handle "base-white", "base-black" → group "base"
    if (!group) {
      group = key;
      shade = "";
    }

    if (!groups[group]) groups[group] = [];
    groups[group].push({ key, shade, hex });
  }

  return groups;
}

const brandGroups = groupBrandColors();

/* ── Alias token grouping ──────────────────────────────────── */

function groupAliasTokens() {
  const groups: Record<string, { key: string; value: string }[]> = {};

  for (const [key, value] of Object.entries(tokens.alias)) {
    // group by first segment: bg, border, content, interactive, chart, alpha
    const prefix = key.split("-")[0];
    const group =
      prefix === "bg"
        ? "Background"
        : prefix === "border"
          ? "Border"
          : prefix === "content"
            ? "Content"
            : prefix === "interactive"
              ? "Interactive"
              : prefix === "chart"
                ? "Chart"
                : "Other";

    if (!groups[group]) groups[group] = [];
    groups[group].push({ key, value });
  }

  return groups;
}

const aliasGroups = groupAliasTokens();

/* ── Helpers ───────────────────────────────────────────────── */

/** Resolve alias references like {brand.blue-500} to hex. */
function resolveAlias(value: string): string {
  const match = value.match(/^\{brand\.(.+)\}$/);
  if (match) {
    return tokens.brand[match[1] as BrandKey] ?? value;
  }
  return value;
}

/* ── Component ─────────────────────────────────────────────── */

export default function TokensPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Tokens
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Design tokens are the single source of truth for colors, spacing,
        radius, and shadows. They are extracted from Figma and follow a two-tier
        system: brand primitives and semantic aliases.
      </Typography>

      {/* ── Brand Colors ─────────────────────────────── */}
      <Section
        title="Brand Colors"
        description="Primitive color palette. Hover over swatches to see token names and hex values."
      >
        <Stack spacing={3}>
          {Object.entries(brandGroups).map(([group, swatches]) => (
            <Box key={group}>
              <Typography
                level="title-sm"
                sx={{ mb: 1, fontFamily: "monospace" }}
              >
                {group}
              </Typography>
              <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                {swatches.map(({ key, shade, hex }) => (
                  <Box key={key} sx={{ textAlign: "center" }}>
                    <Sheet
                      sx={{
                        width: 56,
                        height: 40,
                        borderRadius: "sm",
                        bgcolor: hex,
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                      title={`{brand.${key}}: ${hex}`}
                    />
                    <Typography
                      level="body-xs"
                      sx={{ mt: 0.5, color: "text.tertiary" }}
                    >
                      {shade}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Stack>
      </Section>

      {/* ── Alias Tokens ─────────────────────────────── */}
      <Section
        title="Alias Tokens"
        description="Semantic tokens that reference brand primitives. Organized by category."
      >
        <Stack spacing={4}>
          {Object.entries(aliasGroups).map(([group, items]) => (
            <Box key={group}>
              <Typography level="title-sm" sx={{ mb: 1.5 }}>
                {group}
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns:
                    "minmax(0, 1fr) minmax(0, 1fr) auto",
                  gap: 0,
                  borderRadius: "md",
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                {items.map(({ key, value }, i) => {
                  const resolved = resolveAlias(value);
                  return (
                    <Box
                      key={key}
                      sx={{
                        display: "contents",
                        "& > *": {
                          py: 0.75,
                          px: 1.5,
                          borderBottom:
                            i < items.length - 1
                              ? "1px solid"
                              : "none",
                          borderColor: "divider",
                        },
                      }}
                    >
                      <Typography
                        level="body-xs"
                        fontFamily="monospace"
                        sx={{ bgcolor: "background.level1" }}
                      >
                        {key}
                      </Typography>
                      <Typography
                        level="body-xs"
                        fontFamily="monospace"
                        sx={{ color: "text.tertiary" }}
                      >
                        {value}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Sheet
                          sx={{
                            width: 20,
                            height: 20,
                            borderRadius: "xs",
                            bgcolor: resolved,
                            border: "1px solid",
                            borderColor: "divider",
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          level="body-xs"
                          fontFamily="monospace"
                          sx={{ color: "text.tertiary" }}
                        >
                          {resolved}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          ))}
        </Stack>
      </Section>

      {/* ── Shadow ────────────────────────────────────── */}
      <Section
        title="Shadows"
        description="Elevation shadow tokens used for depth and layering."
      >
        <Stack spacing={2}>
          {Object.entries(tokens.shadow).map(([name, value]) => (
            <Box
              key={name}
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              <Typography
                level="body-sm"
                fontFamily="monospace"
                sx={{ width: 40, flexShrink: 0 }}
              >
                {name}
              </Typography>
              <Sheet
                sx={{
                  width: 80,
                  height: 48,
                  borderRadius: "md",
                  boxShadow: value,
                }}
              />
              <Typography
                level="body-xs"
                fontFamily="monospace"
                sx={{ color: "text.tertiary" }}
              >
                {value}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Section>

      {/* ── Radius ────────────────────────────────────── */}
      <Section
        title="Border Radius"
        description="All radius tokens including component-specific control radii."
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {Object.entries(tokens.radius).filter(([name]) => !name.startsWith("control-")).map(([name, value]) => (
            <Box key={name} sx={{ textAlign: "center" }}>
              <Sheet
                variant="outlined"
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: value,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography level="body-xs" fontFamily="monospace">
                  {name}
                </Typography>
              </Sheet>
              <Typography
                level="body-xs"
                sx={{ mt: 0.5, color: "text.tertiary" }}
              >
                {value}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Section>

      {/* ── Spacing ───────────────────────────────────── */}
      <Section
        title="Spacing Scale"
        description="All spacing tokens from the design system."
      >
        <Stack spacing={1.5}>
          {Object.entries(tokens.spacing).map(([name, value]) => (
            <Box
              key={name}
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              <Typography
                level="body-sm"
                fontFamily="monospace"
                sx={{ width: 60, flexShrink: 0 }}
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
    </Box>
  );
}
