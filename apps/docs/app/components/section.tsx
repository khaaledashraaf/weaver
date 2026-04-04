import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";

export function Section({
  title,
  description,
  children,
  id,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  id?: string;
}) {
  const sectionId =
    id || title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
  return (
    <Box
      component="section"
      id={sectionId}
      sx={{ mt: 6, "&:first-of-type": { mt: 0 } }}
    >
      <Typography
        level="h4"
        sx={{
          mb: description ? 0.5 : 2,
          scrollMarginTop: 80,
          fontSize: "1.25rem",
          "& a": { color: "inherit", textDecoration: "none" },
          "&:hover a::after": { content: '" #"', color: "text.tertiary" },
        }}
      >
        <a href={`#${sectionId}`}>{title}</a>
      </Typography>
      {description && (
        <Typography level="body-sm" sx={{ color: "text.secondary", mb: 2, maxWidth: 600 }}>
          {description}
        </Typography>
      )}
      <Box>{children}</Box>
    </Box>
  );
}
