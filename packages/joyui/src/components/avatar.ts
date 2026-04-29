import { tokens } from "../tokens";
import { font } from "../typography";

export const JoyAvatar = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      fontWeight: 600,
      ...(ownerState.size === "sm" && {
        width: 32,
        height: 32,
        fontSize: font["body-sm"].fontSize,
      }),
      ...(ownerState.size === "md" && {
        width: 40,
        height: 40,
        fontSize: font["body-sm"].fontSize,
      }),
      ...(ownerState.size === "lg" && {
        width: 48,
        height: 48,
        fontSize: font["body-md"].fontSize,
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
