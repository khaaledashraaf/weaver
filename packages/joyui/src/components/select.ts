import { tokens, resolve } from "../tokens";

export const JoySelect = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      borderRadius: tokens.radius["control-default"],
      boxShadow: tokens.shadow.xs,
      fontSize: "0.9375rem",
      lineHeight: "1.5rem",
      ...(ownerState.size === "sm" && {
        "--Select-minHeight": "28px",
        fontSize: "0.875rem",
      }),
      ...(ownerState.size === "md" && {
        "--Select-minHeight": "32px",
      }),
      ...(ownerState.size === "lg" && {
        "--Select-minHeight": "36px",
      }),
      "&:focus-visible, &.Joy-focusVisible": {
        outlineOffset: 0,
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
