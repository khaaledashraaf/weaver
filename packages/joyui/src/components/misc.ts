import { tokens, resolve } from "../tokens";
import { font } from "../typography";

export const JoyLink = {
  styleOverrides: {
    root: {
      fontWeight: 500,
      textUnderlineOffset: tokens.spacing.xs,
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
    root: ({ ownerState }: { ownerState: any }) => ({
      gap: tokens.spacing.xxs,

      // Underline style
      ...(ownerState.variant === "plain" && {
        gap: tokens.spacing["3xl"],
        borderBottom: `1px solid ${resolve("{alias.border-default}")}`,
        borderRadius: 0,
        padding: 0,
        backgroundColor: "transparent",
        "--TabList-radius": "0",
      }),

      // Segment style (full-pill)
      ...(ownerState.variant === "soft" && {
        backgroundColor: resolve("{alias.bg-neutral-subtle}"),
        borderRadius: tokens.radius.full,
        padding: tokens.spacing.xxs,
        "--TabList-radius": tokens.radius.full,
      }),

      // Rounded style
      ...(ownerState.variant === "outlined" && {
        backgroundColor: resolve("{alias.bg-neutral-subtle}"),
        borderRadius: tokens.radius.lg,
        padding: tokens.spacing.xxs,
        border: "none",
        "--TabList-radius": tokens.radius.md,
      }),
    }),
  },
};

export const JoyTab = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any; theme: any }) => ({
      fontSize: font["body-md"].fontSize,
      lineHeight: font["body-md"].lineHeight,
      fontWeight: 400,
      color: resolve("{alias.content-subtle}"),
      borderRadius: tokens.radius["control-default"],
      padding: `${tokens.spacing.md} ${tokens.spacing.xl}`,
      transition: "color 150ms, background-color 150ms",

      // Active tab text
      "&.Mui-selected, &.Joy-selected": {
        fontWeight: 500,
        color: resolve("{alias.content-default}"),
      },

      // Underline tab (inside plain TabList)
      ...(ownerState.variant === "plain" && {
        borderRadius: 0,
        padding: `${tokens.spacing.md} ${tokens.spacing.xxs}`,
        backgroundColor: "transparent",
        "&.Mui-selected, &.Joy-selected": {
          fontWeight: 500,
          color: resolve("{alias.content-default}"),
          backgroundColor: "transparent",
        },
        "&.Mui-selected::after, &.Joy-selected::after": {
          backgroundColor: resolve("{alias.content-brand-default}"),
        },
        "&:not(.Mui-selected)::after": {
          display: "none",
        },
        "&:hover": {
          backgroundColor: "transparent",
        },
      }),

      // Segment tab (inside soft TabList)
      ...(ownerState.variant === "soft" && {
        borderRadius: tokens.radius.full,
        backgroundColor: "transparent",
        "&.Mui-selected, &.Joy-selected": {
          fontWeight: 500,
          color: resolve("{alias.content-default}"),
          backgroundColor: resolve("{alias.bg-default}"),
          boxShadow: tokens.shadow.sm,
        },
        "&::after": { display: "none" },
        "&:hover:not(.Mui-selected)": {
          backgroundColor: "transparent",
        },
      }),

      // Rounded tab (inside outlined TabList)
      ...(ownerState.variant === "outlined" && {
        borderRadius: tokens.radius.md,
        border: "none",
        backgroundColor: "transparent",
        "&.Mui-selected, &.Joy-selected": {
          fontWeight: 500,
          color: resolve("{alias.content-default}"),
          backgroundColor: resolve("{alias.bg-default}"),
          boxShadow: tokens.shadow.sm,
          border: "none",
        },
        "&::after": { display: "none" },
        "&:hover:not(.Mui-selected)": {
          backgroundColor: "transparent",
        },
      }),
    }),
  },
};

export const JoyTable = {
  styleOverrides: {
    root: ({ ownerState }: { ownerState: any }) => ({
      "--TableCell-headBackground": resolve("{alias.interactive-table-header}"),
      "--TableCell-paddingX": tokens.spacing.md,
      "--TableRow-hoverBackground": resolve("{alias.interactive-ghost-hover}"),
      "& thead th": {
        fontWeight: 500,
        fontSize: font["body-sm"].fontSize,
        lineHeight: font["body-sm"].lineHeight,
        color: resolve("{alias.content-subtle}"),
        minHeight: 44,
        verticalAlign: "middle",
        borderBottom: `1px solid ${resolve("{alias.border-subtle}")} !important`,
      },
      "& tbody td": {
        fontSize: font["body-sm"].fontSize,
        lineHeight: font["body-sm"].lineHeight,
        color: resolve("{alias.content-default}"),
        borderBottom: `1px solid ${resolve("{alias.border-subtle}")} !important`,
      },
      ...(ownerState.size === "sm" && {
        "& tbody tr": { height: 48 },
      }),
      ...(ownerState.size === "md" && {
        "& tbody tr": { height: 48 },
      }),
      ...(ownerState.size === "lg" && {
        "& tbody tr": { height: 56 },
      }),
      "& tbody tr:hover td": {
        backgroundColor: resolve("{alias.interactive-ghost-hover}"),
      },
      "& tbody tr[aria-selected='true'] td, & tbody tr.Mui-selected td": {
        backgroundColor: resolve("{alias.interactive-ghost-hover}"),
      },
      "& tbody tr:last-child td": {
        borderBottom: "none !important",
      },
    }),
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
      fontSize: font["body-2xs"].fontSize,
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
      fontSize: font["body-md"].fontSize,
      lineHeight: font["body-md"].lineHeight,
      fontWeight: 500,
      gap: tokens.spacing.xxs,
      "--Breadcrumbs-gap": tokens.spacing.xxs,

      // Separator styling
      "& .MuiBreadcrumbs-separator": {
        color: resolve("{alias.content-muted}"),
        marginInline: tokens.spacing.xxs,
      },

      // Breadcrumb items (links)
      "& li > a, & li > .MuiLink-root": {
        color: resolve("{alias.content-subtle}"),
        fontWeight: 500,
        fontSize: font["body-md"].fontSize,
        textDecoration: "none",
        "&:hover": {
          color: resolve("{alias.content-muted}"),
          textDecoration: "none",
        },
      },

      // Active / current item (last item, non-link)
      "& li:last-child": {
        color: resolve("{alias.content-default}"),
        fontWeight: 500,
      },

      // Disabled state
      "& li > [aria-disabled='true']": {
        color: resolve("{alias.content-disabled}"),
        pointerEvents: "none",
      },
    },
    ol: {
      gap: tokens.spacing.xxs,
      alignItems: "center",
    },
    li: {
      display: "inline-flex",
      alignItems: "center",
      gap: tokens.spacing.xxs,
    },
  },
};
