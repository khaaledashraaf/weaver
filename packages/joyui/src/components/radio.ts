import { tokens } from "../tokens";

export const JoyRadio = {
  styleOverrides: {
    root: {
      gap: tokens.spacing.lg,
    },
    radio: ({ ownerState }: { ownerState: any }) => ({
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

export const JoyRadioGroup = {
  styleOverrides: {
    root: {
      gap: tokens.spacing.md,
    },
  },
};
