import { tokens } from "../tokens";

export const JoyLink = {
  styleOverrides: {
    root: {
      fontWeight: 500,
      textUnderlineOffset: "4px",
    },
  },
};

export const JoyTabs = {
  styleOverrides: {
    root: {},
  },
};

export const JoyTabList = {
  styleOverrides: {
    root: {
      gap: tokens.spacing.xs,
    },
  },
};

export const JoyTab = {
  styleOverrides: {
    root: {
      fontWeight: 500,
      borderRadius: tokens.radius.sm,
    },
  },
};

export const JoyTable = {
  styleOverrides: {
    root: {
      "--TableCell-headBackground": tokens.alias["interactive-table-header"],
      "& thead th": {
        fontWeight: 600,
        fontSize: "0.8125rem",
        color: tokens.alias["content-subtle"],
      },
    },
  },
};

export const JoySkeleton = {
  styleOverrides: {
    root: {},
  },
};

export const JoySnackbar = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.md,
      boxShadow: tokens.shadow.lg,
    },
  },
};

export const JoyList = {
  styleOverrides: {
    root: {},
  },
};

export const JoyListItem = {
  styleOverrides: {
    root: {},
  },
};

export const JoyListItemButton = {
  styleOverrides: {
    root: {
      borderRadius: tokens.radius.sm,
      gap: tokens.spacing.md,
    },
  },
};

export const JoyListDivider = {
  styleOverrides: {
    root: {},
  },
};

export const JoyListSubheader = {
  styleOverrides: {
    root: {
      fontSize: "0.75rem",
      fontWeight: 600,
      textTransform: "uppercase" as const,
      letterSpacing: "0.05em",
      color: tokens.alias["content-muted"],
    },
  },
};

export const JoyBreadcrumbs = {
  styleOverrides: {
    root: {
      fontSize: "0.875rem",
    },
  },
};
