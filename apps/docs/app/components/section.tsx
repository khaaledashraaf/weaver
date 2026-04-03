import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";

export function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Box component="section" sx={{ mt: 6, "&:first-of-type": { mt: 0 } }}>
      <Typography level="h3" sx={{ mb: description ? 0.5 : 2 }}>
        {title}
      </Typography>
      {description && (
        <Typography level="body-sm" sx={{ color: "text.secondary", mb: 2 }}>
          {description}
        </Typography>
      )}
      <Box sx={{ mt: 2 }}>{children}</Box>
    </Box>
  );
}
