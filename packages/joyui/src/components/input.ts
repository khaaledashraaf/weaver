import { tokens, resolve } from "../tokens";

export const JoyInput = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      "--Input-focusedThickness": "2px",
      "--Input-focusedHighlight": resolve("{alias.border-focus}"),
      borderRadius: tokens.radius["control-default"],
      boxShadow: tokens.shadow.xs,
      transition: "border-color 150ms, box-shadow 150ms",
      fontSize: "0.9375rem",
      lineHeight: "1.5rem",
      "--Input-paddingInline": tokens.spacing.md,
      ...(ownerState.size === "sm" && {
        "--Input-minHeight": "28px",
        fontSize: "0.875rem",
      }),
      ...(ownerState.size === "md" && {
        "--Input-minHeight": "32px",
      }),
      ...(ownerState.size === "lg" && {
        "--Input-minHeight": "36px",
      }),
      ...(ownerState.color === "danger" && {
        "--Input-focusedHighlight": resolve("{alias.border-focus-danger}"),
      }),
      "&.Mui-disabled, &.Joy-disabled": {
        opacity: 0.5,
      },
    }),
  },
};

export const JoyTextarea = {
  styleOverrides: {
    root: () => ({
      "--Textarea-focusedThickness": "2px",
      "--Textarea-focusedHighlight": resolve("{alias.border-focus}"),
      borderRadius: tokens.radius["control-default"],
      boxShadow: tokens.shadow.xs,
      fontSize: "0.9375rem",
      lineHeight: "1.5rem",
      "&.Mui-disabled, &.Joy-disabled": {
        opacity: 0.5,
      },
    }),
  },
};

export const JoyFormControl = {
  styleOverrides: {
    root: {
      "--FormLabel-margin": `0 0 ${tokens.spacing.sm} 0`,
    },
  },
};

export const JoyFormLabel = {
  styleOverrides: {
    root: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: resolve("{alias.content-default}"),
    },
  },
};

export const JoyFormHelperText = {
  styleOverrides: {
    root: {
      fontSize: "0.8125rem",
      color: resolve("{alias.content-muted}"),
    },
  },
};
