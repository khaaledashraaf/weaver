import { tokens, resolve } from "../tokens";

export const JoyButtonGroup = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      backgroundColor: resolve("{alias.interactive-secondary-default}"),
      borderColor: resolve("{alias.border-default}"),
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: tokens.radius.lg,
      overflow: "hidden",
      boxShadow: `${tokens.shadow.xs} !important`,
      gap: 0,
      "--ButtonGroup-radius": "0px",
      "--ButtonGroup-separatorSize": "1px",
      "--ButtonGroup-separatorColor": `${resolve("{alias.border-subtle}")} !important`,
      "--ButtonGroup-connected": "0",

      // Child buttons: flat corners, ghost styling
      "& > *": {
        borderRadius: "0 !important",
        backgroundColor: resolve("{alias.interactive-ghost-default}"),
        borderColor: "transparent",
        color: resolve("{alias.content-subtle}"),
        fontWeight: 500,
        fontSize: "0.9375rem",
        boxShadow: "none",
        // Figma: item px + text wrap px (2px) = total
        // xs: 8+2=10, sm: 10+2=12, md: 14+2=16
        ...(ownerState.size === "xs" && { paddingInline: `${tokens.spacing.lg} !important` }),
        ...(ownerState.size === "sm" && { paddingInline: `${tokens.spacing.xl} !important` }),
        ...((ownerState.size === "md" || !ownerState.size) && { paddingInline: `${tokens.spacing["3xl"]} !important` }),
        ...(ownerState.size === "lg" && { paddingInline: `${tokens.spacing["3xl"]} !important` }),

        "&:hover": {
          backgroundColor: resolve("{alias.interactive-ghost-hover}"),
          color: resolve("{alias.content-subtle}"),
        },
        "&:active": {
          backgroundColor: resolve("{alias.interactive-ghost-active}"),
          color: resolve("{alias.content-default}"),
        },
        "&[aria-pressed='true'], &.Joy-selected": {
          backgroundColor: resolve("{alias.interactive-ghost-active}"),
          color: resolve("{alias.content-default}"),
        },
        "&.Mui-disabled, &.Joy-disabled": {
          backgroundColor: resolve("{alias.interactive-ghost-disabled}"),
          color: resolve("{alias.content-disabled}"),
          opacity: 1,
        },
      },
    }),
  },
};
