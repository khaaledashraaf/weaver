import Sheet from "@mui/joy/Sheet";

export function CodeBlock({ children }: { children: string }) {
  return (
    <Sheet
      variant="soft"
      sx={{
        borderRadius: "md",
        p: 2,
        overflow: "auto",
        "& pre": { m: 0, fontSize: "0.8125rem", lineHeight: 1.6 },
        "& code": { fontFamily: "monospace" },
      }}
    >
      <pre><code>{children}</code></pre>
    </Sheet>
  );
}
