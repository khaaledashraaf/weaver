"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { DemoBox } from "../demo-box";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  Avatar types: Image, Initials, Icon
  Avatar forms: Rounded, Circular
  Avatar sizes: 2xs(16), xs(20), sm(24), md(32), lg(36), xl(40), 2xl(48), 3xl(56), 4xl(64)
  Avatar group sizes: xs, 2xs, md, lg
  Avatar Dot Status colors: Available, Away, Busy, Blocked, Offline
*/

export default function AvatarPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 0.5 }}>
        Avatar
      </Typography>
      <Typography level="body-md" sx={{ mb: 5, color: "text.secondary" }}>
        Avatars represent users or entities. Figma defines 9 sizes (16px to 64px),
        three types (Image, Initials, Icon), and two forms (Rounded, Circular).
        Initials use 600 font-weight. Joy UI maps sm=32px, md=40px, lg=48px.
      </Typography>

      <Section
        title="Types"
        description="Figma defines three avatar types: Image, Initials, and Icon."
      >
        <DemoBox
          code={`<Avatar src="https://i.pravatar.cc/150?img=3" alt="User" />
<Avatar>JD</Avatar>
<Avatar>+</Avatar>`}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack spacing={0.5} alignItems="center">
              <Avatar src="https://i.pravatar.cc/150?img=3" alt="User" />
              <Typography level="body-xs">Image</Typography>
            </Stack>
            <Stack spacing={0.5} alignItems="center">
              <Avatar>JD</Avatar>
              <Typography level="body-xs">Initials</Typography>
            </Stack>
            <Stack spacing={0.5} alignItems="center">
              <Avatar>+</Avatar>
              <Typography level="body-xs">Icon</Typography>
            </Stack>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Sizes"
        description="Joy UI exposes sm (32px), md (40px), lg (48px). Figma has 9 sizes from 16px to 64px."
      >
        <DemoBox
          code={`<Avatar size="sm">SM</Avatar>
<Avatar size="md">MD</Avatar>
<Avatar size="lg">LG</Avatar>`}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack spacing={0.5} alignItems="center">
              <Avatar size="sm">SM</Avatar>
              <Typography level="body-xs">sm (32)</Typography>
            </Stack>
            <Stack spacing={0.5} alignItems="center">
              <Avatar size="md">MD</Avatar>
              <Typography level="body-xs">md (40)</Typography>
            </Stack>
            <Stack spacing={0.5} alignItems="center">
              <Avatar size="lg">LG</Avatar>
              <Typography level="body-xs">lg (48)</Typography>
            </Stack>
          </Stack>
        </DemoBox>
      </Section>

      <Section
        title="Avatar Group"
        description="Stacked avatars with overlap. Figma supports xs, 2xs, md, lg group sizes."
      >
        <DemoBox
          code={`<AvatarGroup>
  <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
  <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
  <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
  <Avatar>+3</Avatar>
</AvatarGroup>`}
        >
          <AvatarGroup>
            <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
            <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
            <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
            <Avatar>+3</Avatar>
          </AvatarGroup>
        </DemoBox>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";

// Image avatar
<Avatar src="/avatar.jpg" alt="Jane Doe" />

// Initials avatar
<Avatar size="md">JD</Avatar>

// Grouped avatars
<AvatarGroup>
  <Avatar src="/user1.jpg" />
  <Avatar src="/user2.jpg" />
  <Avatar>+3</Avatar>
</AvatarGroup>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "src", type: "string", default: "-" },
            { name: "alt", type: "string", default: "-" },
            { name: "children", type: "ReactNode", default: "-" },
          ]}
        />
      </Section>
    </Box>
  );
}
