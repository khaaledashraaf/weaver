import { tokens, resolve } from "../tokens";

export const JoyInput = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      "--Input-focusedThickness": "0px",
      "--Input-focusedHighlight": "transparent",
      borderRadius: tokens.radius["control-default"],
      boxShadow: tokens.shadow.xs,
      transition: "border-color 150ms, box-shadow 150ms",
      fontSize: "0.9375rem",
      lineHeight: "1.5rem",
      "--Input-paddingInline": tokens.spacing.md,
      "--Input-decoratorColor": resolve("{alias.content-muted}"),
      "&.Joy-focused, &:focus-within": {
        borderColor: `${resolve("{alias.border-focus}")} !important`,
        boxShadow: `0 0 0 4px rgba(50, 118, 255, 0.3) !important`,
      },
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
        borderColor: resolve("{alias.border-danger-strong}"),
        "&.Joy-focused, &:focus-within": {
          borderColor: resolve("{alias.border-danger-strong}"),
          boxShadow: `${tokens.shadow.xs} !important`,
        },
      }),
      "&.Mui-disabled, &.Joy-disabled": {
        opacity: 1,
        backgroundColor: resolve("{alias.interactive-input-disabled}"),
        borderColor: resolve("{alias.border-disabled}"),
        boxShadow: "none",
        color: resolve("{alias.content-disabled}"),
        "--Input-decoratorColor": resolve("{alias.content-disabled}"),
      },
    }),
  },
};

export const JoyTextarea = {
  styleOverrides: {
    root: () => ({
      "--Textarea-focusedThickness": "0px",
      "--Textarea-focusedHighlight": "transparent",
      borderRadius: tokens.radius["control-default"],
      boxShadow: tokens.shadow.xs,
      fontSize: "0.9375rem",
      lineHeight: "1.5rem",
      "&.Joy-focused, &:focus-within": {
        borderColor: `${resolve("{alias.border-focus}")} !important`,
        boxShadow: `0 0 0 4px rgba(50, 118, 255, 0.3) !important`,
      },
      "&.Mui-disabled, &.Joy-disabled": {
        opacity: 1,
        backgroundColor: resolve("{alias.interactive-input-disabled}"),
        borderColor: resolve("{alias.border-disabled}"),
        boxShadow: "none",
        color: resolve("{alias.content-disabled}"),
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
      color: resolve("{alias.content-subtle}"),
      ".MuiFormControl-root.Mui-error &, .Joy-error &": {
        color: resolve("{alias.content-danger-default}"),
      },
    },
  },
};
