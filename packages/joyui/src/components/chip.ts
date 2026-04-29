import { tokens, resolve } from "../tokens";
import { font } from "../typography";

// Joy `color` prop → Weaver accent palette name. `neutral` is handled separately
// because it doesn't follow the accent token naming.
const ACCENT_MAP: Record<string, string> = {
  primary: "blue",
  success: "green",
  warning: "amber",
  danger: "red",
};

function variantStyles(variant: string, color: string) {
  const accent = ACCENT_MAP[color];

  if (color === "neutral") {
    if (variant === "soft") {
      return {
        backgroundColor: resolve("{alias.bg-neutral-subtle}"),
        color: resolve("{alias.content-default}"),
        border: "none",
      };
    }
    if (variant === "outlined") {
      return {
        backgroundColor: "transparent",
        color: resolve("{alias.content-default}"),
        borderColor: resolve("{alias.border-default}"),
      };
    }
    if (variant === "solid") {
      return {
        backgroundColor: resolve("{alias.bg-neutral-default}"),
        color: resolve("{alias.content-on-color}"),
        border: "none",
      };
    }
  }

  if (accent) {
    if (variant === "soft") {
      return {
        backgroundColor: resolve(`{alias.bg-accent-${accent}-subtle}`),
        color: resolve(`{alias.content-accent-${accent}-default}`),
        border: "none",
      };
    }
    if (variant === "outlined") {
      return {
        backgroundColor: "transparent",
        color: resolve(`{alias.content-accent-${accent}-default}`),
        borderColor: resolve(`{alias.border-accent-${accent}-subtle}`),
      };
    }
    if (variant === "solid") {
      return {
        backgroundColor: resolve(`{alias.bg-accent-${accent}-default}`),
        color: resolve("{alias.content-on-color}"),
        border: "none",
      };
    }
  }

  return {};
}

export const JoyChip = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      fontWeight: 500,
      borderRadius: tokens.radius.full,
      ...(ownerState.size === "sm" && {
        fontSize: font["body-3xs"].fontSize,
        lineHeight: font["body-3xs"].lineHeight,
        "--Chip-minHeight": "24px",
        "--Chip-paddingInline": tokens.spacing.md,
        "--Chip-gap": tokens.spacing.xs,
      }),
      ...((ownerState.size === "md" || ownerState.size === "lg") && {
        fontSize: font["body-2xs"].fontSize,
        lineHeight: font["body-2xs"].lineHeight,
        "--Chip-minHeight": "28px",
        "--Chip-paddingInline": tokens.spacing.lg,
        "--Chip-gap": tokens.spacing.xs,
      }),
      ...variantStyles(ownerState.variant, ownerState.color),
    }),
  },
};

// Joy's default ChipDelete renders as a filled circular button. Per Figma the
// close button is just an icon — no bg, no hover fill — that picks up the
// chip's text color.
export const JoyChipDelete = {
  styleOverrides: {
    root: {
      backgroundColor: "transparent",
      color: "inherit",
      borderRadius: tokens.radius.full,
      "&:hover": {
        backgroundColor: "transparent",
        color: "inherit",
      },
      "&:active": {
        backgroundColor: "transparent",
      },
      "&:focus-visible": {
        backgroundColor: "transparent",
      },
    },
  },
};
