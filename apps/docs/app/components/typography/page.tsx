import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";

export default function TypographyPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 3 }}>
        Typography
      </Typography>

      <Stack spacing={2}>
        <Typography level="h1">Heading 1 (3rem)</Typography>
        <Typography level="h2">Heading 2 (2.5rem)</Typography>
        <Typography level="h3">Heading 3 (2rem)</Typography>
        <Typography level="h4">Heading 4 (1.75rem)</Typography>
        <Divider />
        <Typography level="title-lg">Title Large (1.25rem)</Typography>
        <Typography level="title-md">Title Medium (1.0625rem)</Typography>
        <Typography level="title-sm">Title Small (0.9375rem)</Typography>
        <Divider />
        <Typography level="body-lg">
          Body Large - The quick brown fox jumps over the lazy dog. This is
          how body text looks at the large size.
        </Typography>
        <Typography level="body-md">
          Body Medium - The quick brown fox jumps over the lazy dog. This is
          the default body text size used throughout the application.
        </Typography>
        <Typography level="body-sm">
          Body Small - The quick brown fox jumps over the lazy dog. Used for
          secondary information and captions.
        </Typography>
        <Typography level="body-xs">
          Body Extra Small - The quick brown fox jumps over the lazy dog. Used
          for labels and fine print.
        </Typography>
      </Stack>
    </Box>
  );
}
