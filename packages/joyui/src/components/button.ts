import { tokens, resolve } from "../tokens";

const disabledColor = resolve("{alias.content-disabled}");
const disabledBg = resolve("{alias.interactive-brand-disabled}");
const disabledBorder = resolve("{alias.border-disabled}");

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
      ...(ownerState.size === "xs" && {
        minHeight: 32,
        paddingInline: tokens.spacing.sm,
        "--Button-gap": "2px",
      }),
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

      // ── Link variant ──────────────────────────────────
      ...(ownerState.variant === "link" && {
        backgroundColor: "transparent",
        padding: 0,
        minHeight: "auto",
        borderRadius: 0,
        gap: tokens.spacing.xxs,
        fontWeight: 500,
        textDecoration: "none",
        "&:hover": {
          backgroundColor: "transparent",
          textDecoration: "underline",
        },
        "&:active": {
          backgroundColor: "transparent",
        },

        // Size overrides for link variant
        ...(ownerState.size === "sm" && {
          fontSize: "0.8125rem",
          lineHeight: "20px",
          paddingInline: 0,
          minHeight: "auto",
        }),
        ...(ownerState.size === "md" && {
          fontSize: "0.9375rem",
          lineHeight: "24px",
          paddingInline: 0,
          minHeight: "auto",
        }),
        ...(ownerState.size === "lg" && {
          fontSize: "1.0625rem",
          lineHeight: "28px",
          paddingInline: 0,
          minHeight: "auto",
        }),

        // Color overrides for link variant
        ...(ownerState.color === "primary" && {
          color: resolve("{alias.content-link}"),
          "&:hover": {
            backgroundColor: "transparent",
            textDecoration: "underline",
            color: resolve("{alias.content-link-hover}"),
          },
          "&:active": {
            backgroundColor: "transparent",
            color: resolve("{alias.content-link-hover}"),
          },
        }),
        ...(ownerState.color === "neutral" && {
          color: resolve("{alias.content-default}"),
          "&:hover": {
            backgroundColor: "transparent",
            textDecoration: "underline",
            color: resolve("{alias.content-subtle}"),
          },
          "&:active": {
            backgroundColor: "transparent",
            color: resolve("{alias.content-subtle}"),
          },
        }),
        ...(ownerState.color === "danger" && {
          color: resolve("{alias.content-danger-default}"),
          "&:hover": {
            backgroundColor: "transparent",
            textDecoration: "underline",
            color: resolve("{alias.content-danger-strong}"),
          },
          "&:active": {
            backgroundColor: "transparent",
            color: resolve("{alias.content-danger-strong}"),
          },
        }),
      }),

      "&:focus-visible": {
        outlineOffset: 2,
        outline: `2px solid ${resolve("{alias.border-focus}")}`,
      },

      // ── Disabled (all variants) ───────────────────────
      "&.Mui-disabled, &.Joy-disabled": {
        opacity: 1,
        color: disabledColor,
        cursor: "not-allowed",
        pointerEvents: "auto",

        // solid → disabled bg, no border
        ...(ownerState.variant === "solid" && {
          backgroundColor: disabledBg,
        }),
        // soft → disabled bg, no border
        ...(ownerState.variant === "soft" && {
          backgroundColor: resolve("{alias.interactive-soft-disabled}"),
        }),
        // outlined → disabled bg + disabled border
        ...(ownerState.variant === "outlined" && {
          backgroundColor: resolve("{alias.interactive-secondary-disabled}"),
          borderColor: disabledBorder,
          boxShadow: "none",
        }),
        // plain/ghost → transparent bg
        ...(ownerState.variant === "plain" && {
          backgroundColor: resolve("{alias.interactive-ghost-disabled}"),
        }),
        // link → transparent bg, no decoration
        ...(ownerState.variant === "link" && {
          backgroundColor: "transparent",
          textDecoration: "none",
        }),
      },
    }),
  },
};

export const JoyIconButton = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      borderRadius: tokens.radius["control-default"],
      transition: "background-color 150ms",
      ...(ownerState.size === "xs" && { width: 32, height: 32 }),
      ...(ownerState.size === "sm" && { width: 36, height: 36 }),
      ...(ownerState.size === "md" && { width: 40, height: 40 }),
      ...(ownerState.size === "lg" && { width: 48, height: 48 }),
      "&:focus-visible": {
        outlineOffset: 2,
        outline: `2px solid ${resolve("{alias.border-focus}")}`,
      },
      "&.Mui-disabled, &.Joy-disabled": {
        opacity: 1,
        color: disabledColor,
        cursor: "not-allowed",
        pointerEvents: "auto",
        ...(ownerState.variant === "solid" && {
          backgroundColor: disabledBg,
        }),
        ...(ownerState.variant === "soft" && {
          backgroundColor: resolve("{alias.interactive-soft-disabled}"),
        }),
        ...(ownerState.variant === "outlined" && {
          backgroundColor: resolve("{alias.interactive-secondary-disabled}"),
          borderColor: disabledBorder,
        }),
        ...(ownerState.variant === "plain" && {
          backgroundColor: resolve("{alias.interactive-ghost-disabled}"),
        }),
      },
    }),
  },
};
