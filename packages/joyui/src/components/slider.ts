import { tokens } from "../tokens";

export const JoySlider = {
  styleOverrides: {
    root: {
      "--Slider-trackSize": "4px",
      "--Slider-thumbSize": "24px",
    },
    thumb: {
      borderRadius: tokens.radius.full,
      boxShadow: tokens.shadow.sm,
    },
  },
};
