"use client";

import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Link from "next/link";
import Aurora from "./components/aurora";

export default function LandingPage() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        bgcolor: "#060918",
      }}
    >
      {/* Aurora background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.8,
        }}
      >
        <Aurora
          colorStops={["#1D49BF", "#5B97FF", "#245DED"]}
          amplitude={1.8}
          blend={0.7}
          speed={0.8}
        />
      </Box>

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          px: 3,
          maxWidth: 720,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.875rem", md: "1rem" },
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(187, 218, 255, 0.7)",
            mb: 2,
          }}
        >
          Design System
        </Typography>

        <Typography
          level="h1"
          sx={{
            fontSize: { xs: "3rem", md: "4.5rem" },
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.1,
            mb: 2,
          }}
        >
          Weaver
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            color: "rgba(187, 218, 255, 0.6)",
            maxWidth: 480,
            mx: "auto",
            mb: 5,
            lineHeight: 1.6,
          }}
        >
          A Joy UI theme implementation that brings your Figma designs to life
          with consistent tokens, typography, and component overrides.
        </Typography>

        <Button
          component={Link}
          href="/docs"
          size="lg"
          sx={{
            px: 4,
            py: 1.2,
            fontSize: "1rem",
            fontWeight: 600,
            borderRadius: "xl",
            bgcolor: "rgba(255,255,255, 0.12)",
            color: "#fff",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255, 0.15)",
            "&:hover": {
              bgcolor: "rgba(255,255,255, 0.2)",
              border: "1px solid rgba(255,255,255, 0.25)",
            },
          }}
        >
          Go to Documentation
        </Button>
      </Box>
    </Box>
  );
}
