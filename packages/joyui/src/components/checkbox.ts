import { tokens } from "../tokens";

export const JoyCheckbox = {
  styleOverrides: {
    root: {
      gap: tokens.spacing.sm,
    },
    checkbox: ({ ownerState }: { ownerState: any }) => ({
      borderRadius: tokens.radius.xs,
      ...(ownerState.size === "sm" && {
        width: 16,
        height: 16,
      }),
      ...(ownerState.size === "md" && {
        width: 20,
        height: 20,
      }),
      ...(ownerState.size === "lg" && {
        width: 24,
        height: 24,
      }),
      "&.Mui-disabled, &.Joy-disabled": {
        opacity: 0.5,
      },
    }),
  },
};
