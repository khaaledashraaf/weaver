import { tokens } from "../tokens";

export const JoyAccordionGroup = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.xl,
    },
  },
};

export const JoyAccordion = {
  styleOverrides: {
    root: {
      padding: `0 ${tokens.spacing["4xl"]}`,
    },
  },
};

export const JoyAccordionSummary = {
  styleOverrides: {
    root: {},
    button: {
      fontWeight: 600,
      fontSize: "1.0625rem",
      lineHeight: "1.75rem",
      padding: `${tokens.spacing["4xl"]} 0`,
    },
  },
};

export const JoyAccordionDetails = {
  styleOverrides: {
    root: {},
    content: {
      fontSize: "0.9375rem",
      lineHeight: "1.5rem",
      paddingBottom: tokens.spacing["4xl"],
    },
  },
};
