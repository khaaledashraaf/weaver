import { tokens } from "../tokens";

export const JoyBadge = {
  styleOverrides: {
    root: {
      "--Badge-ringSize": "2px",
    },
    badge: {
      fontSize: "0.6875rem",
      fontWeight: 600,
      borderRadius: tokens.radius.full,
    },
  },
};
