import { tokens } from "../tokens";

export const JoyCheckbox = {
  styleOverrides: {
    root: {
      gap: tokens.spacing.md,
    },
    checkbox: ({ ownerState }: { ownerState: any }) => ({
      borderRadius: tokens.radius.sm,
      ...(ownerState.size === "sm" && {
        width: 14,
        height: 14,
      }),
      ...(ownerState.size === "md" && {
        width: 16,
        height: 16,
      }),
      ...(ownerState.size === "lg" && {
        width: 20,
        height: 20,
      }),
      "&.Mui-disabled, &.Joy-disabled": {
        opacity: 0.5,
      },
    }),
  },
};
