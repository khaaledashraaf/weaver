import { tokens } from "../tokens";

export const JoyRadio = {
  styleOverrides: {
    root: {
      gap: tokens.spacing.sm,
    },
    radio: ({ ownerState }: { ownerState: any }) => ({
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

export const JoyRadioGroup = {
  styleOverrides: {
    root: {
      gap: tokens.spacing.md,
    },
  },
};
