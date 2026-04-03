import { tokens } from "../tokens";

export const JoySheet = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.md,
    },
  },
};

export const JoyCard = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.lg,
      boxShadow: tokens.shadow.sm,
      "--Card-padding": tokens.spacing["3xl"],
    },
  },
};

export const JoyCardContent = {
  styleOverrides: {
    root: {},
  },
};

export const JoyCardOverflow = {
  styleOverrides: {
    root: {},
  },
};

export const JoyModal = {
  styleOverrides: {
    root: {},
  },
};

export const JoyModalDialog = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.lg,
      boxShadow: tokens.shadow.xl,
      padding: tokens.spacing["5xl"],
    },
  },
};

export const JoyModalClose = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.sm,
    },
  },
};

export const JoyDrawer = {
  styleOverrides: {
    root: {},
  },
};

export const JoyDialogTitle = {
  styleOverrides: {
    root: {
      fontWeight: 600,
    },
  },
};

export const JoyDialogContent = {
  styleOverrides: {
    root: {},
  },
};

export const JoyDialogActions = {
  styleOverrides: {
    root: {
      gap: tokens.spacing.md,
    },
  },
};
