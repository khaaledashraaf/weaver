"use client";

import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Link from "next/link";
import Aurora from "./components/aurora";
import { RiArrowRightLine, RiBook2Line, RiGithubFill } from "@remixicon/react";
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
            maxWidth: 560,
            mx: "auto",
            mb: 5,
            lineHeight: 1.8,
            "& img": {
              display: "inline-block",
              verticalAlign: "middle",
              position: "relative",
              top: "-1px",
            },
          }}
        >
          A{" "}
          <Box
            component="a"
            href="https://mui.com/joy-ui/getting-started/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.25,
              bgcolor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "xl",
              px: 1,
              py: 0.25,
              verticalAlign: "middle",
              textDecoration: "none",
              transition: "background 0.2s",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.15)",
              },
              margin: "0 4px",
            }}
          >
            <img src="https://mui.com/static/logo.svg" alt="Joy UI" height={14} />
            <Box
              component="span"
              sx={{ color: "rgba(187, 218, 255, 0.85)", fontWeight: 600, fontSize: "14px", fontFamily: "monospace" }}
            >
              Joy UI
            </Box>
          </Box>{" "}
          theme implementation that brings{" "}
          <Box
            component="a"
            href="https://www.figma.com/design/cW9hqrg3b606UXmeSniB8F/Weaver-Design-system"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.25,
              bgcolor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "xl",
              px: 1,
              py: 0.25,
              verticalAlign: "middle",
              textDecoration: "none",
              transition: "background 0.2s",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.15)",
              },
              margin: "0 4px",
            }}
          >
            <svg
              width="auto"
              height="14"
              viewBox="0 0 38 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
                fill="#1ABCFE"
              />
              <path
                d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
                fill="#0ACF83"
              />
              <path
                d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
                fill="#FF7262"
              />
              <path
                d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
                fill="#F24E1E"
              />
              <path
                d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
                fill="#A259FF"
              />
            </svg>
            <Box
              component="span"
              sx={{ color: "rgba(187, 218, 255, 0.85)", fontWeight: 600, fontSize: "14px", fontFamily: "monospace" }}
            >
              Weaver
            </Box>
          </Box>{" "}
          design system{" "}
          to life with consistent tokens, typography, and component overrides.
        </Typography>

        <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap" }}>
          <Button
            component={Link}
            href="/docs"
            variant="solid"
            color="primary"
            size="lg"
            sx={{
              position: "relative",
              overflow: "hidden",
              gap: "8px",
              "& .btn-book": {
                display: "inline-flex",
                transition: "opacity 0.3s, transform 0.3s, width 0.3s, margin 0.3s",
                opacity: 1,
                transform: "translateX(0)",
                width: 20,
                marginRight: 0,
              },
              "& .btn-arrow": {
                display: "inline-flex",
                transition: "opacity 0.3s, transform 0.3s, width 0.3s, margin 0.3s",
                opacity: 0,
                transform: "translateX(-8px)",
                width: 0,
                marginLeft: 0,
                overflow: "hidden",
              },
              "&:hover .btn-book": {
                opacity: 0,
                transform: "translateX(-8px)",
                width: 0,
                marginRight: 0,
              },
              "&:hover .btn-arrow": {
                opacity: 1,
                transform: "translateX(0)",
                width: 20,
                marginLeft: 0,
              },
            }}
          >
            <span className="btn-book"><RiBook2Line size={20} /></span>
            Go to Documentation
            <span className="btn-arrow"><RiArrowRightLine size={20} /></span>
          </Button>
          <Button
            component="a"
            href="https://github.com/fastfishio/weaver"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            color="neutral"
            size="lg"
            startDecorator={<RiGithubFill size={20} />}
            sx={{
              gap: "8px",
              color: "rgba(255, 255, 255, 0.85)",
              borderColor: "rgba(255, 255, 255, 0.2)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.3)",
                color: "#fff",
              },
            }}
          >
            View on GitHub
          </Button>
        </Box>
      </Box>

      {/* Footnote */}
      <Typography
        sx={{
          position: "absolute",
          bottom: 24,
          left: 0,
          right: 0,
          zIndex: 1,
          textAlign: "center",
          px: 3,
          color: "rgba(187, 218, 255, 0.4)",
          fontSize: "0.8125rem",
          lineHeight: 1.6,
        }}
      >
        Designed by Ahmed Galal. Implemented by Khaled ElMalih with the help of
        Nuwan Dharmapala, Omar ElZawawi, and Salah Wahsh.
      </Typography>
    </Box>
  );
}
