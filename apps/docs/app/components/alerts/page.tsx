import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Alert from "@mui/joy/Alert";
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

export default function AlertsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 3 }}>
        Alerts
      </Typography>

      <Section title="Colors">
        <Stack spacing={2}>
          <Alert color="primary">This is a primary alert.</Alert>
          <Alert color="neutral">This is a neutral alert.</Alert>
          <Alert color="danger">This is a danger alert.</Alert>
          <Alert color="success">This is a success alert.</Alert>
          <Alert color="warning">This is a warning alert.</Alert>
        </Stack>
      </Section>

      <Section title="Variants">
        <Stack spacing={2}>
          <Alert variant="solid" color="primary">Solid alert</Alert>
          <Alert variant="soft" color="primary">Soft alert</Alert>
          <Alert variant="outlined" color="primary">Outlined alert</Alert>
        </Stack>
      </Section>
    </Box>
  );
}
