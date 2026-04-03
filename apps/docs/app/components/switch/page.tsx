import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Switch from "@mui/joy/Switch";
import Stack from "@mui/joy/Stack";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography level="title-lg" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default function SwitchPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 3 }}>
        Switch
      </Typography>

      <Section title="Default">
        <Stack spacing={2}>
          <Switch />
          <Switch defaultChecked />
        </Stack>
      </Section>

      <Section title="Sizes">
        <Stack direction="row" spacing={3} alignItems="center">
          <Switch size="sm" />
          <Switch size="md" />
          <Switch size="lg" />
        </Stack>
      </Section>

      <Section title="Disabled">
        <Stack direction="row" spacing={3}>
          <Switch disabled />
          <Switch disabled defaultChecked />
        </Stack>
      </Section>
    </Box>
  );
}
