import { tokens } from "../tokens";

export const JoyAvatar = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      fontWeight: 600,
      ...(ownerState.size === "sm" && {
        width: 32,
        height: 32,
        fontSize: "0.875rem",
      }),
      ...(ownerState.size === "md" && {
        width: 40,
        height: 40,
        fontSize: "0.875rem",
      }),
      ...(ownerState.size === "lg" && {
        width: 48,
        height: 48,
        fontSize: "0.9375rem",
      }),
    }),
  },
};

export const JoyAvatarGroup = {
  styleOverrides: {
    root: {
      "--AvatarGroup-gap": `-${tokens.spacing.sm}`,
    },
  },
};
