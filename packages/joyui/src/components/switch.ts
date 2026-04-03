import { tokens, resolve } from "../tokens";

export const JoySwitch = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      "--Switch-trackWidth": ownerState.size === "sm" ? "36px" : "44px",
      "--Switch-trackHeight": ownerState.size === "sm" ? "20px" : "24px",
      "--Switch-thumbSize": ownerState.size === "sm" ? "16px" : "20px",
      "--Switch-trackBackground": resolve("{alias.interactive-switch-default}"),
      "&:hover": {
        "--Switch-trackBackground": resolve("{alias.interactive-switch-hover}"),
      },
      "&.Mui-disabled, &.Joy-disabled": {
        "--Switch-trackBackground": resolve("{alias.interactive-switch-disabled}"),
        opacity: 0.5,
      },
      [`&.Mui-checked, &.Joy-checked`]: {
        "--Switch-trackBackground": resolve("{alias.interactive-switch-active}"),
        "&:hover": {
          "--Switch-trackBackground": resolve(
            "{alias.interactive-switch-active-hover}"
          ),
        },
      },
    }),
    thumb: {
      background: resolve("{alias.interactive-switch-handle}"),
    },
  },
};
