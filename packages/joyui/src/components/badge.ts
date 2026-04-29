import { tokens } from "../tokens";
import { font } from "../typography";

export const JoyBadge = {
  styleOverrides: {
    root: {
      "--Badge-ringSize": tokens.spacing.xxs,
    },
    badge: {
      fontSize: font["body-3xs"].fontSize,
      fontWeight: 500,
      borderRadius: tokens.radius.full,
      lineHeight: font["body-3xs"].lineHeight,
    },
  },
};
