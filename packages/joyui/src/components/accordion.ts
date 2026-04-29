import { tokens } from "../tokens";
import { font } from "../typography";

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
      fontSize: font["body-lg"].fontSize,
      lineHeight: font["body-lg"].lineHeight,
      padding: `${tokens.spacing["4xl"]} 0`,
    },
  },
};

export const JoyAccordionDetails = {
  styleOverrides: {
    root: {},
    content: {
      fontSize: font["body-md"].fontSize,
      lineHeight: font["body-md"].lineHeight,
      paddingBottom: tokens.spacing["4xl"],
    },
  },
};
