"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import IconButton from "@mui/joy/IconButton";
import { RiFileCopyLine } from "@remixicon/react";

export function CodeBlock({ children }: { children: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box sx={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
      <IconButton
        size="sm"
        variant="plain"
        onClick={handleCopy}
        title={copied ? "Copied!" : "Copy code"}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 1,
          borderRadius: "8px",
          "--IconButton-size": "32px",
          color: "rgba(255,255,255,0.5)",
          "&:hover": { color: "rgba(255,255,255,0.8)", bgcolor: "rgba(255,255,255,0.1)" },
        }}
      >
        <RiFileCopyLine size={16} />
      </IconButton>
      <Sheet
        sx={{
          p: 2.5,
          overflow: "auto",
          bgcolor: "#0d1117",
          borderRadius: "12px",
          "& pre": {
            m: 0,
            fontSize: "0.8125rem",
            lineHeight: 1.7,
            color: "#e6edf3",
            fontFamily:
              '"Source Code Pro", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          },
        }}
      >
        <pre>
          <code>{children}</code>
        </pre>
      </Sheet>
    </Box>
  );
}
