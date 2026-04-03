import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
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

export default function InputsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 3 }}>
        Inputs
      </Typography>

      <Section title="Sizes">
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <Input size="sm" placeholder="Small input" />
          <Input size="md" placeholder="Medium input" />
          <Input size="lg" placeholder="Large input" />
        </Stack>
      </Section>

      <Section title="Variants">
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <Input variant="outlined" placeholder="Outlined" />
          <Input variant="soft" placeholder="Soft" />
          <Input variant="plain" placeholder="Plain" />
        </Stack>
      </Section>

      <Section title="With Form Control">
        <Stack spacing={3} sx={{ maxWidth: 400 }}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input placeholder="you@example.com" />
            <FormHelperText>We will never share your email.</FormHelperText>
          </FormControl>
          <FormControl error>
            <FormLabel>Password</FormLabel>
            <Input type="password" color="danger" placeholder="Required" />
            <FormHelperText>Password is required.</FormHelperText>
          </FormControl>
        </Stack>
      </Section>

      <Section title="Disabled">
        <Input disabled placeholder="Disabled input" sx={{ maxWidth: 400 }} />
      </Section>

      <Section title="Textarea">
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <Textarea minRows={3} placeholder="Write something..." />
          <Textarea minRows={3} disabled placeholder="Disabled textarea" />
        </Stack>
      </Section>
    </Box>
  );
}
