import { tokens, resolve } from "../tokens";

export const JoyCheckbox = {
  styleOverrides: {
    root: {
      gap: tokens.spacing.md,
    },
    label: {
      minWidth: 0,
    },
    checkbox: ({ ownerState }: { ownerState: any }) => ({
      borderRadius: tokens.radius.sm,
      ...(ownerState.size === "sm" && {
        width: 14,
        height: 14,
        "& svg": {
          width: 10,
          height: 10,
        },
      }),
      ...(ownerState.size === "md" && {
        width: 16,
        height: 16,
        "& svg": {
          width: 12,
          height: 12,
        },
      }),
      ...(ownerState.size === "lg" && {
        width: 20,
        height: 20,
        "& svg": {
          width: 14,
          height: 14,
        },
      }),
      "&.Mui-disabled, &.Joy-disabled": {
        opacity: 1,
        backgroundColor: resolve("{alias.bg-disabled}"),
        borderColor: resolve("{alias.border-disabled}"),
        color: resolve("{alias.content-disabled}"),
      },
    }),
  },
};
