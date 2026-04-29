import { tokens, resolve } from "../tokens";
import { font } from "../typography";

export const JoyInput = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      "--Input-focusedThickness": tokens.spacing.none,
      "--Input-focusedHighlight": "transparent",
      borderRadius: tokens.radius["control-default"],
      boxShadow: tokens.shadow.xs,
      transition: "border-color 150ms, box-shadow 150ms",
      fontSize: font["body-md"].fontSize,
      lineHeight: font["body-md"].lineHeight,
      "--Input-paddingInline": tokens.spacing.md,
      "--Input-decoratorColor": resolve("{alias.content-muted}"),
      "&.Joy-focused, &:focus-within": {
        borderColor: `${resolve("{alias.border-focus}")} !important`,
        boxShadow: `0 0 0 4px rgba(50, 118, 255, 0.3) !important`,
      },
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
    startDecorator: {
      "& > svg": { width: 20, height: 20 },
    },
    endDecorator: {
      "& > svg": { width: 20, height: 20 },
    },
  },
};

export const JoyTextarea = {
  styleOverrides: {
    root: () => ({
      "--Textarea-focusedThickness": tokens.spacing.none,
      "--Textarea-focusedHighlight": "transparent",
      borderRadius: tokens.radius["control-default"],
      boxShadow: tokens.shadow.xs,
      fontSize: font["body-md"].fontSize,
      lineHeight: font["body-md"].lineHeight,
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
      fontSize: font["body-sm"].fontSize,
      fontWeight: 500,
      color: resolve("{alias.content-default}"),
    },
  },
};

export const JoyFormHelperText = {
  styleOverrides: {
    root: {
      fontSize: font["body-xs"].fontSize,
      color: resolve("{alias.content-subtle}"),
      ".MuiFormControl-root.Mui-error &, .Joy-error &": {
        color: resolve("{alias.content-danger-default}"),
      },
    },
  },
};
