import { tokens, resolve } from "../tokens";

export const JoyButtonGroup = {
  styleOverrides: {
    root: () => ({
      backgroundColor: resolve("{alias.interactive-secondary-default}"),
      borderColor: resolve("{alias.border-default}"),
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: tokens.radius.lg,
      overflow: "hidden",
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
