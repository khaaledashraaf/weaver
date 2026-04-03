import { tokens, resolve } from "../tokens";

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
      gap: tokens.spacing.xxs,
    },
  },
};

export const JoyTab = {
  styleOverrides: {
    root: {
      fontWeight: 500,
      fontSize: "0.9375rem",
      lineHeight: "1.5rem",
      borderRadius: tokens.radius["control-default"],
      padding: `${tokens.spacing.md} ${tokens.spacing.xl}`,
    },
  },
};

export const JoyTable = {
  styleOverrides: {
    root: {
      "--TableCell-headBackground": "rgba(88,123,140,0.07)",
      "--TableCell-paddingX": tokens.spacing.md,
      "& thead th": {
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        color: resolve("{alias.content-subtle}"),
        height: 44,
      },
      "& tbody td": {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
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
      borderRadius: tokens.radius["control-default"],
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
      borderRadius: tokens.radius["control-default"],
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
      color: resolve("{alias.content-muted}"),
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
