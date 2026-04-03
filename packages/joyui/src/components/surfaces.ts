import { tokens, resolve } from "../tokens";

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
      borderRadius: tokens.radius["3xl"],
      boxShadow: "none",
      "--Card-padding": tokens.spacing["3xl"],
      border: `1px solid ${resolve("{alias.border-default}")}`,
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
      borderRadius: tokens.radius["2xl"],
      boxShadow: tokens.shadow.xl,
      padding: 0,
    },
  },
};

export const JoyModalClose = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius["control-default"],
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
