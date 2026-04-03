import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
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

export default function ButtonsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 3 }}>
        Buttons
      </Typography>

      <Section title="Variants">
        <Stack direction="row" spacing={1.5} flexWrap="wrap">
          <Button variant="solid" color="primary">Solid Primary</Button>
          <Button variant="solid" color="neutral">Solid Neutral</Button>
          <Button variant="solid" color="danger">Solid Danger</Button>
          <Button variant="solid" color="success">Solid Success</Button>
          <Button variant="solid" color="warning">Solid Warning</Button>
        </Stack>
      </Section>

      <Section title="Outlined">
        <Stack direction="row" spacing={1.5} flexWrap="wrap">
          <Button variant="outlined" color="primary">Outlined Primary</Button>
          <Button variant="outlined" color="neutral">Outlined Neutral</Button>
          <Button variant="outlined" color="danger">Outlined Danger</Button>
        </Stack>
      </Section>

      <Section title="Soft">
        <Stack direction="row" spacing={1.5} flexWrap="wrap">
          <Button variant="soft" color="primary">Soft Primary</Button>
          <Button variant="soft" color="neutral">Soft Neutral</Button>
          <Button variant="soft" color="danger">Soft Danger</Button>
          <Button variant="soft" color="success">Soft Success</Button>
          <Button variant="soft" color="warning">Soft Warning</Button>
        </Stack>
      </Section>

      <Section title="Plain">
        <Stack direction="row" spacing={1.5} flexWrap="wrap">
          <Button variant="plain" color="primary">Plain Primary</Button>
          <Button variant="plain" color="neutral">Plain Neutral</Button>
          <Button variant="plain" color="danger">Plain Danger</Button>
        </Stack>
      </Section>

      <Section title="Sizes">
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Stack>
      </Section>

      <Section title="Disabled">
        <Stack direction="row" spacing={1.5}>
          <Button disabled variant="solid">Disabled Solid</Button>
          <Button disabled variant="outlined">Disabled Outlined</Button>
          <Button disabled variant="soft">Disabled Soft</Button>
        </Stack>
      </Section>

      <Section title="Icon Buttons">
        <Stack direction="row" spacing={1.5} alignItems="center">
          <IconButton size="sm" variant="outlined" color="neutral">+</IconButton>
          <IconButton size="md" variant="outlined" color="neutral">+</IconButton>
          <IconButton size="lg" variant="outlined" color="neutral">+</IconButton>
          <IconButton variant="solid" color="primary">+</IconButton>
          <IconButton variant="soft" color="danger">X</IconButton>
        </Stack>
      </Section>
    </Box>
  );
}
