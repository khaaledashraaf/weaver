"use client";

import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import { tokens } from "weaver-ui-joyui";

const brandColors = [
  "blue",
  "green",
  "red",
  "amber",
  "purple",
  "slate",
  "gray",
] as const;

const shades = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];

export default function HomePage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Weaver Design System
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Joy UI theme implementation. Browse components in the sidebar.
      </Typography>

      <Typography level="h3" sx={{ mb: 2 }}>
        Color Palette
      </Typography>

      {brandColors.map((color) => (
        <Box key={color} sx={{ mb: 3 }}>
          <Typography level="title-md" sx={{ mb: 1, textTransform: "capitalize" }}>
            {color}
          </Typography>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            {shades.map((shade) => {
              const key = `${color}-${shade}` as keyof typeof tokens.brand;
              const hex = tokens.brand[key];
              if (!hex) return null;
              return (
                <Sheet
                  key={shade}
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "sm",
                    bgcolor: hex,
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                  title={`${key}: ${hex}`}
                />
              );
            })}
          </Box>
        </Box>
      ))}

      <Typography level="h3" sx={{ mt: 4, mb: 2 }}>
        Spacing Scale
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {Object.entries(tokens.spacing).slice(0, 12).map(([name, value]) => (
          <Box key={name} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography level="body-sm" sx={{ width: 80 }}>
              {name}
            </Typography>
            <Sheet
              sx={{
                height: 16,
                width: value,
                bgcolor: "primary.400",
                borderRadius: "xs",
              }}
            />
            <Typography level="body-xs" sx={{ color: "text.tertiary" }}>
              {value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
