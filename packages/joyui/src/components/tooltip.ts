import { tokens } from "../tokens";
import { font } from "../typography";

export const JoyTooltip = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.md,
      fontSize: font["body-2xs"].fontSize,
      fontWeight: 500,
      lineHeight: font["body-2xs"].lineHeight,
      padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
    },
  },
};
