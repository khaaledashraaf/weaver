import { tokens } from "../tokens";
import { font } from "../typography";

export const JoyAlert = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius["control-default"],
      padding: tokens.spacing["3xl"],
      gap: tokens.spacing.xl,
      fontSize: font["body-md"].fontSize,
      fontWeight: 500,
      lineHeight: font["body-md"].lineHeight,
    },
  },
};
