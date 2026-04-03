import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
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

export default function SelectPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 3 }}>
        Select
      </Typography>

      <Section title="Sizes">
        <Stack spacing={2} sx={{ maxWidth: 300 }}>
          <Select size="sm" placeholder="Small">
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
          </Select>
          <Select size="md" placeholder="Medium">
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
          </Select>
          <Select size="lg" placeholder="Large">
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
          </Select>
        </Stack>
      </Section>

      <Section title="With Form Control">
        <FormControl sx={{ maxWidth: 300 }}>
          <FormLabel>Country</FormLabel>
          <Select placeholder="Select a country">
            <Option value="us">United States</Option>
            <Option value="uk">United Kingdom</Option>
            <Option value="ae">United Arab Emirates</Option>
            <Option value="eg">Egypt</Option>
          </Select>
        </FormControl>
      </Section>

      <Section title="Disabled">
        <Select disabled placeholder="Disabled" sx={{ maxWidth: 300 }}>
          <Option value="1">Option 1</Option>
        </Select>
      </Section>
    </Box>
  );
}
