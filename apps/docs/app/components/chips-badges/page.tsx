import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Badge from "@mui/joy/Badge";
import Avatar from "@mui/joy/Avatar";
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

export default function ChipsBadgesPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 3 }}>
        Chips & Badges
      </Typography>

      <Section title="Chip Variants">
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Chip variant="solid" color="primary">Solid</Chip>
          <Chip variant="soft" color="primary">Soft</Chip>
          <Chip variant="outlined" color="primary">Outlined</Chip>
          <Chip variant="plain" color="primary">Plain</Chip>
        </Stack>
      </Section>

      <Section title="Chip Colors">
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Chip color="primary">Primary</Chip>
          <Chip color="neutral">Neutral</Chip>
          <Chip color="danger">Danger</Chip>
          <Chip color="success">Success</Chip>
          <Chip color="warning">Warning</Chip>
        </Stack>
      </Section>

      <Section title="Chip Sizes">
        <Stack direction="row" spacing={1} alignItems="center">
          <Chip size="sm">Small</Chip>
          <Chip size="md">Medium</Chip>
          <Chip size="lg">Large</Chip>
        </Stack>
      </Section>

      <Section title="Badges">
        <Stack direction="row" spacing={4}>
          <Badge badgeContent={4}>
            <Avatar />
          </Badge>
          <Badge badgeContent={99} color="danger">
            <Avatar />
          </Badge>
          <Badge badgeContent="New" color="success">
            <Avatar />
          </Badge>
        </Stack>
      </Section>
    </Box>
  );
}
