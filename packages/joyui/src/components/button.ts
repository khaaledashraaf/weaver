import { tokens, resolve } from "../tokens";

export const JoyButton = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any; theme: any }) => ({
      fontWeight: 500,
      textTransform: "none" as const,
      borderRadius: tokens.radius["control-default"],
      transition: "background-color 150ms, color 150ms",
      fontSize: "0.9375rem",
      lineHeight: "1.5rem",
      "--Button-gap": "4px",
      ...(ownerState.size === "sm" && {
        minHeight: 36,
        paddingInline: tokens.spacing.md,
      }),
      ...(ownerState.size === "md" && {
        minHeight: 40,
        paddingInline: tokens.spacing.lg,
      }),
      ...(ownerState.size === "lg" && {
        minHeight: 48,
        paddingInline: tokens.spacing.xl,
      }),
      ...(ownerState.variant === "solid" &&
        ownerState.color === "primary" && {
          "&:active": {
            backgroundColor: resolve("{alias.interactive-brand-pressed}"),
          },
        }),
      ...(ownerState.variant === "solid" &&
        ownerState.color === "danger" && {
          "&:active": {
            backgroundColor: resolve("{alias.interactive-danger-pressed}"),
          },
        }),
      ...(ownerState.variant === "outlined" &&
        ownerState.color === "neutral" && {
          boxShadow: tokens.shadow.xs,
          "&:active": {
            backgroundColor: resolve("{alias.interactive-outlined-pressed}"),
          },
        }),
      ...(ownerState.variant === "plain" &&
        ownerState.color === "neutral" && {
          "&:active": {
            backgroundColor: resolve("{alias.interactive-ghost-pressed}"),
          },
        }),
      "&:focus-visible": {
        outlineOffset: 2,
        outline: `2px solid ${resolve("{alias.border-focus}")}`,
      },
      "&.Mui-disabled, &.Joy-disabled": {
        opacity: 0.4,
      },
    }),
  },
};

export const JoyIconButton = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      borderRadius: tokens.radius["control-default"],
      transition: "background-color 150ms",
      ...(ownerState.size === "sm" && { width: 36, height: 36 }),
      ...(ownerState.size === "md" && { width: 40, height: 40 }),
      ...(ownerState.size === "lg" && { width: 48, height: 48 }),
      "&:focus-visible": {
        outlineOffset: 2,
        outline: `2px solid ${resolve("{alias.border-focus}")}`,
      },
      "&.Mui-disabled, &.Joy-disabled": {
        opacity: 0.4,
      },
    }),
  },
};
