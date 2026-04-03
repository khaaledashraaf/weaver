import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Tooltip from "@mui/joy/Tooltip";
import Button from "@mui/joy/Button";
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

export default function TooltipsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 3 }}>
        Tooltips
      </Typography>

      <Section title="Placements">
        <Stack direction="row" spacing={2}>
          <Tooltip title="Top tooltip" placement="top">
            <Button variant="outlined" color="neutral">Top</Button>
          </Tooltip>
          <Tooltip title="Bottom tooltip" placement="bottom">
            <Button variant="outlined" color="neutral">Bottom</Button>
          </Tooltip>
          <Tooltip title="Left tooltip" placement="left">
            <Button variant="outlined" color="neutral">Left</Button>
          </Tooltip>
          <Tooltip title="Right tooltip" placement="right">
            <Button variant="outlined" color="neutral">Right</Button>
          </Tooltip>
        </Stack>
      </Section>

      <Section title="Variants">
        <Stack direction="row" spacing={2}>
          <Tooltip title="Solid tooltip" variant="solid">
            <Button variant="soft">Solid</Button>
          </Tooltip>
          <Tooltip title="Soft tooltip" variant="soft">
            <Button variant="soft">Soft</Button>
          </Tooltip>
          <Tooltip title="Outlined tooltip" variant="outlined">
            <Button variant="soft">Outlined</Button>
          </Tooltip>
        </Stack>
      </Section>
    </Box>
  );
}
