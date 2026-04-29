import { tokens } from "../tokens";

export const JoySwitch = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      "--Switch-trackWidth": ownerState.size === "sm" ? "32px" : "40px",
      "--Switch-trackHeight": ownerState.size === "sm" ? "20px" : "24px",
      "--Switch-thumbSize": ownerState.size === "sm" ? "14px" : "18px",
      "--Switch-trackRadius": tokens.radius.full,
      "--Switch-thumbRadius": tokens.radius.full,
      "--Switch-trackBackground": tokens.brand["slate-400"],
      "&:hover": {
        "--Switch-trackBackground": tokens.brand["slate-500"],
      },
      "&.Mui-disabled, &.Joy-disabled": {
        "--Switch-trackBackground": tokens.brand["slate-alpha-50"],
        "--Switch-thumbBackground": tokens.brand["slate-50"],
      },
      [`&.Mui-checked, &.Joy-checked`]: {
        "--Switch-trackBackground": tokens.brand["green-500"],
        "&:hover": {
          "--Switch-trackBackground": tokens.brand["green-600"],
        },
        "&.Mui-disabled, &.Joy-disabled": {
          "--Switch-trackBackground": tokens.brand["green-100"],
          "--Switch-thumbBackground": tokens.brand["slate-50"],
        },
      },
    }),
    thumb: {
      background: tokens.brand["base-white"],
    },
  },
};
