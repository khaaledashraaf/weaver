"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import IconButton from "@mui/joy/IconButton";
import { RiCodeSSlashLine, RiFileCopyLine } from "@remixicon/react";

export function DemoBox({
  children,
  code,
}: {
  children: React.ReactNode;
  code?: string;
}) {
  const [showCode, setShowCode] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Sheet
      variant="outlined"
      sx={{
        borderRadius: "12px",
      }}
    >
      {/* Preview area */}
      <Box
        sx={{
          p: { xs: 3, md: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          bgcolor: "rgba(245, 248, 250, 0.5)",
          minHeight: 120,
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          ...(!code && {
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
          }),
        }}
      >
        {children}
      </Box>

      {/* Toolbar */}
      {code && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 0.5,
            px: 1.5,
            py: 0.75,
            borderTop: "1px solid",
            borderColor: "divider",
            ...(!showCode && {
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
            }),
          }}
        >
          <IconButton
            size="sm"
            variant={showCode ? "soft" : "plain"}
            color={showCode ? "primary" : "neutral"}
            onClick={() => setShowCode((prev) => !prev)}
            title="Show source code"
            sx={{ borderRadius: "8px", "--IconButton-size": "32px" }}
          >
            <RiCodeSSlashLine size={18} />
          </IconButton>
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onClick={handleCopy}
            title={copied ? "Copied!" : "Copy code"}
            sx={{ borderRadius: "8px", "--IconButton-size": "32px" }}
          >
            <RiFileCopyLine size={18} />
          </IconButton>
        </Box>
      )}

      {/* Code area */}
      {code && showCode && (
        <Box
          sx={{
            borderTop: "1px solid",
            borderColor: "divider",
            bgcolor: "#0d1117",
            p: 2.5,
            overflow: "auto",
            maxHeight: 400,
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
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
            <code>{code}</code>
          </pre>
        </Box>
      )}
    </Sheet>
  );
}
