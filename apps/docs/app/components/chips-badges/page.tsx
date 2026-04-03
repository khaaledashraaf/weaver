"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Badge from "@mui/joy/Badge";
import Avatar from "@mui/joy/Avatar";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

const chipVariants = ["solid", "soft", "outlined", "plain"] as const;
const colors = ["primary", "neutral", "danger", "success", "warning"] as const;
const sizes = ["sm", "md", "lg"] as const;

export default function ChipsBadgesPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Chips & Badges
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Chips represent complex entities in small blocks, such as tags, filters,
        or contacts. Weaver chips use 6px radius (sm) and 8px radius (md/lg) —
        not fully rounded — with heights of 24px, 28px, and 36px. Badges use
        full-pill radius with 500 font-weight. Both are styled with
        consistent border-radius and color tokens.
      </Typography>

      {/* Chip sections */}
      <Section
        title="Chip Variants"
        description="Four variants control the visual emphasis of chips."
      >
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {chipVariants.map((variant) => (
            <Chip key={variant} variant={variant} color="primary">
              {variant}
            </Chip>
          ))}
        </Stack>
      </Section>

      <Section
        title="Chip Colors"
        description="Semantic colors for different contexts."
      >
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {colors.map((color) => (
            <Chip key={color} color={color}>
              {color}
            </Chip>
          ))}
        </Stack>
      </Section>

      <Section
        title="Chip Sizes"
        description="Three sizes for different layout densities."
      >
        <Stack direction="row" spacing={1} alignItems="center">
          {sizes.map((size) => (
            <Chip key={size} size={size}>
              {size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"}
            </Chip>
          ))}
        </Stack>
      </Section>

      <Section
        title="Chip States"
        description="Disabled chips cannot be interacted with."
      >
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip disabled variant="solid">Disabled Solid</Chip>
          <Chip disabled variant="soft">Disabled Soft</Chip>
          <Chip disabled variant="outlined">Disabled Outlined</Chip>
        </Stack>
      </Section>

      <Section
        title="Chip Variant x Color Matrix"
        description="Every variant and color combination."
      >
        <Box sx={{ overflowX: "auto" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "80px repeat(5, 1fr)",
              gap: 1,
              minWidth: 500,
              alignItems: "center",
            }}
          >
            <Box />
            {colors.map((color) => (
              <Typography key={color} level="body-xs" fontFamily="monospace" textAlign="center">
                {color}
              </Typography>
            ))}
            {chipVariants.map((variant) => (
              <Box key={variant} sx={{ display: "contents" }}>
                <Typography level="body-xs" fontFamily="monospace">
                  {variant}
                </Typography>
                {colors.map((color) => (
                  <Chip key={color} variant={variant} color={color} size="sm">
                    Label
                  </Chip>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      {/* Badge sections */}
      <Section
        title="Badge"
        description="Badges attach a small indicator to a child element."
      >
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
          <Badge badgeContent="!" color="warning">
            <Avatar />
          </Badge>
        </Stack>
      </Section>

      <Section
        title="Badge Colors"
        description="Semantic colors for different contexts."
      >
        <Stack direction="row" spacing={4}>
          {colors.map((color) => (
            <Badge key={color} badgeContent={3} color={color}>
              <Avatar />
            </Badge>
          ))}
        </Stack>
      </Section>

      <Section
        title="Badge Sizes"
        description="Small and medium badge sizes."
      >
        <Stack direction="row" spacing={4}>
          <Badge badgeContent={1} size="sm">
            <Avatar size="sm" />
          </Badge>
          <Badge badgeContent={1} size="md">
            <Avatar size="md" />
          </Badge>
        </Stack>
      </Section>

      <Section
        title="Badge Variants"
        description="Badges support solid, soft, and outlined variants."
      >
        <Stack direction="row" spacing={4}>
          <Badge badgeContent={5} variant="solid" color="primary">
            <Avatar />
          </Badge>
          <Badge badgeContent={5} variant="soft" color="primary">
            <Avatar />
          </Badge>
          <Badge badgeContent={5} variant="outlined" color="primary">
            <Avatar />
          </Badge>
        </Stack>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Chip from "@mui/joy/Chip";
import Badge from "@mui/joy/Badge";
import Avatar from "@mui/joy/Avatar";

// Chip
<Chip variant="soft" color="primary">Tag</Chip>
<Chip variant="outlined" color="danger" size="sm">Error</Chip>
<Chip disabled>Disabled</Chip>

// Badge
<Badge badgeContent={4}>
  <Avatar />
</Badge>

<Badge badgeContent="New" color="success">
  <Avatar />
</Badge>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <Typography level="title-sm" sx={{ mb: 1 }}>Chip</Typography>
        <PropsTable
          props={[
            { name: "variant", type: '"solid" | "soft" | "outlined" | "plain"', default: '"solid"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"primary"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "disabled", type: "boolean", default: "false" },
            { name: "startDecorator", type: "ReactNode", default: "-" },
            { name: "endDecorator", type: "ReactNode", default: "-" },
            { name: "onClick", type: "() => void", default: "-" },
          ]}
        />
        <Typography level="title-sm" sx={{ mt: 3, mb: 1 }}>Badge</Typography>
        <PropsTable
          props={[
            { name: "badgeContent", type: "ReactNode", default: "-" },
            { name: "variant", type: '"solid" | "soft" | "outlined"', default: '"solid"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"primary"' },
            { name: "size", type: '"sm" | "md"', default: '"md"' },
            { name: "invisible", type: "boolean", default: "false" },
            { name: "max", type: "number", default: "99" },
          ]}
        />
      </Section>
    </Box>
  );
}
