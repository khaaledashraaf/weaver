import { tokens } from "../tokens";

export const JoyAccordionGroup = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.md,
    },
  },
};

export const JoyAccordion = {
  styleOverrides: {
    root: {},
  },
};

export const JoyAccordionSummary = {
  styleOverrides: {
    root: {},
    button: {
      fontWeight: 500,
      padding: `${tokens.spacing.lg} 0`,
    },
  },
};

export const JoyAccordionDetails = {
  styleOverrides: {
    root: {},
    content: {
      paddingBottom: tokens.spacing.lg,
    },
  },
};
