import { tokens, resolve } from "../tokens";
import { font } from "../typography";

export const JoySelect = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      borderRadius: tokens.radius["control-default"],
      boxShadow: tokens.shadow.xs,
      fontSize: font["body-md"].fontSize,
      lineHeight: font["body-md"].lineHeight,
      "--Select-decoratorColor": resolve("{alias.content-subtle}"),
      ...(ownerState.size === "sm" && {
        "--Select-minHeight": "28px",
        fontSize: font["body-sm"].fontSize,
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
      fontSize: font["body-md"].fontSize,
      borderRadius: tokens.radius.xs,
    },
  },
};

export const JoySelectListbox = {
  styleOverrides: {
    root: {
      "@keyframes selectSlideIn": {
        from: {
          opacity: 0,
          transform: "translateY(-4px) scale(0.98)",
        },
        to: {
          opacity: 1,
          transform: "translateY(0) scale(1)",
        },
      },
      animation: "selectSlideIn 150ms ease-out",
      transformOrigin: "top center",
    },
  },
};
