"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

const sizes = ["sm", "md", "lg"] as const;
const colors = ["primary", "neutral", "danger", "success", "warning"] as const;

export default function AvatarPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Avatar
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Avatars represent users or entities with images, initials, or icons.
        Weaver sizes map to 32px (sm), 40px (md), and 48px (lg) with 600
        font-weight for initials.
      </Typography>

      <Section
        title="Sizes"
        description="Three sizes matching Figma: sm (32px), md (40px), lg (48px)."
      >
        <Stack direction="row" spacing={2} alignItems="center">
          {sizes.map((size) => (
            <Avatar key={size} size={size}>
              {size.toUpperCase()}
            </Avatar>
          ))}
        </Stack>
      </Section>

      <Section
        title="With Image"
        description="Pass a src prop to render an image avatar."
      >
        <Stack direction="row" spacing={2} alignItems="center">
          {sizes.map((size) => (
            <Avatar
              key={size}
              size={size}
              src="https://i.pravatar.cc/150?img=3"
              alt="User"
            />
          ))}
        </Stack>
      </Section>

      <Section
        title="Colors"
        description="Avatars support all semantic color palettes."
      >
        <Stack direction="row" spacing={2} alignItems="center">
          {colors.map((color) => (
            <Avatar key={color} color={color}>
              {color[0].toUpperCase()}
            </Avatar>
          ))}
        </Stack>
      </Section>

      <Section
        title="Variants"
        description="Four variant styles control the visual emphasis."
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar variant="solid" color="primary">A</Avatar>
          <Avatar variant="soft" color="primary">A</Avatar>
          <Avatar variant="outlined" color="primary">A</Avatar>
          <Avatar variant="plain" color="primary">A</Avatar>
        </Stack>
      </Section>

      <Section
        title="Avatar Group"
        description="Stack multiple avatars with overlapping layout."
      >
        <AvatarGroup>
          <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
          <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
          <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
          <Avatar>+3</Avatar>
        </AvatarGroup>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";

// Initials avatar
<Avatar size="md">JD</Avatar>

// Image avatar
<Avatar src="/avatar.jpg" alt="Jane Doe" />

// Icon avatar
<Avatar color="primary">
  <UserIcon />
</Avatar>

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
            { name: "variant", type: '"solid" | "soft" | "outlined" | "plain"', default: '"soft"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"neutral"' },
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
