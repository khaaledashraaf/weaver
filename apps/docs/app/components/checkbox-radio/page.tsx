import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
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

export default function CheckboxRadioPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 3 }}>
        Checkbox & Radio
      </Typography>

      <Section title="Checkboxes">
        <Stack spacing={1.5}>
          <Checkbox label="Default checkbox" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Disabled checked" disabled defaultChecked />
        </Stack>
      </Section>

      <Section title="Checkbox Sizes">
        <Stack direction="row" spacing={3}>
          <Checkbox size="sm" label="Small" defaultChecked />
          <Checkbox size="md" label="Medium" defaultChecked />
          <Checkbox size="lg" label="Large" defaultChecked />
        </Stack>
      </Section>

      <Section title="Checkbox Colors">
        <Stack direction="row" spacing={3}>
          <Checkbox color="primary" label="Primary" defaultChecked />
          <Checkbox color="neutral" label="Neutral" defaultChecked />
          <Checkbox color="danger" label="Danger" defaultChecked />
          <Checkbox color="success" label="Success" defaultChecked />
          <Checkbox color="warning" label="Warning" defaultChecked />
        </Stack>
      </Section>

      <Section title="Radio Group">
        <RadioGroup defaultValue="option1">
          <Radio value="option1" label="Option 1" />
          <Radio value="option2" label="Option 2" />
          <Radio value="option3" label="Option 3" />
          <Radio value="disabled" label="Disabled option" disabled />
        </RadioGroup>
      </Section>

      <Section title="Radio Sizes">
        <Stack direction="row" spacing={3}>
          <Radio size="sm" label="Small" defaultChecked />
          <Radio size="md" label="Medium" />
          <Radio size="lg" label="Large" />
        </Stack>
      </Section>
    </Box>
  );
}
