import { tokens } from "../tokens";

export const JoySlider = {
  styleOverrides: {
    root: {
      "--Slider-trackSize": tokens.spacing.xs,
      "--Slider-thumbSize": tokens.spacing["5xl"],
    },
    thumb: {
      borderRadius: tokens.radius.full,
      boxShadow: tokens.shadow.sm,
    },
  },
};
