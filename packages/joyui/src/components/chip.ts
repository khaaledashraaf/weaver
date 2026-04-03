import { tokens } from "../tokens";

export const JoyChip = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      fontWeight: 500,
      ...(ownerState.size === "sm" && {
        borderRadius: tokens.radius.md,
        fontSize: "0.8125rem",
        lineHeight: "1.25rem",
        "--Chip-minHeight": "24px",
        "--Chip-paddingInline": tokens.spacing.md,
        "--Chip-gap": tokens.spacing.xs,
      }),
      ...(ownerState.size === "md" && {
        borderRadius: tokens.radius["control-default"],
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        "--Chip-minHeight": "28px",
        "--Chip-paddingInline": tokens.spacing.lg,
        "--Chip-gap": tokens.spacing.xs,
      }),
      ...(ownerState.size === "lg" && {
        borderRadius: tokens.radius["control-default"],
        fontSize: "0.9375rem",
        lineHeight: "1.5rem",
        "--Chip-minHeight": "36px",
        "--Chip-paddingInline": tokens.spacing.xl,
        "--Chip-gap": tokens.spacing.xs,
      }),
    }),
  },
};
