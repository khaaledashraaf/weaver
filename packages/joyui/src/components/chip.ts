import { tokens } from "../tokens";

export const JoyChip = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      borderRadius: tokens.radius.full,
      fontWeight: 500,
      ...(ownerState.size === "sm" && {
        fontSize: "0.75rem",
        "--Chip-minHeight": "24px",
        "--Chip-paddingInline": tokens.spacing.sm,
      }),
      ...(ownerState.size === "md" && {
        fontSize: "0.8125rem",
        "--Chip-minHeight": "28px",
        "--Chip-paddingInline": tokens.spacing.md,
      }),
      ...(ownerState.size === "lg" && {
        fontSize: "0.875rem",
        "--Chip-minHeight": "32px",
        "--Chip-paddingInline": tokens.spacing.lg,
      }),
    }),
  },
};
