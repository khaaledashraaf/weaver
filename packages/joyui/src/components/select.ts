import { tokens, resolve } from "../tokens";

export const JoySelect = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      borderRadius: tokens.radius.sm,
      boxShadow: tokens.shadow.xs,
      ...(ownerState.size === "sm" && {
        "--Select-minHeight": "36px",
        fontSize: "0.875rem",
      }),
      ...(ownerState.size === "md" && {
        "--Select-minHeight": "40px",
        fontSize: "0.9375rem",
      }),
      ...(ownerState.size === "lg" && {
        "--Select-minHeight": "44px",
        fontSize: "1rem",
      }),
      "&:focus-visible, &.Joy-focusVisible": {
        outlineOffset: 2,
        outline: `2px solid ${resolve("{alias.border-focus}")}`,
      },
      "&.Mui-disabled, &.Joy-disabled": {
        opacity: 0.5,
      },
    }),
  },
};

export const JoyOption = {
  styleOverrides: {
    root: {
      fontSize: "0.9375rem",
      borderRadius: tokens.radius.xs,
    },
  },
};
